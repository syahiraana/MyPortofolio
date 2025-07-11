// src/components/Hero.js
'use client'
import { useState, useEffect } from 'react'
import { Download, Github, Linkedin, Instagram, Settings, FileText, Briefcase, Code } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
    }, 2000) // Change image every 2 seconds

    return () => clearInterval(interval)
  }, [])

  const quickStats = [
    { label: 'Data Science', sublabel: 'Concentrating', icon: Briefcase },
    { label: 'Information System', sublabel: 'Majoring', icon: Code },
    { label: '4 Projects', sublabel: 'Total Projects', icon: FileText },
    { label: '3.81 / 4.00', sublabel: 'GPA', icon: Settings }
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/syahiraana_/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/syahiraanapiscouly/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/syahiraana', label: 'GitHub' }
  ]

  const floatingElements = [
    { icon: Code, position: 'top-20 right-20', delay: '0s' },
    { icon: FileText, position: 'top-40 right-80', delay: '1s' },
    { icon: Settings, position: 'bottom-40 right-20', delay: '2s' },
    { icon: Briefcase, position: 'bottom-20 left-20', delay: '0.5s' }
  ]

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon
        return (
          <div
            key={index}
            className={`absolute ${element.position} opacity-20 animate-float hidden xl:block`}
            style={{
              animationDelay: element.delay,
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            <div className="bg-slate-800 p-4 rounded-2xl shadow-lg">
              <Icon size={24} className="text-white" />
            </div>
          </div>
        )
      })}

      {/* Container with consistent max-width and padding */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)] lg:min-h-[calc(100vh-128px)] flex flex-col lg:flex-row items-center">
          
          {/* Mobile Layout: Image First - Moved Higher */}
          <div className="w-full lg:hidden flex justify-center mb-8 pt-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl border-8 border-white relative">
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
              
              {/* Mobile Floating Icons */}
              <div className="absolute -top-3 -right-3 bg-slate-800 p-2.5 rounded-full shadow-lg animate-float">
                <Code size={16} className="text-white" />
              </div>
              <div className="absolute top-16 -right-6 bg-slate-800 p-2.5 rounded-full shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                <Code size={16} className="text-white" />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-slate-800 p-2.5 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <FileText size={16} className="text-white" />
              </div>
              <div className="absolute bottom-16 -left-6 bg-slate-800 p-2.5 rounded-full shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
                <Settings size={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* Left Content - Text Section - Made Wider */}
          <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-8 xl:pr-12 2xl:pr-16 text-center lg:text-left relative z-10">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-2">
                Hi, I'm Syahira  
                <span className="inline-block animate-wave ml-2">👋</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-slate-600 font-medium">
                Business Analyst | Data Analyst | Data Scientist | Front-End Developer | Machine Learning Engineer
              </h2>
            </div>

            <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-slate-600 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I build modern, responsive web apps with clean UI and smooth UX blending design and code to create experiences that feel intuitive, fast, and delightful to use.
            </p>

            {/* Social Links */}
            <div className="mb-6 lg:mb-8">
              <p className="text-slate-600 mb-4 text-sm sm:text-base">Follow me on:</p>
              <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 text-white p-2.5 sm:p-3 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label={social.label}
                    >
                      <Icon size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 lg:mb-12">
              
              <button className="bg-slate-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base">
                <Download size={18} className="sm:w-5 sm:h-5" />
                Download Portofolio Canva Creatif.pdf
              </button>
              {/*               <button className="border-2 border-slate-300 text-slate-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Download size={18} className="sm:w-5 sm:h-5" />
                Portofolio Creative 
              </button> */}

            </div>

            {/* Quick Stats - Compact Pills Style */}
            <div className="mb-6 lg:mb-8">
              <p className="text-slate-600 mb-4 flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base">
                <span className="text-base sm:text-lg"></span> Quick Stats:
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {quickStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={index}
                      className="bg-slate-800 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 border border-slate-700"
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

          {/* Right Content - Profile Image (Desktop Only) - Made Smaller */}
          <div className="hidden lg:flex w-2/5 xl:w-1/3 justify-center lg:justify-end relative lg:pl-8 xl:pl-12 2xl:pl-16 lg:-mt-16 xl:-mt-20">
            <div className="relative">
              <div 
                className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white relative"
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
              
              {/* Desktop Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-slate-800 p-3 rounded-full shadow-lg animate-float">
                <Code size={20} className="text-white" />
              </div>
              <div className="absolute top-20 -right-8 bg-slate-800 p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                <Code size={20} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-slate-800 p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <FileText size={20} className="text-white" />
              </div>
              <div className="absolute bottom-20 -left-8 bg-slate-800 p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
                <Settings size={20} className="text-white" />
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
      `}</style>
    </section>
  )
}
