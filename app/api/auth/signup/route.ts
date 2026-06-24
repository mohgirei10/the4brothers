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
          full_name: name,
        },
      },
    });

    if (error) {
      // DEBUG: Send the real Supabase auth error back to the UI
      return NextResponse.json({ message: `Supabase Auth Error: ${error.message}` }, { status: 400 });
    }

    return NextResponse.json({ message: "User registered successfully", user: data.user }, { status: 201 });
  } catch (catchError: any) {
    console.error("==== EXACT DATABASE ERROR ====", catchError); 
    
    // DEBUG: Send the exact code crash reason back to your phone screen
    return NextResponse.json(
      { message: `Server Crash Error: ${catchError?.message || 'Unknown code error'}` },
      { status: 500 }
    );
  }
}