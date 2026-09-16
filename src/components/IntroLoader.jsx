import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadingOut(true);
            setTimeout(() => {
              onComplete();
            }, 600);
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-[#06070a] text-white flex flex-col justify-between p-6 sm:p-12 transition-opacity duration-600 ${fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Top Header Tag */}
      <div className="flex items-center justify-between font-mono text-xs tracking-widest text-slate-400 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>INITIALIZING SYSTEM</span>
        </div>
        <span>PORTFOLIO v2026</span>
      </div>

      {/* Center Main Title */}
      <div className="max-w-3xl mx-auto text-center space-y-4 my-auto">
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
          YASHVANT
        </h1>
        <p className="font-mono text-xs sm:text-sm tracking-widest text-indigo-300 uppercase">
          DATA ANALYST & FULL-STACK DATA ENGINEER
        </p>
      </div>

      {/* Bottom Progress Bar */}
      <div className="max-w-2xl mx-auto w-full space-y-3 font-mono">
        <div className="flex items-baseline justify-between">
          <span className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            {Math.min(progress, 100)}%
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>SECURE CONNECTION</span>
          </span>
        </div>

        {/* Bar */}
        <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
          <div 
            className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 h-full transition-all duration-75"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="flex justify-between text-[11px] text-slate-500">
          <span>LOADING MODULES...</span>
          <span>SYSTEM READY</span>
        </div>
      </div>

    </div>
  );
}
