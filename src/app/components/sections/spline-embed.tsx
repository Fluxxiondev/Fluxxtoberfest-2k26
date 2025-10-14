/* filepath: c:\Users\butta\OneDrive\Desktop\FluxxtoberFest-2k26\src\app\components\sections\spline-embed.tsx */
"use client"

import { cn } from "@/app/lib/utils";

type Props = {
  scene: string
  className?: string
}

export default function SplineEmbed({ scene, className }: Props) {
  const src = scene?.endsWith("/scene.splinecode") ? scene.replace(/\/scene\.splinecode$/, "/") : scene

  return (
    <div className="relative group w-full">
      {/* Subtle Glow Backdrop */}
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-teal-dark/15 via-purple/10 to-teal-light/15 blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />

      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-glass transition-all duration-500 group-hover:shadow-glass-hover",
          className
        )}
        aria-label="Interactive 3D FluxxtoberFest Platform"
      >
        {/* Header */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between rounded-xl px-4 py-2 bg-bg-secondary/60 backdrop-blur border border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-light animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-teal-dark animate-pulse" style={{ animationDelay: '0.4s' }} />
              <span className="w-2.5 h-2.5 rounded-full bg-purple animate-pulse" style={{ animationDelay: '0.8s' }} />
            </div>
            <span className="text-xs font-semibold tracking-wide text-light/80">FluxxtoberFest 3D</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-1 rounded bg-teal-dark/70 border border-teal-light/30 text-light/90">LIVE</span>
        </div>

        {/* Corner accents using pseudo overlay shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 w-10 h-10 rounded-tl-2xl border-l border-t border-teal-light/40" />
          <div className="absolute top-0 right-0 w-10 h-10 rounded-tr-2xl border-r border-t border-purple/30" />
          <div className="absolute bottom-0 left-0 w-10 h-10 rounded-bl-2xl border-l border-b border-teal-dark/40" />
          <div className="absolute bottom-0 right-0 w-10 h-10 rounded-br-2xl border-r border-b border-light/30" />
        </div>

        {/* Iframe */}
        <div className="relative aspect-[4/3] sm:aspect-[5/3] md:aspect-[16/9] w-full">
          <iframe
            title="FluxxtoberFest 3D Experience"
            src={src}
            className="absolute inset-0 h-full w-full rounded-2xl"
            loading="lazy"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            style={{ background: 'transparent', border: 'none' }}
          />
        </div>

        {/* Status Bar */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between rounded-xl px-4 py-2 bg-bg-secondary/70 backdrop-blur border border-white/10 text-[11px] text-light/70">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-teal-light animate-pulse" />Real‑time 3D</span>
            <span className="hidden sm:inline font-mono text-purple/80">WebGL 2.0</span>
            <span className="font-mono text-teal-light/90">60 FPS</span>
          </div>
          <span className="font-mono text-gradient-corporate">Spline</span>
        </div>
      </div>
    </div>
  )
}