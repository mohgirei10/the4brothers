import { NextResponse } from 'next/server';
import connectToDatabase from "@/lib/mongodb";
import mongoose from 'mongoose';

// Define a simple schema inline or import it
const BookingSchema = new mongoose.Schema({
  pickup: String,
  dropoff: String,
  type: String,
  weight: String,
  createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const newBooking = await Booking.create(body);
    
    return NextResponse.json({ success: true, data: newBooking }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Database Error' }, { status: 500 });
  }
}