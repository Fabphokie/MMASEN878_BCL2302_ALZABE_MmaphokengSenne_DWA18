import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dxldldzhkzjkrmtmtwwb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4bGRsZHpoa3pqa3JtdG10d3diIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzNTcxNTMsImV4cCI6MjAwNTkzMzE1M30.xGfbVkggZlSXKxLerU_61vPU2dDDcmCMvNj8_sf2mog'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;