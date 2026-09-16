import React, { useState } from 'react';
import { 
  Database, 
  BarChart3, 
  Binary, 
  Cpu, 
  Code2, 
  Terminal, 
  GitBranch, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  FileSpreadsheet,
  Activity
} from 'lucide-react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'all', label: 'All Technical Skills', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'viz', label: 'Data Visualization', icon: BarChart3 },
    { id: 'tools', label: 'Tools & Databases', icon: Database },
    { id: 'concepts', label: 'Core Analytics Concepts', icon: Cpu }
  ];

  const stackItems = [
    // Languages
    {
      id: 'sql',
      category: 'languages',
      categoryName: 'Languages',
      title: 'SQL Analytics & Querying',
      purpose: 'Complex data manipulation, aggregations, window functions, subqueries, and CTEs across enterprise databases.',
      highlights: ['JOINS & Subqueries', 'Common Table Expressions (CTEs)', 'Window Functions', 'Query Optimization'],
      icon: Database,
      accent: 'from-cyan-500 to-blue-600',
      badge: 'Core Skill'
    },
    {
      id: 'python',
      category: 'languages',
      categoryName: 'Languages',
      title: 'Python for Data Science',
      purpose: 'End-to-end data pipelines, exploratory data analysis, data cleaning, and statistical modeling.',
      highlights: ['Pandas & NumPy', 'Scikit-Learn ML', 'Data Scrubbing', 'Automated ETL Scripts'],
      icon: Terminal,
      accent: 'from-amber-400 to-yellow-600',
      badge: 'Data Processing'
    },
    {
      id: 'js-r',
      category: 'languages',
      categoryName: 'Languages',
      title: 'JavaScript & R Language',
      purpose: 'Web application logic, statistical analysis, and customized dynamic data visualizations.',
      highlights: ['ES6+ JavaScript', 'R Statistical Packages', 'Async Data Fetching', 'Fullstack Integration'],
      icon: Code2,
      accent: 'from-orange-500 to-red-600',
      badge: 'Analytics & Web'
    },

    // Data Visualization
    {
      id: 'power-bi',
      category: 'viz',
      categoryName: 'Data Visualization',
      title: 'Power BI Enterprise Reporting',
      purpose: 'Designing multi-page interactive dashboards tracking KPIs, churn rates, and growth revenue metrics.',
      highlights: ['PL-300 Certified', 'DAX Calculations', 'Dynamic Churn Models', 'Executive Storyboards'],
      icon: BarChart3,
      accent: 'from-amber-400 to-orange-500',
      badge: 'Microsoft Certified'
    },
    {
      id: 'tableau',
      category: 'viz',
      categoryName: 'Data Visualization',
      title: 'Tableau Visual Storytelling',
      purpose: 'Interactive visual storyboards allowing stakeholders to apply cross-regional demographic filters.',
      highlights: ['Interactive Storyboards', 'Demographic Filters', 'Time-series Trends', 'Custom Dashboards'],
      icon: TrendingUp,
      accent: 'from-blue-400 to-indigo-600',
      badge: 'Visual Analytics'
    },
    {
      id: 'excel',
      category: 'viz',
      categoryName: 'Data Visualization',
      title: 'Advanced Excel & Analytics',
      purpose: 'Advanced financial and operational modeling, automated reports, dynamic lookup tables, and pivot charts.',
      highlights: ['XLOOKUP & INDEX/MATCH', 'Pivot Tables & Charts', 'Nested Formulas', 'Data Formatting'],
      icon: FileSpreadsheet,
      accent: 'from-emerald-400 to-teal-600',
      badge: 'Spreadsheet Ops'
    },

    // Tools & Databases
    {
      id: 'relational-db',
      category: 'tools',
      categoryName: 'Tools & Databases',
      title: 'PostgreSQL & MySQL',
      purpose: 'Relational schema design, normalization of 100,000+ tracking rows, and high-performance indexing.',
      highlights: ['Database Schemas', 'Normalization (3NF)', 'PostgreSQL Windowing', 'MySQL Query Tuning'],
      icon: Database,
      accent: 'from-indigo-400 to-cyan-500',
      badge: 'Relational DB'
    },
    {
      id: 'backend-tools',
      category: 'tools',
      categoryName: 'Tools & Databases',
      title: 'Node.js, Express, FastAPI & MongoDB',
      purpose: 'Building RESTful APIs and backend services for continuous data ingestion and document storage.',
      highlights: ['FastAPI Services', 'Express.js Endpoints', 'MongoDB NoSQL', 'Node.js Middleware'],
      icon: Layers,
      accent: 'from-emerald-500 to-cyan-600',
      badge: 'Backend & APIs'
    },
    {
      id: 'git',
      category: 'tools',
      categoryName: 'Tools & Databases',
      title: 'Git & GitHub Version Control',
      purpose: 'Collaborative code management, repository version tracking, and automated CI deployment.',
      highlights: ['Version Control', 'GitHub Repositories', 'Branch Management', 'Clean Documentation'],
      icon: GitBranch,
      accent: 'from-violet-400 to-purple-600',
      badge: 'DevOps & Workflow'
    },

    // Core Concepts
    {
      id: 'eda-cleaning',
      category: 'concepts',
      categoryName: 'Core Concepts',
      title: 'Exploratory Data Analysis (EDA) & Cleaning',
      purpose: 'Handling missing values, outlier detection, data validation, and feature engineering.',
      highlights: ['Outlier Filtering', 'Missing Value Imputation', 'Data Structuring', 'Pattern Recognition'],
      icon: Activity,
      accent: 'from-cyan-400 to-indigo-600',
      badge: 'Data Preparation'
    },
    {
      id: 'etl-pipelines',
      category: 'concepts',
      categoryName: 'Core Concepts',
      title: 'ETL Pipelines & Data Ingestion',
      purpose: 'Automating extraction from 50,000+ raw logs into structured data warehouses.',
      highlights: ['Automated ETL', 'Data Transformation', 'Log Parsing', 'Pipeline Reliability'],
      icon: Binary,
      accent: 'from-purple-500 to-rose-600',
      badge: 'Data Pipelines'
    },
    {
      id: 'predictive-stats',
      category: 'concepts',
      categoryName: 'Core Concepts',
      title: 'Statistical Analysis & Predictive Modeling',
      purpose: 'Applying statistical hypothesis testing, regression analysis, and machine learning models for forecasting.',
      highlights: ['Hypothesis Testing', 'Predictive Modeling', 'Statistical Inference', 'Scikit-Learn ML'],
      icon: Cpu,
      accent: 'from-fuchsia-400 to-pink-600',
      badge: 'Advanced Analytics'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? stackItems 
    : stackItems.filter(item => item.category === activeCategory);

  return (
    <section className="w-full py-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-all border ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600/30 to-violet-600/30 border-indigo-500/60 text-white shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group glass-card glass-card-interactive p-6 flex flex-col justify-between cursor-pointer border border-slate-800/80 hover:border-indigo-500/40"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="badge-pill font-mono text-[10px] tracking-wider uppercase">
                    {item.badge}
                  </span>
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.accent} p-[1px] shadow-sm`}>
                    <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                  <span>{item.title}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-400" />
                </h3>

                {/* Purpose text */}
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {item.purpose}
                </p>
              </div>

              {/* Highlights bullets */}
              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {item.highlights.map((h, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-slate-400 group-hover:text-indigo-200 group-hover:border-indigo-500/20 transition-colors"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal detail dialog when a item is clicked */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card max-w-lg w-full p-6 border-indigo-500/30 shadow-2xl relative">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-900 border border-slate-800"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="badge-pill">{selectedItem.categoryName}</span>
              <span className="text-xs font-mono text-cyan-400">{selectedItem.badge}</span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <span>{selectedItem.title}</span>
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedItem.purpose}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Skill Breakdown & Competencies</h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedItem.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-indigo-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
