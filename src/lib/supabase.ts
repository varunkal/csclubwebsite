import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  grade: string;
  bio: string;
  image_url?: string;
  display_order: number;
  created_at: string;
};

export type CalendarEvent = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  event_type: string;
  created_at: string;
};

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status?: string;
  created_at?: string;
};
