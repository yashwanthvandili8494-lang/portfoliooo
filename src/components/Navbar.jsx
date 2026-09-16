import React from 'react';
import { Sparkles, MapPin, Mail, Download, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeSection, scrollToSection }) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#07080d]/85 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-[#090a0f] rounded-[11px] flex items-center justify-center font-heading font-black text-indigo-400 text-lg">
              Y
            </div>
          </div>
          <div>
            <span className="font-heading text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              YASHVANT
            </span>
            <span className="text-[10px] font-mono tracking-wider text-slate-400 flex items-center gap-1 -mt-0.5">
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span>Bengaluru, Karnataka</span>
            </span>
          </div>
        </div>

        {/* Live Performance Badge */}
        <div className="hidden lg:flex items-center gap-3 bg-slate-900/90 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-mono shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-semibold">POWER BI & DATA ANALYST</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">SQL & Python</span>
        </div>

        {/* Nav Anchors */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
          <button 
            onClick={() => scrollToSection('projects')}
            className={`px-3 py-2 rounded-lg transition-colors ${activeSection === 'projects' ? 'bg-indigo-600/20 text-indigo-300 font-semibold' : 'hover:text-white hover:bg-slate-800/40'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className={`px-3 py-2 rounded-lg transition-colors ${activeSection === 'skills' ? 'bg-indigo-600/20 text-indigo-300 font-semibold' : 'hover:text-white hover:bg-slate-800/40'}`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className={`px-3 py-2 rounded-lg transition-colors ${activeSection === 'education' ? 'bg-indigo-600/20 text-indigo-300 font-semibold' : 'hover:text-white hover:bg-slate-800/40'}`}
          >
            Education & Certs
          </button>
          <button 
            onClick={() => scrollToSection('performance')}
            className={`px-3 py-2 rounded-lg transition-colors ${activeSection === 'performance' ? 'bg-indigo-600/20 text-indigo-300 font-semibold' : 'hover:text-white hover:bg-slate-800/40'}`}
          >
            Performance
          </button>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:yashwanthvandili8494@gmail.com"
            className="px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-600/25 transition-all flex items-center gap-1.5 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Yashvant</span>
          </a>
        </div>

      </div>
    </header>
  );
}
