import React from 'react';
import { GraduationCap, Award, CheckCircle2, BookOpen, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export default function EducationCertsSection() {
  const certifications = [
    {
      title: 'Microsoft Certified: Power BI Data Analyst (PL-300)',
      status: 'Credential Valid',
      issuer: 'Microsoft',
      badge: 'PL-300 Official',
      accent: 'from-amber-400 to-yellow-600',
      description: 'Validated expertise in data modeling, DAX expressions, multi-page Power BI reports, and executive dashboards.'
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      status: 'Coursera Career Program',
      issuer: 'Google',
      badge: 'Google Professional',
      accent: 'from-cyan-400 to-blue-600',
      description: 'Comprehensive training in SQL data cleaning, R statistical programming, data visualization, and analytical problem solving.'
    },
    {
      title: 'Data Analyst Bootcamp Certificate',
      status: 'Hands-on Practical Training (2026)',
      issuer: 'Practical Analytics',
      badge: 'Bootcamp 2026',
      accent: 'from-emerald-400 to-teal-600',
      description: 'Intensive real-world data pipeline building, ETL workflows, Python Pandas scrubbing, and SQL window functions.'
    }
  ];

  return (
    <section id="education" className="w-full py-10 scroll-mt-24">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Education Column */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="flex items-center gap-2">
            <span className="badge-pill badge-cyan">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Background</span>
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Education
          </h2>

          <div className="glass-card p-6 border border-slate-800 space-y-4 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold">DEGREE</span>
                <h3 className="font-heading text-xl font-bold text-white mt-1">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-sm font-semibold text-slate-300 mt-0.5">
                  Srinivas University
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-1 font-mono">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>Mangaluru, India</span>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Relevant Coursework
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>DBMS & Databases</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Applied Statistics</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Data Structures</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Predictive Modeling</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Certifications Column */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="flex items-center gap-2">
            <span className="badge-pill badge-emerald">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Credentials</span>
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Professional Certifications
          </h2>

          <div className="space-y-4">
            {certifications.map((c, i) => (
              <div 
                key={i} 
                className="glass-card p-5 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                      {c.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{c.issuer}</span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{c.title}</span>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="badge-pill font-mono text-[10px]">
                    {c.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
