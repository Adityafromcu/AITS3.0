export interface User {
  id: string;
  full_name: string;
  role: string;
  organization?: string;
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  type: 'bootcamp' | 'workshop' | 'talk' | 'panel' | 'challenge';
  description: string;
  start_time: string;
  end_time: string;
  venue: string;
  capacity?: number;
  created_at: string;
}

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  company: string;
  bio: string;
  image_url: string;
  is_keynote: boolean;
  created_at: string;
  speaker_talks?: SpeakerTalk[];
}

export interface SpeakerTalk {
  id: string;
  speaker_id: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  venue: string;
  created_at: string;
}

export interface Registration {
  id: string;
  user_id: string;
  pass_type: 'full' | 'student' | 'virtual';
  amount_paid: number;
  payment_status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface EventRegistration {
  id: string;
  event_id: string;
  user_id: string;
  status: 'registered' | 'waitlisted' | 'cancelled';
  created_at: string;
  event?: Event;
}