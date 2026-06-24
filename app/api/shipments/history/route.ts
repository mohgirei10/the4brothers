// app/api/shipments/history/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { supabase } from "@/lib/supabase";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 1. Find the user's REAL database UUID using their Google ID
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('id')
      .eq('google_id', session.user.id)
      .single();

    // If we can't find a profile for this Google ID, they just don't have shipments yet.
    if (profileError || !profile) {
      console.log("No profile found for Google ID:", session.user.id);
      return NextResponse.json({ data: [] }); 
    }

    // 2. Now use the real UUID (profile.id) to fetch their shipments
    const { data, error: shipmentsError } = await supabase
      .from('shipments')
      .select('*')
      .eq('user_id', profile.id)
      .order('updated_at', { ascending: false });

    if (shipmentsError) {
      console.error("Database error fetching shipments:", shipmentsError);
      return NextResponse.json({ error: shipmentsError.message }, { status: 500 });
    }

    return NextResponse.json({ data });

  } catch (err) {
    console.error("API Route Crash:", err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}