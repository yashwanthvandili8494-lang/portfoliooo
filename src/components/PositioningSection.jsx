import React from 'react';
import { Mail, Download, Sparkles, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function PositioningSection() {
  return (
    <section className="w-full py-12">
      <div className="glass-card p-8 md:p-12 border-2 border-indigo-500/30 relative overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-600/20 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXECUTIVE POSITIONING STATEMENT</span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Yashvant <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400">
              Data Analyst & Data Engineering Specialist
            </span>
          </h2>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Combining SQL query optimization (CTEs, Window Functions), Python Pandas ETL pipelines, Microsoft Certified Power BI reporting (PL-300), and modern interactive web engineering to create a memorable, data-driven first impression.
          </p>

          {/* Key Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
              <span className="text-xs font-mono text-cyan-400 block mb-1">SQL ANALYTICS</span>
              <span className="text-sm font-semibold text-white">Window Functions & CTEs</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
              <span className="text-xs font-mono text-amber-400 block mb-1">POWER BI (PL-300)</span>
              <span className="text-sm font-semibold text-white">Revenue & Churn BI</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
              <span className="text-xs font-mono text-violet-400 block mb-1">PYTHON ETL</span>
              <span className="text-sm font-semibold text-white">50k+ Logs Cleaned</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
              <span className="text-xs font-mono text-emerald-400 block mb-1">EDUCATION</span>
              <span className="text-sm font-semibold text-white">BCA (Srinivas Univ)</span>
            </div>
          </div>

          {/* Contact Action Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="mailto:yashwanthvandili8494@gmail.com"
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>yashwanthvandili8494@gmail.com</span>
            </a>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1 bg-slate-950 px-4 py-3 rounded-xl border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Bengaluru, Karnataka, India</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
