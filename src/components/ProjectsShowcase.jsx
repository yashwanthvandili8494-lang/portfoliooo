import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, Database, BarChart3, TrendingUp, ArrowUpRight, CheckCircle2, Box, Code2, ShoppingBag, LineChart, Users } from 'lucide-react';

export default function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(1);

  const projects = [
    {
      id: 1,
      title: 'Blinkit Grocery Sales & Performance Analytics',
      subtitle: 'End-to-End Business Intelligence & Sales Pipeline',
      repoUrl: 'https://github.com/yashwanthvandili8494-lang/Blinkit_Data_Analysis',
      stack: ['Python (Pandas)', 'Power BI', 'SQL', 'Excel'],
      accent: 'from-amber-400 via-yellow-500 to-emerald-500',
      badge: 'Grocery BI Analytics',
      metrics: [
        { label: 'Data Source', value: 'Blinkit Transactions' },
        { label: 'Tools Used', value: 'SQL + Python + BI' },
        { label: 'Sales Metrics', value: 'Total Revenue & Fat' },
        { label: 'Dashboard', value: 'Interactive Power BI' }
      ],
      points: [
        'Engineered an end-to-end data pipeline analyzing Blinkit grocery sales, item visibility, and outlet establishment performance.',
        'Extracted, cleaned, and transformed raw transaction datasets using Python (Pandas) and SQL aggregations.',
        'Designed an executive Power BI dashboard displaying total sales, average rating, item fat content, and outlet location breakdown.'
      ],
      interactiveDemo: {
        type: 'blinkit_analytics',
        metricsBreakdown: [
          { item: 'Low Fat vs Regular Items', detail: '64% Low Fat / 36% Regular', status: 'Primary Driver' },
          { item: 'Outlet Type Performance', detail: 'Supermarket Type 1 ($1.2M+)', status: 'Top Volume' },
          { item: 'Item Visibility Index', detail: '0.06 Average Visibility', status: 'Optimized' }
        ]
      }
    },
    {
      id: 2,
      title: 'Customer Trends & Behavioral Analytics',
      subtitle: 'Demographic Segmentation & Churn Pattern Analysis',
      repoUrl: 'https://github.com/yashwanthvandili8494-lang/customer-trends-data-analysis-SQL-Python-PowerBI',
      stack: ['SQL (CTEs)', 'Python (Pandas)', 'Power BI', 'EDA'],
      accent: 'from-indigo-500 via-violet-500 to-cyan-400',
      badge: 'Customer Behavior & Churn',
      metrics: [
        { label: 'Customer Cohorts', value: 'Multi-Segment' },
        { label: 'SQL Querying', value: 'CTEs & Grouping' },
        { label: 'Pattern Discovery', value: 'Purchase Frequency' },
        { label: 'BI Report', value: 'Demographic BI' }
      ],
      points: [
        'Analyzed customer purchasing trends, repeat order rates, and payment method preferences across demographic cohorts.',
        'Written complex SQL queries utilizing CTEs and Window Functions to segment high-value customer groups.',
        'Constructed Power BI visual reports helping stakeholders identify key drivers of customer retention and churn.'
      ],
      interactiveDemo: {
        type: 'customer_segmentation',
        segmentData: [
          { segment: 'High-Value Loyalists', retention: '88%', revenueShare: '42%' },
          { segment: 'At-Risk Churn Segment', retention: '31%', revenueShare: '24%' },
          { segment: 'New Acquisition Cohort', retention: '65%', revenueShare: '34%' }
        ]
      }
    },
    {
      id: 3,
      title: 'Stock Market Performance & Risk Analysis',
      subtitle: 'Quantitative Time-Series Modeling & Moving Averages',
      repoUrl: 'https://github.com/yashwanthvandili8494-lang/Stock-Market-Performance-Analysis',
      stack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
      accent: 'from-cyan-400 via-teal-500 to-emerald-500',
      badge: 'Financial & Time-Series',
      metrics: [
        { label: 'Analytics Type', value: 'Quantitative Stock' },
        { label: 'Moving Averages', value: '50-Day & 200-Day' },
        { label: 'Volatility Metric', value: 'Standard Deviation' },
        { label: 'Visualization', value: 'Matplotlib & Seaborn' }
      ],
      points: [
        'Executed exploratory data analysis and time-series trend modeling on stock market price history.',
        'Calculated moving averages, daily percentage returns, cumulative returns, and risk-volatility indicators.',
        'Visualized market trends and correlation heatmaps to highlight risk-adjusted portfolio performance.'
      ],
      interactiveDemo: {
        type: 'stock_metrics',
        stockIndicators: [
          { indicator: '50-Day vs 200-Day SMA', value: 'Bullish Crossover', status: 'Golden Cross' },
          { indicator: 'Daily Volatility (Std Dev)', value: '1.82%', status: 'Moderate Risk' },
          { indicator: 'Cumulative Return Trend', value: '+34.6%', status: 'Positive Alpha' }
        ]
      }
    },
    {
      id: 4,
      title: 'E-Commerce Sales Performance Dashboard',
      subtitle: 'End-to-End Revenue Leakage & Churn Pipeline',
      repoUrl: 'https://github.com/yashwanthvandili8494-lang',
      stack: ['Python (Pandas)', 'Power BI (PL-300)', 'SQL', 'Data Pipelines'],
      accent: 'from-amber-500 via-orange-500 to-rose-500',
      badge: 'Revenue & Churn Analytics',
      metrics: [
        { label: 'Raw Logs Processed', value: '50,000+' },
        { label: 'Revenue Leakage Isolated', value: '14%' },
        { label: 'Report Pages', value: 'Multi-Page BI' },
        { label: 'Metric Tracking', value: 'Dynamic Churn' }
      ],
      points: [
        'Engineered an end-to-end data pipeline by extracting and cleaning 50,000+ raw e-commerce transaction logs using Python (Pandas).',
        'Designed a comprehensive multi-page Power BI report tracking critical revenue drivers, dynamic churn rates, and growth metrics.',
        'Isolated a 14% revenue leakage pattern in Q3 metrics by deep-diving into categorical performance and product-level returns.'
      ],
      interactiveDemo: {
        type: 'revenue_leakage',
        categoryBreakdown: [
          { category: 'Electronics & Audio', leakage: '14.2%', returns: '3,120 units', impact: 'High Leakage' },
          { category: 'Apparel & Wearables', leakage: '8.5%', returns: '1,450 units', impact: 'Moderate' },
          { category: 'Home & Kitchen', leakage: '3.1%', returns: '420 units', impact: 'Optimal' },
        ]
      }
    },
    {
      id: 5,
      title: 'Global Pandemic Insights & Trend Exploration',
      subtitle: 'Large-Scale Time-Series Normalization & Analytics',
      repoUrl: 'https://github.com/yashwanthvandili8494-lang',
      stack: ['PostgreSQL', 'Tableau', 'CTEs & Window Functions', 'ETL'],
      accent: 'from-cyan-400 via-indigo-500 to-violet-600',
      badge: 'Big Data & Demographics',
      metrics: [
        { label: 'Tracking Rows', value: '100,000+' },
        { label: 'Query Methods', value: 'CTEs & Window Fn' },
        { label: 'Visual Interface', value: 'Tableau Storyboards' },
        { label: 'Filtering', value: 'Cross-Regional' }
      ],
      points: [
        'Extracted and normalized a massive open-source dataset of 100,000+ localized tracking rows using structural SQL schemas.',
        'Executed advanced analytics queries implementing Window Functions, Subqueries, and CTEs to track time-series movement.',
        'Built interactive Tableau storyboards allowing stakeholders to dynamically apply cross-regional demographic filters seamlessly.'
      ],
      interactiveDemo: {
        type: 'sql_query',
        sampleQuery: `WITH RegionalMetrics AS (
  SELECT region_code, date, SUM(active_cases) AS total_cases,
         AVG(recovery_rate) OVER (PARTITION BY region_code ORDER BY date ROWS BETWEEN 7 PRECEDING AND CURRENT ROW) AS moving_avg
  FROM pandemic_tracking_db
  GROUP BY region_code, date
)
SELECT * FROM RegionalMetrics WHERE total_cases > 5000 ORDER BY date DESC;`
      }
    }
  ];

  return (
    <section className="w-full py-10">
      
      {/* Section Title */}
      <div className="flex flex-col items-center text-center space-y-3 mb-10">
        <div className="badge-pill badge-cyan">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>GitHub Projects & Proof of Work</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
          "Your Portfolio Shows What You Can Do"
        </h2>
        <p className="text-slate-300 text-sm max-w-xl">
          Direct GitHub repository links and interactive data analytics demonstrations created by Yashvant.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveProject(p.id)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 ${
              activeProject === p.id
                ? 'bg-gradient-to-r from-indigo-600/30 to-cyan-500/30 border-indigo-500/60 text-white shadow-xl shadow-indigo-500/10'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {p.id === 1 && <ShoppingBag className="w-4 h-4 text-amber-400" />}
            {p.id === 2 && <Users className="w-4 h-4 text-indigo-400" />}
            {p.id === 3 && <LineChart className="w-4 h-4 text-cyan-400" />}
            {p.id === 4 && <BarChart3 className="w-4 h-4 text-rose-400" />}
            {p.id === 5 && <Database className="w-4 h-4 text-emerald-400" />}
            <span>{p.title}</span>
          </button>
        ))}
      </div>

      {/* Active Project Highlight Card */}
      {projects.filter(p => p.id === activeProject).map((p) => (
        <div key={p.id} className="glass-card p-6 md:p-8 border border-indigo-500/30 relative overflow-hidden animate-fadeIn">
          
          {/* Accent Header Bar */}
          <div className={`h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r ${p.accent}`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Detail Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge-pill">{p.badge}</span>
                  <span className="text-xs font-mono text-cyan-400">GITHUB REPO</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                  {p.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {p.subtitle}
                </p>
              </div>

              {/* Key Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {p.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <span className="text-xs font-mono text-slate-400 block">{m.label}</span>
                    <span className="font-heading text-sm font-bold text-cyan-400">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Key Analytical Contributions</h4>
                {p.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Action Link & Stack Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all flex items-center gap-1.5 shadow-md"
                >
                  <span>View GitHub Code</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Interactive Simulator Column */}
            <div className="lg:col-span-5 w-full">
              {p.id === 1 && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
                    <span className="text-amber-400 font-bold flex items-center gap-1.5">
                      <ShoppingBag className="w-4 h-4" />
                      <span>BLINKIT GROCERY METRICS</span>
                    </span>
                    <span className="text-emerald-400 font-bold">SQL + Power BI</span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Blinkit sales performance breakdown by product fat content & establishment type:
                  </p>

                  <div className="space-y-2">
                    {p.interactiveDemo.metricsBreakdown.map((m, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-white block">{m.item}</span>
                          <span className="text-[11px] text-cyan-300 font-mono">{m.detail}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold">{m.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-[11px] font-mono text-amber-200">
                    🔗 <strong>GitHub Repository:</strong> <a href={p.repoUrl} target="_blank" rel="noreferrer" className="underline text-amber-400">yashwanthvandili8494-lang/Blinkit_Data_Analysis</a>
                  </div>
                </div>
              )}

              {p.id === 2 && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
                    <span className="text-indigo-400 font-bold flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      <span>CUSTOMER DEMOGRAPHIC SEGMENTS</span>
                    </span>
                    <span className="text-indigo-400 font-bold">SQL CTEs</span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Demographic retention cohort breakdown & revenue contribution:
                  </p>

                  <div className="space-y-2">
                    {p.interactiveDemo.segmentData.map((s, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono">
                        <div>
                          <span className="font-semibold text-white block">{s.segment}</span>
                          <span className="text-[11px] text-indigo-300">Retention: {s.retention}</span>
                        </div>
                        <span className="text-emerald-400 font-bold">Share: {s.revenueShare}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-[11px] font-mono text-indigo-200">
                    🔗 <strong>GitHub Repository:</strong> <a href={p.repoUrl} target="_blank" rel="noreferrer" className="underline text-cyan-400">customer-trends-data-analysis-SQL-Python-PowerBI</a>
                  </div>
                </div>
              )}

              {p.id === 3 && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <LineChart className="w-4 h-4" />
                      <span>STOCK QUANTITATIVE INDICATORS</span>
                    </span>
                    <span className="text-cyan-400 font-bold">Python Pandas</span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Risk-volatility metrics & moving average technical crossover:
                  </p>

                  <div className="space-y-2">
                    {p.interactiveDemo.stockIndicators.map((s, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono">
                        <div>
                          <span className="font-semibold text-white block">{s.indicator}</span>
                          <span className="text-[11px] text-cyan-300">{s.value}</span>
                        </div>
                        <span className="text-emerald-400 font-bold">{s.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-200">
                    🔗 <strong>GitHub Repository:</strong> <a href={p.repoUrl} target="_blank" rel="noreferrer" className="underline text-cyan-400">Stock-Market-Performance-Analysis</a>
                  </div>
                </div>
              )}

              {p.id === 4 && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
                    <span className="text-amber-400 font-bold flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4" />
                      <span>POWER BI REVENUE REPORT DEMO</span>
                    </span>
                    <span className="text-emerald-400 font-bold">50K Logs Cleaned</span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Simulated breakdown of Q3 revenue leakage pattern isolated by Pandas ETL:
                  </p>

                  <div className="space-y-2">
                    {p.interactiveDemo.categoryBreakdown.map((c, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-white block">{c.category}</span>
                          <span className="text-[11px] text-slate-400 font-mono">Returns: {c.returns}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-amber-400 font-bold block">{c.leakage}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">{c.impact}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {p.id === 5 && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <Database className="w-4 h-4" />
                      <span>POSTGRESQL WINDOW FUNCTION QUERY</span>
                    </span>
                    <span className="text-cyan-400 font-bold">100K Rows Schema</span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Executing CTEs and 7-day moving average Window Functions on pandemic time-series dataset:
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-200 overflow-x-auto">
                    <pre>{p.interactiveDemo.sampleQuery}</pre>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      ))}

    </section>
  );
}
