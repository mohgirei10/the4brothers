import { NextResponse } from 'next/server';
import Shipment from "@/models/Shipment";
import clientPromise from '@/lib/supabase';
export async function GET() {
  try {
const client = await clientPromise;
    const testShipment = await Shipment.create({
      trackingId: "4B-777",
      senderName: "Test Client",
      pickupLocation: "Gwarinpa, Abuja",
      dropoffLocation: "Lekki, Lagos",
      status: "In Transit",
      currentLocation: "Lokoja Bypass",
    });

    return NextResponse.json({ message: "Test shipment created!", data: testShipment });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}