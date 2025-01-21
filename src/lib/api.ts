import { supabase } from './supabase';

export const createRegistration = async (registration: {
  user_id: string;
  pass_type: 'full' | 'student' | 'virtual';
  amount_paid: number;
  payment_status: 'pending' | 'completed' | 'failed';
}) => {
  const { data: userExists } = await supabase
    .from('users')
    .select('id')
    .eq('id', registration.user_id)
    .single();

  if (!userExists) {
    throw new Error('User not found');
  }

  const { data, error } = await supabase
    .from('registrations')
    .insert([registration])
    .select()
    .single();

  if (error) throw error;
  return data;
};