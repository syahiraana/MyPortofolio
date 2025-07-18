// src/components/Hero.js
'use client'
import { useState, useEffect } from 'react'
import { Download, Github, Linkedin, Instagram, Settings, FileText, Briefcase, Code, Sparkles, Star } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  const profileImages = [
    '/images/hero/profile3.png',
    '/images/hero/profile2.png'
  ]

  const fullText = "Business Analyst | Data Scientist | Web Developer"

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

  // Type & Delete Animation
  useEffect(() => {
    let timeout

    if (!isDeleting) {
      // TYPING PHASE - Very fast typing (25ms per character)
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1))
        }, 25) // Super fast typing
      } else {
        // Finished typing, wait 3 seconds then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 3000)
      }
    } else {
      // DELETING PHASE - Fast deleting (40ms per character)
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1))
        }, 40) // Fast deleting
      } else {
        // Finished deleting, start typing again
        setIsDeleting(false)
      }
    }
    
    return () => clearTimeout(timeout)
  }, [displayText, fullText, isDeleting])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

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
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-slate-200/20 to-slate-300/20 rounded-full animate-morph-1"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-br from-slate-300/15 to-slate-400/15 rounded-full animate-morph-2"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-slate-500/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-slate-400/35 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-slate-500/30 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Container with same width as About section */}
      <div className="container mx-auto px-6">
        <div className="min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)] lg:min-h-[calc(100vh-128px)] flex flex-col lg:flex-row items-center">
          
          {/* Mobile Layout: Image First - BIGGER SIZE */}
          <div className="w-full lg:hidden flex justify-center mb-6 pt-0 -mt-30">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white relative">
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
              
              {/* Mobile Floating Icons - Enhanced & Bigger */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-slate-700 to-slate-900 p-3 rounded-full shadow-lg animate-float">
                <Code size={20} className="text-white" />
              </div>
              <div className="absolute top-20 -right-8 bg-gradient-to-br from-slate-800 to-slate-900 p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                <Sparkles size={20} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-2 bg-gradient-to-br from-slate-700 to-slate-900 p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <FileText size={20} className="text-white" />
              </div>
              <div className="absolute bottom-20 -left-8 bg-gradient-to-br from-slate-800 to-slate-900 p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
                <Settings size={20} className="text-white" />
              </div>
            </div>
          </div>

          {/* Left Content - Text Section - Adjusted for bigger image */}
          <div className="w-full lg:w-1/2 xl:w-3/5 lg:pr-6 xl:pr-8 2xl:pr-12 text-center lg:text-left relative z-10">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-slate-800 mb-4">
                Hi, I'm <span className="gradient-text-hero-navy">Syahira</span>
                <span className="inline-block animate-wave ml-2">👋</span>
              </h1>
              
              {/* Type & Delete Animation */}
              <div className="relative h-16 sm:h-20 md:h-24 lg:h-16 xl:h-20 flex items-center justify-center lg:justify-start">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-relaxed">
                  <span className="typewriter-delete-text">
                    {displayText}
                  </span>
                  <span 
                    className={`inline-block w-0.5 h-6 sm:h-7 md:h-8 lg:h-6 xl:h-7 bg-slate-700 ml-1 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-100`}
                  ></span>
                </h2>
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-xl text-slate-600 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I build modern, responsive web apps with clean UI and smooth UX blending design and code to create experiences that feel 
              <span className="font-semibold text-slate-700"> intuitive, fast, and delightful</span> to use.
            </p>

            {/* Social Links - Enhanced */}
            <div className="mb-6 lg:mb-8">
              <p className="text-slate-600 mb-4 text-sm sm:text-base flex items-center justify-center lg:justify-start gap-2">
                <Star size={16} className="text-slate-500" />
                Follow me on:
              </p>
              <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-slate-700 to-slate-900 text-white p-2.5 sm:p-3 rounded-full hover:from-slate-600 hover:to-slate-800 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                      aria-label={social.label}
                    >
                      <Icon size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Action Buttons - Enhanced */}
            <a
              href="https://drive.google.com/file/d/1hRl5djHfK60t8mTCgo2B58Jl6fMRZQ-l/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 lg:mb-12">
                <button className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:from-slate-700 hover:to-slate-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base hover:scale-105">
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  Transkrip Nilai
                </button>
              </div>
            </a>

            {/* Quick Stats - Enhanced Pills Style */}
            <div className="mb-6 lg:mb-8">
              <p className="text-slate-600 mb-4 flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base">
                <Sparkles size={16} className="text-slate-500" />
                Quick Stats:
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {quickStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-slate-800 to-slate-900 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-full hover:scale-105 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 border border-slate-700/50"
                    >
                      <Icon size={14} className="sm:w-4 sm:h-4 opacity-80 flex-shrink-0" />
                      <div className="flex flex-col">
                        <div className="text-xs sm:text-sm font-semibold leading-tight">{stat.label}</div>
                        <div className="text-xs opacity-70">{stat.sublabel}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Content - BIGGER Profile Image (Desktop Only) */}
          <div className="hidden lg:flex w-1/2 xl:w-2/5 justify-center lg:justify-end relative lg:pl-4 xl:pl-6 2xl:pl-8 lg:-mt-12 xl:-mt-16">
            <div className="relative">
              <div 
                className="w-96 h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px] rounded-full overflow-hidden shadow-2xl border-8 border-white relative"
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
              
              {/* Desktop Floating Icons - Enhanced & Bigger */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-slate-700 to-slate-900 p-4 rounded-full shadow-lg animate-float">
                <Code size={24} className="text-white" />
              </div>
              <div className="absolute top-24 -right-10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-full shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                <Sparkles size={24} className="text-white" />
              </div>
              <div className="absolute -bottom-6 -left-4 bg-gradient-to-br from-slate-700 to-slate-900 p-4 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <FileText size={24} className="text-white" />
              </div>
              <div className="absolute bottom-24 -left-8 bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-full shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
                <Settings size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div><br></br><br></br><br></br>
      </div>

      {/* Custom Styles */}
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
      `}</style>
    </section>
  )
}
