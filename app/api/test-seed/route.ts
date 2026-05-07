import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Shipment from "@/models/Shipment";
export async function GET() {
  try {
    await connectToDatabase();

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