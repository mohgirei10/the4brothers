import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"; 
import CredentialsProvider from "next-auth/providers/credentials"; // 1. Import Credentials
import { supabase } from "@/lib/supabase"; // 2. Import your Supabase client

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // 3. ADD THE CREDENTIALS PROVIDER BELOW
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        // Log the user into Supabase Auth
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (error || !data.user) {
          throw new Error(error?.message || "Invalid email or password");
        }

        // Grab the full name we stored inside the user's metadata during signup
        const fullName = data.user.user_metadata?.full_name || "User";

        // Return a clean user object to NextAuth
        return {
          id: data.user.id,
          email: data.user.email,
          name: fullName, 
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // When logging in, pass the user ID and Name to the token
      if (user) {
        token.id = user.id;
        token.name = user.name; // CRITICAL: Captures the credentials name
      }
      
      // If we trigger a manual session update, change the name in the token
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }
      
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        
        if (token.name) {
          session.user.name = token.name;
        }
      }
      return session;
    },
  },
  // Use JWT strategy for session management
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // Points to your custom login page
  }
};