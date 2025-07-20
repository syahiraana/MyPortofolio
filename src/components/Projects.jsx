'use client'
import { ExternalLink, Github, ChevronLeft, ChevronRight, Figma, MessageCircle, Pause } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'Skill Gap Analysis',
      description: 'Skill Gap Analysis is a system designed to assess a students skills in relation to industry criteria. Developed for the Internship Center and Career Team at President University, this platform allows clients to view top students for each job or skill domain, with filtering options. The system provides three distinct perspectives: for students, the ICC, and companies, each with different access levels to ensure tailored information and analysis.',
      client: 'Client : Intership Center and Career (ICC) Department at President Univeristy',
      images: [
        '/images/projects/a1.png',
        '/images/projects/a2.png',
        '/images/projects/a3.png',
        '/images/projects/a4.png',
        '/images/projects/a5.png',
        '/images/projects/a6.png',
      ],
      tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Machine Learning'],
      figmaUrl: 'https://www.figma.com/design/fljiYdMKIqIE2nezKL2o3H/Boothcamp-Project?node-id=0-1&t=R0T7pke2lszI9jDT-1',
      status: 'ongoing'
    },
    {
      title: 'Maison Elegante E-Commerce Platform',
      description: 'Maison Elegante Store integrates user and admin roles in a unified database. Users can shop and complete purchases, while admins manage sales, products, and operations via a centralized dashboard, ensuring real-time updates and secure data management.',
      images: [
        '/images/projects/Maison1.png',
        '/images/projects/M2.png',
        '/images/projects/M3.png',
        '/images/projects/M4.png',
        '/images/projects/M5.png',
        '/images/projects/M6.png',
        '/images/projects/M7.png',
      ],
      tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
      projectType: 'maison',
      demoUrl: 'https://drive.google.com/file/d/1zbJKvEg2xwBPtOtzf2gOz8yRzwbQP9wR/view',
      userUrl: 'https://maison-elegante.vercel.app/',
      adminUrl: 'https://maison-elegante.vercel.app/admin'
    },
    {
      title: 'Student Analysis Dashboard Web',
      description: 'Student Engagement Analysis Dashboard is a predictive web application developed by our team to analyze student engagement. The tool leverages both input data and data fetched from a database to predict whether a student demonstrates high or low engagement. It provides insightful explanations for the predictions and offers actionable suggestions for improving student engagement. The system uses a dataset provided by the academic department for accurate analysis.',
      images: [
        '/images/projects/S1.png',
        '/images/projects/S2.png',
        '/images/projects/S3.png',
        '/images/projects/S4.png',
        '/images/projects/S5.png',
        '/images/projects/S6.png'
      ],
      tags: ['Djanggo', 'Machine Learning', 'PostgreSQL', 'HTML', 'CSS'],
      projectType: 'demo',
      demoUrl: 'https://drive.google.com/file/d/1Cs1M2WG8TimtpL-FfzIwD1-E_ExHJMaK/view?usp=sharing'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and responsive design',
      images: [
        '/images/projects/pf.png'
      ],
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      projectType: 'portfolio' // Changed from 'contact' to 'portfolio'
    },
    {
      title: 'Flight Peformance & Pessanger Analysis Dashboard',
      description: 'Flight Performance & Passenger Analysis Dashboard is a data-driven dashboard designed to provide valuable insights to airports for informed decision-making. By utilizing clean, processed data, the dashboard presents comprehensive charts that simplify complex data, enabling users to easily understand and extract actionable insights.',
      images: [
        '/images/projects/PB1.png',
        '/images/projects/PB2.png'
      ],
      tags: ['Power BI', 'Data Cleaning', 'Data Visualization', 'Data Processing'],
      projectType: 'contact'
    },
    {
      title: 'Payroll System Dinas Pendidikan Sumatera Barat',
      description: 'Payroll System for West Sumatra Education Department is a comprehensive system designed to manage employee payroll processes efficiently. The system handles salary calculations, deductions, allowances, and generates detailed payroll reports for administrative purposes.',
      images: [
        '/images/projects/acc1.png',
        '/images/projects/acc2.png',
        '/images/projects/acc3.png',
        '/images/projects/acc4.png',
        '/images/projects/acc5.png',
        '/images/projects/acc6.png'
      ],
      tags: ['PHP-HTML-CSS', 'MySql'],
      projectType: 'contact'
    },
    {
      title: '[FIGMA] HRIS Mobile App',
      description: 'UI design for 2 POV User and HR Staff',
      images: [
        '/images/projects/image1.jpg',
        '/images/projects/fg1.png',
        '/images/projects/fg2.png',
        '/images/projects/fg3.png',
        '/images/projects/fg4.png'
      ],
      tags: ['Figma', 'UI'],
      figmaUrl: 'https://www.figma.com/design/DeankoBI4RC1z4l01fsCuc/ISAD-UI?node-id=0-1&t=xJyrGkLNSo7ijEE4-1',
      projectType: 'figma'
    },
    {
      title: '[FIGMA] Dental Clinic Ceria Web Platform',
      description: 'UI design for 2 POV User and Clinic Staff, The application facilitates appointment management by providing two distinct views: one for the user and one for the clinic staff. Users can schedule appointments and view available doctor schedules. Clinic staff, on the other hand, can manage appointments, check revenue, and access other financial data, ensuring smooth operational oversight.',
      images: [
        '/images/projects/fm1.png',
        '/images/projects/fm2.png',
      ],
      tags: ['Figma', 'UI'],
      figmaUrl: 'https://www.figma.com/design/5z1oTD9VqOIdSvghDB1gBn/Ceria-Dental-Clinic--Community-?node-id=0-1&t=VXChI1uDLBqYoHGo-1',
      projectType: 'figma'
    }
  ]

  // ... ImageCarousel component remains the same ...
  const ImageCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    useEffect(() => {
      if (images.length > 1) {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 4000)

        return () => clearInterval(interval)
      }
    }, [images.length])

    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > 50
      const isRightSwipe = distance < -50

      if (isLeftSwipe && images.length > 1) {
        nextImage()
      }
      if (isRightSwipe && images.length > 1) {
        prevImage()
      }
    }

    return (
      <div className="relative h-64 md:h-72 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden rounded-t-xl">
        <div 
          className="relative w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                index === currentIndex ? 'translate-x-0' : 
                index < currentIndex ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <img 
                src={image} 
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-contain p-4"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-20"
            >
              <ChevronLeft size={16} className="text-slate-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-20"
            >
              <ChevronRight size={16} className="text-slate-700" />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  const ProjectCard = ({ project, index }) => {
    const handleContactClick = () => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
        <div className="relative">
          <ImageCarousel images={project.images} title={project.title} />
          {project.status === 'ongoing' && (
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-30">
              🚧 Coming Soon
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            {project.title}
          </h3>
          {project.client && (
            <b><p className="text-blue-900 mb-4 text-sm leading-relaxed ">
              {project.client}
            </p></b>
          )}
          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {/* Skill Gap Analysis - ongoing project with Figma only */}
            {project.title === 'Skill Gap Analysis' ? (
              <a 
                href={project.figmaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Figma size={16} />
                <span className="text-sm">Figma</span>
              </a>
            ) : 
            /* Maison Elegante - special layout with demo and hosting links */
            project.projectType === 'maison' ? (
              <div className="flex flex-col gap-2 w-full">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors hover:bg-orange-50 px-3 py-1 rounded-lg"
                >
                  <Pause size={16} />
                  <span className="text-sm">Demo jika connect database</span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="text-slate-600 text-sm">hosting without Database : </span>
                  <div className="flex gap-2">
                    <a 
                      href={project.userUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">User</span>
                    </a>
                    <a 
                      href={project.adminUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Admin</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : 
            /* Demo projects - show demo button with pause icon */
            project.projectType === 'demo' ? (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors hover:bg-orange-50 px-3 py-1 rounded-lg"
              >
                <Pause size={16} />
                <span className="text-sm">Demo</span>
              </a>
            ) : 
            /* Figma projects - only show Figma link */
            project.projectType === 'figma' ? (
              <a 
                href={project.figmaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Figma size={16} />
                <span className="text-sm">View Design</span>
              </a>
            ) : 
            /* Portfolio project - no button (as requested) */
            project.projectType === 'portfolio' ? (
              <div className="text-slate-500 text-sm italic">
                Current website you're viewing
              </div>
            ) :
            /* Contact projects - show contact button */
            project.projectType === 'contact' ? (
              <button 
                onClick={handleContactClick}
                className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors hover:bg-green-50 px-3 py-1 rounded-lg"
              >
                <MessageCircle size={16} />
                <span className="text-sm">Contact Me</span>
              </button>
            ) : 
            /* Default - show Live Demo and GitHub (fallback) */
            (
              <>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Live Demo</span>
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-blue-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}