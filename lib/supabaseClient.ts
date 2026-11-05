import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xsoycjalskziznvzpddh.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzb3ljamFsc2t6aXpudnpwZGRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM4NTkxOTgsImV4cCI6MjEwOTQzNTE5OH0.FEeIlAkw4Vd-E_EwjLf_1GUXD54tbR4OI8C8PFQ_SkI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
