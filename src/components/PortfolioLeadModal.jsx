import React, { useState } from 'react';
import { Sparkles, CheckCircle, Send, Flame, Rocket, Zap } from 'lucide-react';

export default function PortfolioLeadModal({ isOpen, onClose }) {
  const [keyword, setKeyword] = useState('PORTFOLIO');
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('Frontend Developer');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-card max-w-lg w-full p-6 sm:p-8 border-2 border-indigo-500/40 shadow-2xl relative overflow-hidden">
        
        {/* Background ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 filter blur-3xl pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-900 border border-slate-800"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-pill">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Make Yours Unforgettable</span>
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white mb-2">
              Comment <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500">"PORTFOLIO"</span> <br />
              & Let's Build Yours 🔥
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              "Your resume tells them what you've done. Your portfolio shows what you can do." Fill in your role below to get a customized tech & design stack plan instantly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">YOUR CURRENT ROLE / TARGET FIELD</label>
                <select 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 font-medium"
                >
                  <option value="Frontend Developer">Frontend Developer (React, GSAP, 3D)</option>
                  <option value="Fullstack Engineer">Fullstack Engineer (React, Node, Vite)</option>
                  <option value="UI/UX Designer">UI/UX Designer & Design Systems Specialist</option>
                  <option value="3D & WebGL Developer">3D & WebGL Graphics Engineer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">ACTION KEYWORD</label>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 font-mono font-bold text-sm">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>PORTFOLIO</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <Rocket className="w-4 h-4" />
                <span>Generate My Personal Portfolio Plan</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-white">
              Portfolio Plan Generated! 🚀
            </h3>

            <p className="text-xs sm:text-sm text-slate-300">
              Target Stack configured for <strong className="text-cyan-400">{role}</strong>. Your personalized 3D showcase architecture is ready to build.
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-indigo-300 text-left space-y-1">
              <div>✓ Hero 3D Rotational Mesh Enabled</div>
              <div>✓ GSAP Scroll-Trigger Timeline Active</div>
              <div>✓ Glassmorphic UI System Configured</div>
              <div>✓ 100/100 Lighthouse Target Set</div>
            </div>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all"
            >
              Back to Portfolio Experience
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
