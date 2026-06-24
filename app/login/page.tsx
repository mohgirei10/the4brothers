'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { signIn } from 'next-auth/react'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      router.push('/');
    }
  };

    const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError('');
    
    const { data, error: googleError } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`, 
      }
    });

    if (googleError) {
      console.error("Google login error:", googleError.message);
      setError(googleError.message);
      setGoogleLoading(false);
    }
await signIn('google', { callbackUrl: '/' });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 px-4 sm:px-6">
      <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-slate-950 shadow-2xl z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-red-600 tracking-tight uppercase">
            Welcome <span className='text-white'>Back</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Address Field */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-white">Email Address</label>
            <div className="flex items-center w-full bg-white border border-gray-200 rounded-2xl focus-within:ring-1 focus-within:ring-gray-900 focus-within:border-gray-900 transition-all overflow-hidden">
              <input
                type="email"
                required
                value={email}
                className="w-full px-4 py-3 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-900 placeholder:text-gray-400"
                placeholder="john@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          
          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-white">Password</label>
            <div className="flex items-center w-full bg-white border border-gray-200 rounded-2xl focus-within:ring-1 focus-within:ring-gray-900 focus-within:border-gray-900 transition-all overflow-hidden">
              <input
                type={showPassword ? "text" : "password"} 
                required
                value={password}
                className="w-full px-4 py-3 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-900 placeholder:text-gray-400"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="pr-4 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors bg-white"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>
          
          {error && (
            <div className="bg-red-950/40 border border-red-900 text-red-400 text-sm py-2.5 px-3 rounded-xl">
              {error}
            </div>
          )}
          
          <button 
            disabled={loading}
            className="w-full px-4 py-3 mt-2 font-medium text-white bg-red-600 rounded-2xl hover:cursor-pointer hover:bg-red-700 transition-all disabled:bg-gray-700 disabled:cursor-not-allowed shadow-md active:scale-[0.98]"
          >
            {loading ? 'Signing In...' : 'Log In'}
          </button>
        </form>

        <p className="mt-8 text-sm text-center text-gray-400 font-medium">
          Don't have an account?{' '}
          <Link href="/signup"
           className="font-semibold text-red-500 hover:text-red-400 transition-colors">
            Sign Up
          </Link>
        </p>

        {/* Muted Premium Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-slate-800"></div>
          <span className="shrink-0 mx-4 text-xs font-light text-slate-400 tracking-wider">
            OR
          </span>
          <div className="grow border-t border-slate-800"></div>
        </div>
     {/* Google Signup Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-800 rounded-2xl text-white font-light hover:bg-white hover:text-black hover:cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1 disabled:opacity-70"
        >
          {googleLoading ? (
            <span className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          )}
          <span>Sign up with Google</span>
        </button>
      </div>
    </div>
  );
}