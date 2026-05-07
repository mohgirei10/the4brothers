import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Shipment from '@/models/Shipment';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    // Create the new shipment in Atlas
    const newShipment = await Shipment.create(body);

    return NextResponse.json(newShipment, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}