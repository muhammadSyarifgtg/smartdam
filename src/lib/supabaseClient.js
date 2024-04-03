import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://zsqsxbgufvpmcyeizcyp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcXN4Ymd1ZnZwbWN5ZWl6Y3lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMTkwNTUsImV4cCI6MjAyNzY5NTA1NX0.-t6Ve3UUMjWclswZkytpxBcBgJfzl-zeE6V0Ny2iR94')