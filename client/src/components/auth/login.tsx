import React from 'react';
import Link from 'next/link';
import loginImage from '../../assets/test.jpg'
import Image from 'next/image';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-rose-50 dark:bg-stone-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-96 md:h-auto bg-stone-50 dark:bg-black rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 p-8 md:p-10 relative">
          <div className="absolute top-5 left-5">
            <span className="text-emerald-800 font-medium text-sm">•IND</span>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-normal text-stone-900 dark:text-stone-50 mb-1">Welcome back!</h1>
            <p className="text-stone-600 text-sm mb-6">Sign in to your account</p>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm text-stone-600 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-stone-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm text-stone-600 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-stone-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600"
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-3 w-3 text-emerald-700 focus:ring-emerald-500 border-stone-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-xs text-stone-500">Remember me</label>
                </div>
                <Link href="#" className="text-xs text-emerald-700 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                className="w-full bg-stone-900 hover:bg-stone-800 text-white py-2 rounded transition-colors"
              >
                Log in
              </button>
            </div>

            <div className="mt-6 text-center text-xs text-stone-500">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-emerald-700 hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 relative h-48 md:h-auto bg-emerald-800">
          <Image src={loginImage} alt="Login Image" className='w-full h-full' />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;