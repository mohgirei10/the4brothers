import { NextResponse } from 'next/server';
import clientPromise from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    // 1. Check if the environment variable exists inside the handler
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { error: "Database configuration missing on server." },
        { status: 500 }
      );
    }

    const client = await clientPromise;
    const db = client.db("4Brothers"); // Use your DB name
    
    const body = await request.json();
    
    // Your logic to create a shipment...
    const result = await db.collection("shipments").insertOne(body);

    return NextResponse.json({ success: true, id: result.insertedId });

  } catch (error) {
    console.error("Build-time/Runtime error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}