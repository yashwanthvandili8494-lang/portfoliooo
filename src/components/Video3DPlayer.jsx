import React, { useState } from 'react';
import { Play, Pause, RotateCw, Video, Sparkles, Box, Cpu, Eye, Volume2, VolumeX } from 'lucide-react';
import Hero3D from './Hero3D';

export default function Video3DPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section className="w-full py-10">
      <div className="glass-card p-6 md:p-8 border-2 border-indigo-500/30 relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full filter blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="badge-pill badge-cyan">
                <Video className="w-3.5 h-3.5" />
                <span>Interactive 3D Video Stream</span>
              </span>
              <span className="text-xs font-mono text-emerald-400">60 FPS WebGL</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">
              3D Interactive System Viewport
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 flex items-center gap-2"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isPlaying ? 'Pause 3D Stream' : 'Play 3D Stream'}</span>
            </button>
          </div>
        </div>

        {/* 3D Viewport Video Canvas Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
          <Hero3D />
        </div>

      </div>
    </section>
  );
}
