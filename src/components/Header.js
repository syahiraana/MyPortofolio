// src/components/Header.js
'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Home, User, FolderOpen, Briefcase, Award, MessageSquare, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Detect active section
      const sections = ['home', 'about', 'projects', 'OrganisationalExperience', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    const handleMouseMove = (e) => {
      if (e.clientY < 100) {
        setShowHeader(true)
        clearTimeout(timeoutId)
      } else if (window.scrollY > 100) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          setShowHeader(false)
        }, 2000)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    // Initial check
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: Home, id: 'home' },
    { name: 'About', href: '#about', icon: User, id: 'about' },
    { name: 'Projects', href: '#projects', icon: FolderOpen, id: 'projects' },
    { name: 'Organizational', href: '#OrganisationalExperience', icon: Briefcase, id: 'OrganisationalExperience' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      showHeader ? 'translate-y-0' : '-translate-y-full'
    } ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
      
      {/* Container with consistent max-width and padding */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-slate-700">
              <span className="text-slate-500">&lt;/&gt;</span> My Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-100 text-sm xl:text-base ${
                      isActive 
                        ? 'bg-slate-800 text-white hover:bg-slate-700' 
                        : 'text-slate-600 hover:text-slate-800'
                    }`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <Icon size={14} className="xl:w-4 xl:h-4" />
                    {item.name}
                  </a>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-slate-700 hover:text-slate-900 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 bg-white rounded-xl shadow-2xl border">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-6 py-3 transition-all duration-300 ${
                      isActive 
                        ? 'bg-slate-800 text-white mx-4 rounded-lg mb-2' 
                        : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                    }`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <Icon size={18} />
                    {item.name}
                  </a>
                )
              })}
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}