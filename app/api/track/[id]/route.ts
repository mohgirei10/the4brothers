import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/supabase';
import Shipment from '@/models/Shipment';
import clientPromise from '@/lib/supabase';

// Notice the 'await params' below
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
const client = await clientPromise;    
    const { id } = await params; 
    const trackingId = id;

    console.log("Searching for ID:", trackingId);

    const shipment = await Shipment.findOne({ 
      trackingId: { $regex: new RegExp(`^${trackingId}$`, "i") } 
    });

    if (!shipment) {
      return NextResponse.json({ error: 'Shipment not found' }, { status: 404 });
    }

    return NextResponse.json(shipment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}