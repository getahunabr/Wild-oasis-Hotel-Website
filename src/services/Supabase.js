import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lrxvtvfmmlrdaazdubjl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyeHZ0dmZtbWxyZGFhemR1YmpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNjA4OTksImV4cCI6MjAzNzYzNjg5OX0.qeyR6OwGhtTLBrdElgkDoA8y4Ce9s-0GRlwxojnt9JE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
