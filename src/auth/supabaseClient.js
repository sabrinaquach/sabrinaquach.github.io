import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yyichfgdekciuwrhukrr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5aWNoZmdkZWtjaXV3cmh1a3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MTgwMzksImV4cCI6MjA2ODE5NDAzOX0.dSaJPHRIdvDThBD-uRu-cofFpeF4FpkaH_WDNn_nYKA'

export const supabase = createClient(supabaseUrl, supabaseKey)
