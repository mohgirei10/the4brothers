import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // 1. Await params (Required in newer Next.js versions)
    const { id } = await params; 
    const trackingId = id;

    console.log("Searching for ID:", trackingId);

    const { data: shipment, error } = await supabase
      .from('shipments')
      .select('*')
      .ilike('trackingId', trackingId)
      .single();

    // 3. Handle errors or missing data
    if (error || !shipment) {
      console.log("Shipment not found or error:", error?.message);
      return NextResponse.json({ error: 'Shipment not found' }, { status: 404 });
    }

    // 4. Return successful response
    return NextResponse.json(shipment, { status: 200 });
    
  } catch (error) {
    console.error("Runtime error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}