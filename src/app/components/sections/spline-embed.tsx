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
    <div className="relative group">
      {/* Enhanced Professional Glow Effects */}
      <div className="absolute -inset-6 bg-gradient-to-r from-teal-dark/20 via-purple/15 to-teal-light/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-700 animate-pulse-slow"></div>
      <div className="absolute -inset-3 bg-gradient-to-r from-teal-light/25 via-purple/20 to-teal-dark/25 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
      
      {/* Main Container */}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-3xl transform transition-all duration-500 hover:scale-[1.02] group-hover:shadow-2xl",
          className
        )}
        aria-label="Interactive 3D FluxxtoberFest Platform"
      >
        {/* Professional Header */}
        <div className="absolute top-4 left-4 right-4 z-20">
          <div className="flex items-center justify-between glass-corporate rounded-2xl px-5 py-3 border border-teal-light/20">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-teal-light animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-teal-dark animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-3 h-3 rounded-full bg-purple animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="text-sm font-bold text-gradient-corporate">FluxxtoberFest 3D</div>
            </div>
            <div className="glass-corporate bg-teal-dark/80 rounded-xl px-4 py-1.5 border border-teal-light/30">
              <span className="text-xs font-mono text-light animate-pulse">INTERACTIVE</span>
            </div>
          </div>
        </div>

        {/* Enhanced Corner Indicators */}
        <div className="absolute top-3 left-3 w-8 h-8 border-l-3 border-t-3 border-teal-light/60 rounded-tl-2xl animate-pulse"></div>
        <div className="absolute top-3 right-3 w-8 h-8 border-r-3 border-t-3 border-teal-dark/60 rounded-tr-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-3 left-3 w-8 h-8 border-l-3 border-b-3 border-purple/60 rounded-bl-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-3 right-3 w-8 h-8 border-r-3 border-b-3 border-light/60 rounded-br-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Fully Transparent Iframe */}
        <iframe
          title="FluxxtoberFest 3D Experience"
          src={src}
          className="h-full w-full rounded-3xl"
          loading="lazy"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          style={{
            background: 'transparent',
            backgroundColor: 'transparent',
            border: 'none'
          }}
        />
        
        {/* Professional Status Bar */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className="glass-corporate rounded-2xl px-5 py-3 border border-teal-light/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-light/80">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-light rounded-full animate-pulse"></div>
                  <span className="font-medium text-gradient-corporate">Real-time 3D</span>
                </span>
                <span className="hidden md:inline font-mono text-purple">WebGL 2.0</span>
                <span className="font-mono text-teal-dark">60 FPS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-mono text-gradient-corporate">Powered by Spline</div>
                <div className="w-2 h-2 bg-gradient-to-r from-teal-light to-purple rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Hover Effects */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-teal-light/40 transition-all duration-500 pointer-events-none"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-sm font-mono text-gradient-corporate opacity-30 animate-float select-none"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {['{ }', '< />', '[]', '()', '&lt;/&gt;', '{ code }'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>
    </div>
  )
}