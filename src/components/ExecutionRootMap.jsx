import React from 'react';
import { Database, Cpu, BarChart3, Cloud, Layers, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ExecutionRootMap() {
  const rootNodes = [
    {
      rootId: '// ROOT 01',
      title: 'Data & SQL Analytics',
      description: 'Architecting complex relational SQL schemas, window functions, subqueries, and CTEs across PostgreSQL & MySQL.',
      pill: 'SQL & PostgreSQL',
      icon: Database,
      accent: 'border-cyan-500/40 text-cyan-300'
    },
    {
      rootId: '// ROOT 02',
      title: 'Python ETL & Pipelines',
      description: 'Building automated data ingestion, Pandas scrubbing for 50,000+ raw logs, and RESTful APIs with FastAPI & Node.js.',
      pill: 'Python & Pandas',
      icon: Terminal,
      accent: 'border-amber-500/40 text-amber-300'
    },
    {
      rootId: '// ROOT 03',
      title: 'BI & Visual Storytelling',
      description: 'Designing executive Power BI (PL-300 Certified) revenue reports and interactive Tableau demographic storyboards.',
      pill: 'Power BI & Tableau',
      icon: BarChart3,
      accent: 'border-emerald-500/40 text-emerald-300'
    },
    {
      rootId: '// ROOT 04',
      title: 'Predictive Stats & Machine Learning',
      description: 'Applying Scikit-Learn predictive modeling, statistical hypothesis testing, and fullstack data application delivery.',
      pill: 'Scikit-Learn & ML',
      icon: Cpu,
      accent: 'border-violet-500/40 text-violet-300'
    }
  ];

  return (
    <section id="roadmap" className="w-full py-12">
      <div className="glass-card p-8 md:p-12 border border-slate-800 relative overflow-hidden">
        
        {/* Section Header Tag */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-cyan-400">
            <span>// ENGINEERING ROADMAP</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Core Execution Root Map
          </h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Structured 4-stage data engineering methodology powering end-to-end analytics pipelines.
          </p>
        </div>

        {/* 4 Root Cards Grid matching Screenshot 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rootNodes.map((node, index) => {
            const IconComponent = node.icon;
            return (
              <div 
                key={index}
                className="group glass-card p-6 border border-slate-800/80 hover:border-indigo-500/50 transition-all flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                    <span className="text-cyan-400 font-bold">{node.rootId}</span>
                    <IconComponent className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {node.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {node.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <span className={`inline-block text-[11px] font-mono px-3 py-1 rounded-lg bg-slate-950 border ${node.accent}`}>
                    {node.pill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
