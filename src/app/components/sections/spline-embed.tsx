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
      {/* Subtle glow effects for professional look */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/20 via-blue-400/20 to-purple-500/20 rounded-2xl blur-sm opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
      
      {/* Main container - smaller height */}
      <div
        className={cn(
          "relative h-80 sm:h-96 md:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-2xl glass-corporate shadow-2xl animate-professional-glow transform transition-all duration-500 hover:scale-[1.02]",
          className
        )}
        aria-label="Interactive 3D FluxxtoberFest Platform"
      >
        {/* Professional Header - smaller */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-medium text-gray-400">3D Platform</div>
            </div>
            <div className="glass-corporate rounded-md px-2 py-1">
              <span className="text-xs font-mono text-blue-400">LIVE</span>
            </div>
          </div>
        </div>

        {/* Professional Corner Indicators - smaller */}
        <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-blue-400/40 rounded-tl-lg"></div>
        <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-blue-400/40 rounded-tr-lg"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-blue-400/40 rounded-bl-lg"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-blue-400/40 rounded-br-lg"></div>
        
        <iframe
          title="FluxxtoberFest Platform Experience"
          src={src}
          className="h-full w-full rounded-2xl"
          loading="lazy"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
        />
        
        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
        
        {/* Professional Status Bar - smaller and at bottom */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="glass-corporate rounded-lg px-3 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="hidden sm:inline">Connected</span>
                </span>
                <span className="hidden md:inline">WebGL 2.0</span>
                <span>60 FPS</span>
              </div>
              <div className="text-xs font-mono text-blue-400">
                Spline
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles for smooth movement like previous code */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-professional-float"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}