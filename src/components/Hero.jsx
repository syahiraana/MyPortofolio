'use client'
import { useState, useEffect } from 'react'
import { Download, Github, Linkedin, Instagram, Settings, FileText, Briefcase, Code, Sparkles, Star } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // TYPING ANIMATION STATE
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  
  const fullText = "Data Scientist | Business Analyst | Web Developer"

  const profileImages = [
    '/images/hero/profile3.png',
    '/images/hero/profile2.png'
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? 1 : 0
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // TYPING ANIMATION EFFECT
  useEffect(() => {
    const typingSpeed = 100 // Speed for typing (100ms per character)
    const deletingSpeed = 50 // Speed for deleting (50ms per character - faster)
    const pauseTime = 1500 // Pause at end before deleting (1.5s)

    const handleTyping = () => {
      if (!isDeleting) {
        // TYPING MODE
        if (textIndex < fullText.length) {
          setDisplayText(fullText.substring(0, textIndex + 1))
          setTextIndex(textIndex + 1)
        } else {
          // Reached end, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // DELETING MODE
        if (textIndex > 0) {
          setDisplayText(fullText.substring(0, textIndex - 1))
          setTextIndex(textIndex - 1)
        } else {
          // Reached beginning, start typing again
          setIsDeleting(false)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)
    
    return () => clearTimeout(timer)
  }, [textIndex, isDeleting, fullText])

  const quickStats = [
    { label: 'Data Science', sublabel: 'Concentrating', icon: Briefcase },
    { label: 'Information System', sublabel: 'Majoring', icon: Code },
    { label: '8 Projects', sublabel: 'Total Projects', icon: FileText },
    { label: '3.82 / 4.00', sublabel: 'GPA', icon: Settings }
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/syahiraana_/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/syahiraanapiscouly/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/syahiraana', label: 'GitHub' }
  ]

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-x-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28">
      
      {/* Enhanced Animated Background Elements - Responsive positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-4 sm:left-8 md:left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-slate-200/20 to-slate-300/20 rounded-full animate-morph-1"></div>
        <div className="absolute bottom-32 right-4 sm:right-12 md:right-20 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-gradient-to-br from-slate-300/15 to-slate-400/15 rounded-full animate-morph-2"></div>
        <div className="absolute top-32 right-4 sm:right-12 md:right-20 w-1 h-1 bg-slate-500/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-4 sm:left-12 md:left-20 w-1.5 h-1.5 bg-slate-400/35 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-16 right-4 sm:right-8 md:right-10 w-2 h-2 bg-slate-500/30 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Container dengan responsive padding dan max-width untuk prevent horizontal scroll */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-112px)] flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-10">
          
          {/* Mobile Layout: Image First - MOBILE KIRI BAWAH LAYOUT */}
          <div className="w-full lg:hidden flex justify-center mb-6 px-4 -mt-4 sm:-mt-6">
            <div className="relative">
              {/* Mobile Image - Keep the larger size */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 md:border-8 border-white relative">
                {profileImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Syahira Profile ${index + 1}`}
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              
              {/* Mobile Floating Icons - KIRI BAWAH LAYOUT */}
              {/* Top Right - tetap */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-br from-slate-700 to-slate-900 p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg animate-float">
                <Code size={16} className="sm:w-5 sm:h-5 text-white" />
              </div>
              {/* Right Side - tetap */}
              <div className="absolute top-14 -right-6 sm:top-18 sm:-right-7 bg-gradient-to-br from-slate-800 to-slate-900 p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                <Sparkles size={16} className="sm:w-5 sm:h-5 text-white" />
              </div>
              {/* Bottom Left - MOVED FROM TOP LEFT */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-gradient-to-br from-slate-700 to-slate-900 p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <FileText size={16} className="sm:w-5 sm:h-5 text-white" />
              </div>
              {/* Left Bottom Side - MOVED FROM LEFT SIDE */}
              <div className="absolute bottom-14 -left-6 sm:bottom-18 sm:-left-7 bg-gradient-to-br from-slate-800 to-slate-900 p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
                <Settings size={16} className="sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Left Content - SPACING YANG PAS di tengah-tengah */}
          <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 text-center lg:text-left relative z-10 px-4 lg:px-0 lg:pr-3 xl:pr-4">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-800 mb-4">
                Hi, I'm <span className="gradient-text-hero-navy">Syahira</span>
                <span className="inline-block animate-wave ml-2">👋</span>
              </h1>
              
              {/* TYPING ANIMATION Job Titles */}
              <div className="relative mb-2">
                <h2 className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-medium leading-relaxed min-h-[2rem] flex items-center justify-center lg:justify-start">
                  <span className="shiny-text-navy-grey">
                    {displayText}
                    <span className="animate-pulse text-slate-700 ml-1">|</span>
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-sm xl:text-base 2xl:text-lg text-slate-600 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I transform data into insights and insights into digital experiences, building 
              <span className="font-semibold text-slate-700"> intelligent web solutions</span> that bridge 
              analytics and user experience.
            </p>

            {/* Social Links - Responsive */}
            <div className="mb-6 lg:mb-8">
              <p className="text-slate-600 mb-4 text-xs sm:text-sm flex items-center justify-center lg:justify-start gap-2">
                <Star size={14} className="text-slate-500" />
                Follow me on:
              </p>
              <div className="flex justify-center lg:justify-start gap-2 sm:gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-slate-700 to-slate-900 text-white p-2 sm:p-2.5 rounded-full hover:from-slate-600 hover:to-slate-800 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                      aria-label={social.label}
                    >
                      <Icon size={16} className="sm:w-5 sm:h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Action Button - Responsive */}
            <a
              href="https://drive.google.com/file/d/1hRl5djHfK60t8mTCgo2B58Jl6fMRZQ-l/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center lg:justify-start mb-6 lg:mb-8">
                <button className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:from-slate-700 hover:to-slate-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base hover:scale-105">
                  <Download size={16} className="sm:w-5 sm:h-5" />
                  Transkrip Nilai
                </button>
              </div>
            </a>

            {/* Quick Stats - SUPER COMPACT ONE ROW */}
            <div className="mb-6 lg:mb-8">
              <p className="text-slate-600 mb-4 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm">
                <Sparkles size={14} className="text-slate-500" />
                Quick Stats:
              </p>
              
              {/* SINGLE ROW LAYOUT - semua screen sizes */}
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                {quickStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-slate-800 to-slate-900 text-white pl-2.5 pr-3 py-2 rounded-full hover:scale-105 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 border border-slate-700/50 min-w-fit"
                    >
                      <Icon size={14} className="opacity-80 flex-shrink-0 text-slate-300" />
                      <div className="flex flex-col">
                        <div className="text-xs font-semibold leading-tight text-white whitespace-nowrap">{stat.label}</div>
                        <div className="text-xs opacity-70 text-slate-300 whitespace-nowrap">{stat.sublabel}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image Desktop, TETAP BALANCED */}
          <div className="hidden lg:flex w-1/2 xl:w-1/2 2xl:w-1/2 justify-center relative lg:pl-3 xl:pl-4 2xl:pl-6 -mt-8 lg:-mt-12 xl:-mt-16">
            <div className="relative">
              {/* Desktop Image - Keep the larger size */}
              <div 
                className="w-80 h-80 lg:w-88 lg:h-88 xl:w-96 xl:h-96 2xl:w-104 2xl:h-104 rounded-full overflow-hidden shadow-2xl border-6 lg:border-8 border-white relative"
                style={{
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                }}
              >
                {profileImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Syahira Profile ${index + 1}`}
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              
              {/* Desktop Floating Icons - TETAP BALANCED POSITIONING */}
              {/* Top Right */}
              <div className="absolute -top-4 -right-4 lg:-top-5 lg:-right-5 bg-gradient-to-br from-slate-700 to-slate-900 p-2.5 lg:p-3 rounded-full shadow-lg animate-float">
                <Code size={18} className="lg:w-5 lg:h-5 text-white" />
              </div>
              {/* Right Side */}
              <div className="absolute top-18 -right-7 lg:top-22 lg:-right-8 bg-gradient-to-br from-slate-800 to-slate-900 p-2.5 lg:p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                <Sparkles size={18} className="lg:w-5 lg:h-5 text-white" />
              </div>
              {/* Top Left */}
              <div className="absolute -top-4 -left-4 lg:-top-5 lg:-left-5 bg-gradient-to-br from-slate-700 to-slate-900 p-2.5 lg:p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <FileText size={18} className="lg:w-5 lg:h-5 text-white" />
              </div>
              {/* Left Side */}
              <div className="absolute top-18 -left-7 lg:top-22 lg:-left-8 bg-gradient-to-br from-slate-800 to-slate-900 p-2.5 lg:p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
                <Settings size={18} className="lg:w-5 lg:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* Responsive bottom padding */}
        <div className="pb-8 sm:pb-12 lg:pb-16"></div>
      </div>

      {/* Custom Styles - Keep custom sizes */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-morph-1 {
          animation: morph-1 8s ease-in-out infinite;
        }

        .animate-morph-2 {
          animation: morph-2 10s ease-in-out infinite;
        }

        /* Custom width utilities */
        .w-88 { width: 22rem; }
        .h-88 { height: 22rem; }
        .w-104 { width: 26rem; }
        .h-104 { height: 26rem; }
      `}</style>
    </section>
  )
}
