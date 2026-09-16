import React from 'react';
import { Mail, ArrowRight, ShieldCheck, MapPin, Sparkles, Terminal, Flame, Database, BarChart3, ArrowDown } from 'lucide-react';

export default function HeroSystemProfile({ scrollToSection }) {
  return (
    <section className="w-full pt-4 pb-12">
      
      {/* Reel Tag Banner */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/10">
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>Resume gets you shortlisted. Portfolio gets you hired. 💼🔥</span>
        </div>
      </div>

      <div className="glass-card p-6 md:p-10 border border-slate-800 relative overflow-hidden">
        
        {/* Top Section Tag */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider">
            <span>// SYSTEM PROFILE</span>
          </div>
          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>STATUS: ONLINE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Profile Card with Photo */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative group w-full max-w-xs">
              {/* Glowing card container */}
              <div className="relative rounded-2xl overflow-hidden glass-card p-2 border-2 border-indigo-500/30 group-hover:border-indigo-500/60 transition-all shadow-2xl">
                
                {/* Yashwanth Profile Photo */}
                <div className="w-full h-80 rounded-xl overflow-hidden bg-slate-900 relative">
                  <img 
                    src="/profile.jpg" 
                    alt="Yashwanth Vandili" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                </div>

                {/* Open to Opportunities Pill Tag */}
                <div className="mt-3 p-2.5 rounded-xl bg-slate-950/90 border border-emerald-500/40 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>OPEN TO OPPORTUNITIES</span>
                  </div>
                  <span className="text-slate-400">2026</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Bio & Quick Stat Cards */}
          <div className="lg:col-span-8 space-y-6">
            
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400">
                  Yashvant
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              A passionate <strong className="text-white">Data Analyst & Full-Stack Data Engineer</strong> dedicated to crafting clean, functional, and highly scalable data analytics & web applications. Specializing in SQL query optimization, Python ETL pipelines, Power BI dashboards, and robust backend infrastructure.
            </p>

            {/* 3 Quick Cards matching Screenshot 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
              
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-left space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block">ARCHITECTURE</span>
                <span className="font-heading text-sm font-bold text-white block">Full-Stack Data Analyst</span>
                <span className="text-[11px] text-indigo-300 font-mono">BCA Graduate</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-left space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block">CORE TECH</span>
                <span className="font-heading text-sm font-bold text-white block">Power BI & SQL</span>
                <span className="text-[11px] text-cyan-400 font-mono">PL-300 Certified</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-left space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block">IMPACT METRIC</span>
                <span className="font-heading text-sm font-bold text-white block">50k+ Logs Processed</span>
                <span className="text-[11px] text-emerald-400 font-mono">14% Leakage Isolated</span>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-cyan-300" />
              </button>

              <a
                href="mailto:yashwanthvandili8494@gmail.com"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
