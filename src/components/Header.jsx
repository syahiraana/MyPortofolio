// src/components/Header.jsx
'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Home, User, FolderOpen, Briefcase, Code, MessageSquare, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [currentTheme, setCurrentTheme] = useState('light') // light or dark

  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = ['home', 'about', 'projects', 'OrganisationalExperience', 'technical-skills', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          
          // Determine theme based on section (alternating pattern)
          // home(0)=light, about(1)=dark, projects(2)=light, experience(3)=dark, etc.
          const sectionIndex = sections.indexOf(sections[i])
          setCurrentTheme(sectionIndex % 2 === 0 ? 'light' : 'dark')
          break
        }
      }
    }

    const handleMouseMove = (e) => {
      if (e.clientY < 80) {
        setShowHeader(true)
        clearTimeout(timeoutId)
      } else if (window.scrollY > 100) {
        clearTimeout(timeoutId)
        // Faster hide duration: 800ms
        timeoutId = setTimeout(() => {
          setShowHeader(false)
        }, 800)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
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
    { name: 'Experience', href: '#OrganisationalExperience', icon: Briefcase, id: 'OrganisationalExperience' },
    { name: 'Skills', href: '#technical-skills', icon: Code, id: 'technical-skills' },
    { name: 'Certifications', href: '#certifications', icon: MessageSquare, id: 'certifications' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  // Dynamic theme classes
  const isDarkTheme = currentTheme === 'dark'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      showHeader ? 'translate-y-0' : '-translate-y-full'
    }`}>
      
      <div className="flex justify-center pt-3 px-4">
        <div className="relative max-w-5xl w-full">
          {/* Bold Navy/White Star Border */}
          <div className={`${isDarkTheme ? 'bold-star-border-dark' : 'bold-star-border-light'} rounded-full p-[1px]`}>
            <div className={`relative transition-all duration-500 ${
              isScrolled 
                ? isDarkTheme
                  ? 'bg-white/30 backdrop-blur-xl shadow-2xl' 
                  : 'bg-slate-900/30 backdrop-blur-xl shadow-2xl'
                : isDarkTheme
                  ? 'bg-white/35 backdrop-blur-sm shadow-lg'
                  : 'bg-slate-900/35 backdrop-blur-sm shadow-lg'
            } rounded-full px-6 py-3`}>
              
              <nav className="relative z-10">
                <div className="flex items-center justify-between">
                  
                  {/* Logo dengan warna yang lebih kontras */}
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isDarkTheme
                        ? 'bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm' 
                        : 'bg-gradient-to-br from-white to-slate-50 backdrop-blur-sm border border-slate-200'
                    } shadow-lg`}>
                      <span className={`font-bold text-sm ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}>
                        &lt;/&gt;
                      </span>
                    </div>
                    <div className={`font-bold text-base transition-colors duration-300 whitespace-nowrap ${
                      isDarkTheme ? 'text-slate-900' : 'text-white'
                    }`}>
                      My personal Portfolio
                    </div>
                  </div>
                  
                  {/* Desktop Navigation dengan kontras lebih baik */}
                  <div className="hidden lg:flex items-center space-x-1">
                    {navItems.map((item, index) => {
                      const Icon = item.icon
                      const isActive = activeSection === item.id
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`group relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 text-sm font-medium whitespace-nowrap backdrop-blur-sm ${
                            isActive 
                              ? isDarkTheme
                                ? 'bg-slate-900 text-white shadow-md border border-slate-700'
                                : 'bg-white text-slate-900 shadow-md border border-slate-200'
                              : isDarkTheme 
                                ? 'text-slate-800 hover:text-slate-900 hover:bg-slate-100/50' 
                                : 'text-slate-100 hover:text-white hover:bg-slate-800/40'
                          }`}
                          onClick={() => handleNavClick(item.id)}
                        >
                          <Icon size={14} className="flex-shrink-0" />
                          <span className="text-xs xl:text-sm">{item.name}</span>
                        </a>
                      )
                    })}
                  </div>

                  {/* Mobile Menu Button dengan kontras lebih baik */}
                  <button
                    className={`lg:hidden w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
                      isDarkTheme 
                        ? 'bg-slate-100 text-slate-900 hover:bg-white border border-slate-200' 
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-600'
                    } shadow-md hover:scale-110`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu dengan kontras yang diperbaiki */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm pt-16 px-4 z-40">
          <div className={`${
            isDarkTheme ? 'bg-slate-900/90 border-slate-700' : 'bg-white/90 border-slate-200'
          } backdrop-blur-xl rounded-2xl shadow-2xl border overflow-hidden max-w-sm mx-auto`}>
            <div className="p-4">
              <div className="space-y-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm ${
                        isActive 
                          ? isDarkTheme
                            ? 'bg-white text-slate-900 shadow-md'
                            : 'bg-slate-900 text-white shadow-md'
                          : isDarkTheme
                            ? 'text-white hover:bg-slate-800/70'
                            : 'text-slate-700 hover:bg-slate-100/70'
                      }`}
                      onClick={() => handleNavClick(item.id)}
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        animation: 'slideInUp 0.3s ease-out forwards'
                      }}
                    >
                      <Icon size={16} />
                      <span className="font-medium text-sm">{item.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
