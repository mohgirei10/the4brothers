import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Use Supabase Auth to create a new user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name, // Store the user's name in their user metadata
        },
      },
    });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "User registered successfully", user: data.user }, { status: 201 });
 } catch (error) {
    console.error("==== EXACT DATABASE ERROR ====", error); 
    
    return Response.json(
      { message: "Database error saving new user" },
      { status: 500 }
    );
  }
}