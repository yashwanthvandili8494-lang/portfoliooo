import React from 'react';
import { Flame, Mail, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';

export default function BigFooter({ scrollToSection, onOpenModal }) {
  return (
    <footer className="w-full relative bg-[#040508] border-t border-slate-800/80 pt-16 pb-8 text-slate-400 overflow-hidden">
      
      {/* Top Banner matching Screenshot 4 */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="glass-card p-6 border-2 border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-950 to-indigo-950/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Flame className="w-6 h-6 text-amber-400 fill-amber-400 shrink-0" />
            <div>
              <h3 className="font-heading text-lg font-bold text-white">
                Comment "PORTFOLIO" to make it yours. 🔥
              </h3>
              <p className="text-xs text-slate-300">
                Turn your resume into an unforgettable 3D interactive portfolio today.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenModal}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 shadow-lg shadow-amber-500/20 transition-all shrink-0"
          >
            Generate Portfolio Plan
          </button>
        </div>
      </div>

      {/* Big Watermark Background Text matching Screenshot 4 */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-10">
        <span className="font-heading text-[120px] sm:text-[180px] md:text-[220px] font-black tracking-tighter text-white uppercase whitespace-nowrap">
          YASHVANT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* 3 Column Layout matching Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Left: System Architecture */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">System Architecture</span>
            <h4 className="font-heading text-lg font-bold text-white">
              Full-Stack Data Engineering & Analytics Solutions
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specializing in PostgreSQL analytics, Python Pandas ETL pipelines, Power BI revenue reports, and WebGL interactive presentation.
            </p>
          </div>

          {/* Middle: Status */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">// Status</span>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Open to Opportunities 2026</span>
            </div>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-mono font-medium flex items-center gap-1 pt-1"
            >
              <span>View Proof of Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Region & Email */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block">// Region</span>
            <div className="text-sm font-semibold text-white flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Bengaluru / India</span>
            </div>
            <a 
              href="mailto:yashwanthvandili8494@gmail.com" 
              className="text-xs text-slate-300 hover:text-white font-mono block pt-1 hover:underline"
            >
              yashwanthvandili8494@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom Line matching Screenshot 4 */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>© 2026 Yashvant | Built with React & Tailwind</span>
          </div>
          <span className="pt-2 sm:pt-0">Srinivas University BCA Alum</span>
        </div>

      </div>

    </footer>
  );
}
