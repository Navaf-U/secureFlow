import React from 'react';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-96 md:h-auto bg-stone-50 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 p-8 md:p-10 relative">
          <div className="absolute top-5 left-5">
            <span className="text-emerald-800 font-medium text-sm">•IND</span>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-normal text-stone-900 mb-1">Welcome back!</h1>
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
              <Link href="#" className="text-emerald-700 hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 relative h-48 md:h-auto bg-emerald-800">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="moonGlow" cx="0.7" cy="0.3" r="0.3">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="800" height="600" fill="#2d6a5a" />
            <circle cx="650" cy="120" r="50" fill="#f8e9d6" opacity="0.9" />
            <circle cx="650" cy="120" r="80" fill="url(#moonGlow)" />
            <path d="M0,200 Q100,150 200,190 T400,170 T600,190 T800,170 V600 H0 Z" fill="#1d4d3e" />
            <path d="M-100,250 Q0,200 100,240 T300,210 T500,250 T700,220 T900,250 V600 H-100 Z" fill="#183830" />
            <path d="M-200,350 Q-100,300 0,340 T200,300 T400,350 T600,310 T800,360 V600 H-200 Z" fill="#122a24" />
            <path d="M-100,450 Q50,430 200,450 T500,430 T800,450 V600 H-100 Z" fill="#0c1f1a" />
            <path d="M0,600 L800,600 L800,450 Q650,430 500,450 T200,430 T0,450 Z" fill="#1a3c32" opacity="0.7" />
            <path d="M200,600 L600,600 L600,470 Q500,450 400,470 T200,450 Z" fill="#fff" opacity="0.05" />
            <g transform="translate(550, 280) scale(0.8)">
              <path d="M0,0 C10,-30 30,-60 20,-120" stroke="#433" strokeWidth="6" fill="none" />
              <path d="M0,0 C-5,-20 -25,-50 -40,-90" stroke="#433" strokeWidth="4" fill="none" />
              <path d="M-20,-60 C-25,-70 -15,-85 -5,-100" stroke="#433" strokeWidth="2" fill="none" />
              <g opacity="0.9">
                <circle cx="20" cy="-120" r="25" fill="#fae7ef" />
                <circle cx="0" cy="-110" r="20" fill="#fae7ef" />
                <circle cx="35" cy="-105" r="22" fill="#fae7ef" />
                <circle cx="10" cy="-95" r="18" fill="#fae7ef" />
                <circle cx="30" cy="-140" r="20" fill="#fae7ef" />
                <circle cx="-40" cy="-90" r="15" fill="#fae7ef" />
                <circle cx="-30" cy="-100" r="18" fill="#fae7ef" />
                <circle cx="-5" cy="-100" r="15" fill="#fae7ef" />
                <circle cx="25" cy="-125" r="8" fill="#f8c1db" />
                <circle cx="5" cy="-105" r="7" fill="#f8c1db" />
                <circle cx="-35" cy="-95" r="6" fill="#f8c1db" />
                <circle cx="15" cy="-135" r="7" fill="#f8c1db" />
              </g>
            </g>
            <g transform="translate(650, 320) scale(0.6)">
              <path d="M0,0 C5,-20 15,-40 10,-70" stroke="#433" strokeWidth="4" fill="none" />
              <g opacity="0.8">
                <circle cx="10" cy="-70" r="20" fill="#fae7ef" />
                <circle cx="-5" cy="-60" r="18" fill="#fae7ef" />
                <circle cx="20" cy="-55" r="15" fill="#fae7ef" />
                <circle cx="5" cy="-65" r="5" fill="#f8c1db" />
              </g>
            </g>

            <g opacity="0.6">
              <path d="M520,450 Q530,460 540,450" stroke="#fae7ef" strokeWidth="1" fill="none" />
              <path d="M530,460 Q540,470 550,460" stroke="#fae7ef" strokeWidth="1" fill="none" />
              <path d="M580,470 Q590,480 600,470" stroke="#fae7ef" strokeWidth="1" fill="none" />
              <path d="M600,480 Q610,490 620,480" stroke="#fae7ef" strokeWidth="0.7" fill="none" />
              <path d="M570,490 Q580,500 590,490" stroke="#fae7ef" strokeWidth="0.7" fill="none" />
            </g>
            <path d="M500,420 Q520,400 550,415 T580,410 T600,430 V450 H500 Z" fill="#2a3a36" />
          </svg>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;