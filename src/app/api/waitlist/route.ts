import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const res = await req.json(); // res now contains body
  // Ensure environment variables are defined
  const { email, firstName, lastName } = res;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase URL and Anon Key must be defined in environment variables"
    );
  }
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data, error } = await supabase
    .from("waitlist")
    .insert([{ email: email, first_name: firstName, last_name: lastName }]);

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Thanks for signing up!",
    text: `Thanks for signing up ${firstName}! We will contact you soon!`,
  });

  if (error) {
    throw new Error(error.message);
  }

  return NextResponse.json({ message: "success" });
}
