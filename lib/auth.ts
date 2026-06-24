import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // 1. Import properly

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
callbacks: {
    // Add 'trigger' and 'session' to the parameters here
    async jwt({ token, user, account, trigger, session }) {
      if (user) {
        token.id = user.id;
      }
      
      // ADD THIS: If we trigger an update, change the name in the token
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }
      
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        
        // ADD THIS: Make sure the session uses the updated token name
        if (token.name) {
          session.user.name = token.name;
        }
      }
      return session;
    },
  }
};