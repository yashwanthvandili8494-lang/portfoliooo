import React from 'react';
import { Database, Code2, BarChart3, Cpu, Terminal, Layers, Sparkles } from 'lucide-react';

export default function TechnologiesPills() {
  const techPills = [
    { name: 'SQL (JOINS, CTEs, Window Fn)', cat: 'Language', color: 'border-cyan-500/40 text-cyan-300' },
    { name: 'Python (Pandas, NumPy, Scikit)', cat: 'Data Science', color: 'border-amber-500/40 text-amber-300' },
    { name: 'Power BI (PL-300 Certified)', cat: 'Visualization', color: 'border-orange-500/40 text-orange-300' },
    { name: 'Tableau Storyboards', cat: 'Visualization', color: 'border-indigo-500/40 text-indigo-300' },
    { name: 'Advanced Excel (XLOOKUP, Pivot)', cat: 'Analytics', color: 'border-emerald-500/40 text-emerald-300' },
    { name: 'PostgreSQL Database', cat: 'Database', color: 'border-cyan-500/40 text-cyan-300' },
    { name: 'MySQL Relational DB', cat: 'Database', color: 'border-blue-500/40 text-blue-300' },
    { name: 'MongoDB NoSQL', cat: 'Database', color: 'border-emerald-500/40 text-emerald-300' },
    { name: 'Node.js & Express.js', cat: 'Backend', color: 'border-emerald-500/40 text-emerald-300' },
    { name: 'FastAPI Backend Services', cat: 'Backend', color: 'border-teal-500/40 text-teal-300' },
    { name: 'JavaScript (ES6+)', cat: 'Language', color: 'border-yellow-500/40 text-yellow-300' },
    { name: 'R Statistical Language', cat: 'Language', color: 'border-blue-500/40 text-blue-300' },
    { name: 'Git & GitHub Version Control', cat: 'Tools', color: 'border-violet-500/40 text-violet-300' },
    { name: 'Exploratory Data Analysis (EDA)', cat: 'Concept', color: 'border-fuchsia-500/40 text-fuchsia-300' },
    { name: 'Data Cleaning & Scrubbing', cat: 'Concept', color: 'border-amber-500/40 text-amber-300' },
    { name: 'ETL Pipelines (50k+ Logs)', cat: 'Concept', color: 'border-rose-500/40 text-rose-300' },
    { name: 'Predictive Modeling & Stats', cat: 'Concept', color: 'border-indigo-500/40 text-indigo-300' },
  ];

  return (
    <section id="technologies" className="w-full py-12">
      <div className="glass-card p-8 md:p-12 border border-slate-800 text-center relative overflow-hidden">
        
        {/* Background glow accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl pointer-events-none" />

        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-cyan-400 mb-4">
          <span>// TECHNICAL STACK</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
          Technologies I Work With
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Full-stack expertise across database management, data visualization, Python ETL pipelines, statistical modeling, and web backend infrastructure.
        </p>

        {/* Pills Grid matching Screenshot 5 */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto">
          {techPills.map((pill, idx) => (
            <div
              key={idx}
              className={`px-4 py-2.5 rounded-xl bg-slate-950/90 border ${pill.color} text-xs sm:text-sm font-mono font-medium shadow-md transition-all transform hover:scale-105 hover:bg-slate-900 flex items-center gap-2 cursor-pointer`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>{pill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
