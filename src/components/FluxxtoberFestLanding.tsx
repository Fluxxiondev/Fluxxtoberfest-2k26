'use client';
import React, { useState, useEffect } from 'react';
import { Camera, Code, Sparkles, Users, Calendar, Github, Twitter, Linkedin, ArrowRight, Menu, X, Star, Zap, Trophy, Rocket, Heart, Globe, Award } from 'lucide-react';

export default function FluxxtoberFestLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Contributors', color: 'from-purple-500 to-pink-500' },
    { icon: Code, value: '50+', label: 'Projects', color: 'from-blue-500 to-cyan-500' },
    { icon: Calendar, value: '30', label: 'Days of Code', color: 'from-orange-500 to-red-500' },
    { icon: Trophy, value: '100K+', label: 'Prize Pool', color: 'from-green-500 to-emerald-500' }
  ];

  const features = [
    {
      icon: Sparkles,
      title: '3D Interactive Experience',
      description: 'Immerse yourself in stunning 3D visuals powered by Spline technology',
      gradient: 'from-purple-500 via-pink-500 to-red-500'
    },
    {
      icon: Code,
      title: 'Open Source Community',
      description: 'Join a global community of developers building the future together',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Modern Tech Stack',
      description: 'Built with Next.js, Tailwind CSS, and cutting-edge technologies',
      gradient: 'from-yellow-500 via-orange-500 to-red-500'
    },
    {
      icon: Trophy,
      title: 'Win Amazing Prizes',
      description: 'Compete for exciting prizes and recognition in the tech community',
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    }
  ];

  const mentors = [
    { name: 'Sarah Chen', role: 'Lead 3D Designer', color: 'from-purple-500 to-pink-500', icon: Globe },
    { name: 'Alex Kumar', role: 'Full Stack Developer', color: 'from-blue-500 to-cyan-500', icon: Code },
    { name: 'Maya Rodriguez', role: 'UI/UX Expert', color: 'from-orange-500 to-red-500', icon: Sparkles },
    { name: 'James Wilson', role: 'Open Source Lead', color: 'from-green-500 to-emerald-500', icon: Award }
  ];

  const timeline = [
    { date: 'Oct 1-7', title: 'Registration & Onboarding', status: 'active', icon: Rocket },
    { date: 'Oct 8-14', title: 'Ideation & Team Formation', status: 'upcoming', icon: Users },
    { date: 'Oct 15-28', title: 'Development Sprint', status: 'upcoming', icon: Code },
    { date: 'Oct 29-31', title: 'Final Submissions', status: 'upcoming', icon: Trophy }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30" />
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.4) 1px, transparent 0)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            style={{
              top: '10%',
              left: '10%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          <div 
            className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            style={{
              top: '60%',
              right: '10%',
              transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
            }}
          />
          <div 
            className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
            style={{
              bottom: '10%',
              left: '50%',
              transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
            }}
          />
        </div>

        {/* Scanline Effect */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
            animation: 'scanline 8s linear infinite'
          }}
        />
      </div>

      {/* Navigation with Glass Effect */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50">
                  <Sparkles className="w-7 h-7 animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                FluxxtoberFest
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Features', 'Mentors', 'Timeline'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <button className="group px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-4 flex flex-col gap-4 animate-slideDown">
              {['About', 'Features', 'Mentors', 'Timeline'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors py-2 hover:pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Register Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-block mb-8 animate-fadeIn"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: 1 - scrollY / 500
            }}
          >
            <span className="px-6 py-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 border border-purple-500/50 rounded-full text-sm text-purple-300 backdrop-blur-xl shadow-xl shadow-purple-500/20 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-pulse" />
              October 2025 • Open Source Celebration
              <Sparkles className="w-4 h-4 animate-pulse" />
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-7xl md:text-9xl font-black mb-8 animate-fadeIn"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: 1 - scrollY / 400
            }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
              FluxxtoberFest
            </span>
            <br />
            <span className="text-6xl md:text-8xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2025
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
              opacity: 1 - scrollY / 450
            }}
          >
            Where <span className="text-purple-400 font-semibold">creativity</span> meets{' '}
            <span className="text-cyan-400 font-semibold">technology</span>. A fusion of design, development, and 3D innovation.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: 1 - scrollY / 500
            }}
          >
            <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-3 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Get Started
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="px-10 py-5 border-2 border-white/30 rounded-full font-bold text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-xl hover:scale-105">
              View Projects
            </button>
          </div>

          {/* 3D Placeholder - Enhanced */}
          <div 
            className="relative mt-16 w-full h-[500px] bg-gradient-to-br from-purple-900/40 via-black to-cyan-900/40 rounded-3xl border-2 border-white/20 flex items-center justify-center backdrop-blur-xl shadow-2xl overflow-hidden group"
            style={{
              transform: `translateY(${scrollY * 0.3}px) scale(${1 - scrollY / 2000})`,
              opacity: 1 - scrollY / 600
            }}
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            
            <div className="text-center relative z-10">
              <div className="relative mb-6">
                <Camera className="w-20 h-20 mx-auto text-purple-400 animate-pulse" />
                <div className="absolute inset-0 blur-2xl bg-purple-500/30" />
              </div>
              <p className="text-gray-300 text-xl font-semibold mb-2">3D Spline Scene Placeholder</p>
              <p className="text-gray-500">Interactive 3D model will appear here</p>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={i}
                  className="group text-center p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className={`relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Why FluxxtoberFest?
            </h2>
            <p className="text-2xl text-gray-400">Explore the future of web development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={i}
                  className="group p-10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
                  
                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-semibold">Learn more</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentors Section - Enhanced */}
      <section id="mentors" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Meet Our Mentors
            </h2>
            <p className="text-2xl text-gray-400">Learn from industry experts</p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {mentors.map((mentor, i) => {
              const IconComponent = mentor.icon;
              return (
                <div 
                  key={i}
                  className="group text-center"
                >
                  <div className="relative mb-6">
                    <div className={`w-40 h-40 mx-auto bg-gradient-to-br ${mentor.color} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative overflow-hidden`}>
                      <IconComponent className="w-20 h-20 relative z-10" />
                      {/* Animated Shine */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${mentor.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-semibold">{mentor.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section - Enhanced */}
      <section id="timeline" className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Event Timeline
            </h2>
            <p className="text-2xl text-gray-400">Your journey through FluxxtoberFest</p>
          </div>

          <div className="space-y-12">
            {timeline.map((event, i) => {
              const IconComponent = event.icon;
              return (
                <div 
                  key={i}
                  className="flex gap-8 items-start group"
                >
                  <div className="flex flex-col items-center">
                    <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      event.status === 'active' 
                        ? 'bg-gradient-to-br from-purple-500 to-cyan-500 shadow-xl shadow-purple-500/50' 
                        : 'bg-white/10 backdrop-blur-xl'
                    }`}>
                      <IconComponent className="w-8 h-8" />
                      {event.status === 'active' && (
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 blur-xl opacity-50 animate-pulse" />
                      )}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-white/20 to-transparent mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 group-hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105">
                    <div className="text-sm text-purple-400 font-bold mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                      event.status === 'active' 
                        ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/50 shadow-lg shadow-purple-500/20' 
                        : 'bg-white/5 text-gray-400 border border-white/10'
                    }`}>
                      {event.status === 'active' ? (
                        <>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                          Active Now
                        </>
                      ) : (
                        'Coming Soon'
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative p-16 bg-gradient-to-br from-purple-900/50 via-pink-900/30 to-cyan-900/50 backdrop-blur-2xl rounded-[3rem] border-2 border-white/20 overflow-hidden group hover:border-white/40 transition-all duration-500">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Floating Hearts */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute text-pink-400 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 20 + 10}px`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${4 + Math.random() * 3}s`,
                    opacity: 0.2
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Ready to Build the Future?
              </h2>
              <p className="text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Join <span className="text-purple-400 font-bold">500+</span> developers, designers, and creators in the celebration of open source
              </p>
              <button className="group px-12 py-6 bg-white text-black rounded-full font-black text-xl hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-110 flex items-center gap-3 mx-auto relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket className="w-6 h-6" />
                  Join FluxxtoberFest 2025
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="relative z-10 border-t border-white/10 py-16 px-6 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">FluxxtoberFest</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                A celebration of creativity, community, and code. Building the future together.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <div className="space-y-3">
                {['About', 'Features', 'Mentors', 'Timeline'].map((link) => (
                  <a 
                    key={link} 
                    href={`#${link.toLowerCase()}`} 
                    className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    → {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Connect With Us</h4>
              <div className="flex gap-4 mb-6">
                <a 
                  href="#" 
                  className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Follow us for updates and announcements
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 mb-2 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by{' '}
              <span className="text-white font-semibold">Fluxxiondev</span> and the{' '}
              <span className="text-purple-400 font-semibold">Fluxxion Community</span>
            </p>
            <p className="text-gray-500 text-sm">© 2025 FluxxtoberFest. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}