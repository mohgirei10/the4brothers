import { NextResponse } from 'next/server';
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Generate a random tracking ID (e.g., 4B-A7F92K0P)
    const randomString = Math.random().toString(36).substring(2, 10).toUpperCase();
    const trackingId = `4B-${randomString}`;

    // Insert into Supabase
    const { data, error } = await supabase
      .from('shipments')
      .insert([
        {
          tracking_id: trackingId,
          sender_name: body.senderName,
          pickup_location: body.pickupLocation,
          dropoff_location: body.dropoffLocation,
          status: 'Picked Up',
          current_location: body.pickupLocation // Usually starts at pickup
        }
      ])
      .select();

    if (error) throw error;
    
    return NextResponse.json({ success: true, trackingId: trackingId, data: data[0] }, { status: 201 });

  } catch (error: any) {
    console.error("==== CREATE SHIPMENT ERROR ====", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}