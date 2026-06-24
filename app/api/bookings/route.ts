import { NextResponse } from 'next/server';
import { supabase } from "@/lib/supabase"; 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          pickup: body.pickup,
          dropoff: body.dropoff,
          type: body.type,
          weight: body.weight,
        }
      ])
      .select();
    if (error) {
      console.error("==== SUPABASE ERROR ====", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    
    return NextResponse.json({ success: true, data: data[0] }, { status: 201 });

  } catch (error) {
    console.error("==== SERVER ERROR ====", error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}