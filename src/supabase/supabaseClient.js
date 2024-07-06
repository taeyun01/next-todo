import { createClient } from "@supabase/supabase-js";

const NEXT_PUBLIC_SUPABASE_URL = import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const NEXT_PUBLIC_SUPABASE_KEY = import.meta.env.NEXT_PUBLIC_SUPABASE_KEY;

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_KEY
);

export default supabase;
