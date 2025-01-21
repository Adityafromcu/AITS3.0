export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          full_name: string
          role: string
          organization: string | null
          created_at: string
        }
        Insert: {
          id: string
          full_name: string
          role: string
          organization?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          role?: string
          organization?: string | null
          created_at?: string
        }
      }
      registrations: {
        Row: {
          id: string
          user_id: string
          pass_type: 'full' | 'student' | 'virtual'
          amount_paid: number
          payment_status: 'pending' | 'completed' | 'failed'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          pass_type: 'full' | 'student' | 'virtual'
          amount_paid: number
          payment_status?: 'pending' | 'completed' | 'failed'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          pass_type?: 'full' | 'student' | 'virtual'
          amount_paid?: number
          payment_status?: 'pending' | 'completed' | 'failed'
          created_at?: string
        }
      }
    }
  }
}