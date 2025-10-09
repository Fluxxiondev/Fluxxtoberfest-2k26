/* filepath: c:\Users\butta\OneDrive\Desktop\FluxxtoberFest-2k26\src\app\components\sections\Navbar.tsx */
"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "../ui/btn"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-corporate border-b border-gray-800">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Professional Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight hover:opacity-90 transition-all duration-300">
          <span className="text-gradient-corporate font-black">
            FluxxtoberFest
          </span>
          <span className="text-gray-500 ml-2 font-normal">2025</span>
        </Link>

        {/* Professional Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            { name: 'Platform', href: '#platform' },
            { name: 'Projects', href: '#projects' },
            { name: 'Community', href: '#community' },
            { name: 'Resources', href: '#resources' }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="relative text-gray-300 hover:text-white transition-colors group py-2 font-medium"
            >
              <span>{item.name}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          ))}
        </div>

        {/* Professional Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link 
            href="#signin" 
            className="text-gray-300 hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/5"
          >
            Sign In
          </Link>
          <Button className="btn-corporate text-white font-semibold px-6 py-2 rounded-lg">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="glass-corporate rounded-lg p-2 md:hidden hover:bg-white/10 transition-colors"
        >
          <svg className="h-5 w-5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {open ? (
              <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="glass-corporate border-t border-gray-800 md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-4">
            {[
              { name: 'Platform', href: '#platform' },
              { name: 'Projects', href: '#projects' },
              { name: 'Community', href: '#community' },
              { name: 'Resources', href: '#resources' }
            ].map((item) => (
              <Link 
                key={item.name}
                onClick={() => setOpen(false)} 
                href={item.href} 
                className="py-2 text-gray-300 hover:text-white transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Link 
                onClick={() => setOpen(false)} 
                href="#signin" 
                className="text-center py-2 text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Button
                onClick={() => setOpen(false)}
                className="btn-corporate text-white font-semibold px-6 py-2 rounded-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}