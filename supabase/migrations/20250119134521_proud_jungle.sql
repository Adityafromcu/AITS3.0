/*
  # Initial Schema for IEEE AITS 2025

  1. New Tables
    - users (extends Supabase auth.users)
      - id (uuid, references auth.users)
      - full_name (text)
      - role (text)
      - organization (text)
      - created_at (timestamp)
    
    - registrations
      - id (uuid)
      - user_id (uuid, references users)
      - pass_type (text)
      - amount_paid (numeric)
      - payment_status (text)
      - created_at (timestamp)
    
    - events
      - id (uuid)
      - title (text)
      - type (text)
      - description (text)
      - start_time (timestamp)
      - end_time (timestamp)
      - venue (text)
      - capacity (integer)
      - created_at (timestamp)
    
    - event_registrations
      - id (uuid)
      - event_id (uuid, references events)
      - user_id (uuid, references users)
      - status (text)
      - created_at (timestamp)
    
    - speakers
      - id (uuid)
      - name (text)
      - designation (text)
      - company (text)
      - bio (text)
      - image_url (text)
      - is_keynote (boolean)
      - created_at (timestamp)
    
    - speaker_talks
      - id (uuid)
      - speaker_id (uuid, references speakers)
      - title (text)
      - description (text)
      - start_time (timestamp)
      - end_time (timestamp)
      - venue (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add policies for admin users
*/

-- Create custom types
CREATE TYPE pass_type AS ENUM ('full', 'student', 'virtual');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed');
CREATE TYPE registration_status AS ENUM ('registered', 'waitlisted', 'cancelled');
CREATE TYPE event_type AS ENUM ('bootcamp', 'workshop', 'talk', 'panel', 'challenge');

-- Create users table
CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users,
  full_name text NOT NULL,
  role text NOT NULL,
  organization text,
  created_at timestamptz DEFAULT now()
);

-- Create registrations table
CREATE TABLE registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users NOT NULL,
  pass_type pass_type NOT NULL,
  amount_paid numeric NOT NULL,
  payment_status payment_status NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create events table
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type event_type NOT NULL,
  description text NOT NULL,
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  venue text NOT NULL,
  capacity integer,
  created_at timestamptz DEFAULT now()
);

-- Create event_registrations table
CREATE TABLE event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events NOT NULL,
  user_id uuid REFERENCES users NOT NULL,
  status registration_status NOT NULL DEFAULT 'registered',
  created_at timestamptz DEFAULT now(),
  UNIQUE(event_id, user_id)
);

-- Create speakers table
CREATE TABLE speakers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  designation text NOT NULL,
  company text NOT NULL,
  bio text NOT NULL,
  image_url text NOT NULL,
  is_keynote boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create speaker_talks table
CREATE TABLE speaker_talks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  speaker_id uuid REFERENCES speakers NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  venue text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE speaker_talks ENABLE ROW LEVEL SECURITY;

-- Create policies for users table
CREATE POLICY "Users can view their own data"
  ON users
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own data"
  ON users
  FOR UPDATE
  USING (auth.uid() = id);

-- Create policies for registrations table
CREATE POLICY "Users can view their own registrations"
  ON registrations
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own registrations"
  ON registrations
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create policies for events table
CREATE POLICY "Anyone can view events"
  ON events
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policies for event_registrations table
CREATE POLICY "Users can view their own event registrations"
  ON event_registrations
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can register for events"
  ON event_registrations
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create policies for speakers table
CREATE POLICY "Anyone can view speakers"
  ON speakers
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policies for speaker_talks table
CREATE POLICY "Anyone can view speaker talks"
  ON speaker_talks
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX idx_registrations_user_id ON registrations(user_id);
CREATE INDEX idx_event_registrations_event_id ON event_registrations(event_id);
CREATE INDEX idx_event_registrations_user_id ON event_registrations(user_id);
CREATE INDEX idx_speaker_talks_speaker_id ON speaker_talks(speaker_id);
CREATE INDEX idx_events_start_time ON events(start_time);