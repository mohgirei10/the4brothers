import { NextResponse } from 'next/server';
import { supabase } from "@/lib/supabase"; 

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    
    const { data, error } = await supabase
      .from('shipments')
      .update({ 
        current_location: body.location,
        status: body.status,
      })
      .eq('tracking_id', body.trackingId) 
      .select();

    if (error) throw error;
    
    return NextResponse.json({ success: true, data: data[0] }, { status: 200 });

  } catch (error: any) {
    console.error("==== UPDATE ERROR ====", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}