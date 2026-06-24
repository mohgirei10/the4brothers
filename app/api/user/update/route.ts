import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { authOptions } from "@/lib/auth"; // Ensure this import is correct

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! 
);

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    console.log("Verified Session:", session); 

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized: ID missing", { status: 401 });
    }

    const { name } = await req.json();

   const { error } = await supabaseAdmin
      .from('profiles')
      .update({ name })
      .eq('google_id', session.user.id);

    if (error) {
      console.error("Supabase Error:", error);
      return new NextResponse("Database Error", { status: 500 });
    }

    return NextResponse.json({ success: true });
    
  } catch (err) {
    console.error("API Route Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}