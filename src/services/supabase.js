import { createClient } from "@supabase/supabase-js";

const KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZWFodWZtaGdjbGhkZXBpaGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5NjM0MjYsImV4cCI6MjAzMTUzOTQyNn0.4PMUsnMSSeb_L6PsVcb3Z9IwT81IrKpzlhKYU0ZKy_c";

const supabaseUrl = "https://bseahufmhgclhdepihgn.supabase.co";
const supabaseKey = KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

export { supabaseUrl };
