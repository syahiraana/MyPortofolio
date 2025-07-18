// src/components/OrganisationalExperience.jsx

"use client"

import { useState, useEffect } from 'react'

export default function OrganisationalExperience() {
  const experiences = [
    {
      id: 1,
      title: "Secretary - Board of Director",
      company: "Preserve - PresUniv x KLHK",
      duration: "September 2024 - September 2025",
      logo: "/images/organisasi/preserve.png",
      position: "left",
      jobDescriptions: [
        "Prepare essential documents, including letters, Minutes of Meeting (MoM), and proposals.",
        "Coordinate the arrangement of the meeting room, monitor the event, and manage the timeline.",
        "Provide assistance to the Chairperson in decision-making as a member of the Board of Directors."
      ],
      certificates: [
        "/images/organisasi/p1.jpg",
        "/images/organisasi/p3.jpg",
        "/images/organisasi/p3.jpg",
        "/images/organisasi/p4.jpg",
        "/images/organisasi/p5.jpg",
        "/images/organisasi/p6.jpg",
      ]
    },
    {
      id: 2,
      title: "Event Organizer - FGD 2025",
      company: "FPCI Presuniv",
      duration: "December 2024 - May 2025",
      logo: "/images/organisasi/fpci.png",
      position: "right",
      jobDescriptions: [
        "Responsible for timekeeping, monitoring the event duration according to the rundown, and ensuring the event concludes on time.",
        "Define the theme, tagline, and associated actions.",
        "Ensure the event runs smoothly according to the established rundown, with all divisions fulfilling their responsibilities and resolving any issues promptly on the event day."
      ],
      certificates: [
        "/images/organisasi/f1.jpg",
        "/images/organisasi/f2.jpg"
      ]
    },
    {
      id: 3,
      title: "Event Organizer - President University Fashion Week",
      company: "Mr. & Mrs. President University",
      duration: "Oktober - December 2024",
      logo: "/images/organisasi/pufw.jpg",
      position: "left",
      jobDescriptions: [
        "Coordinate event logistics",
        "Define the theme, tagline, and associated actions.",
        "Create the timeline and rundown."
      ],
      certificates: [
        "/images/organisasi/fw1.jpg",
        "/images/organisasi/fw2.jpg",
        "/images/organisasi/fw3.jpg",
        "/images/organisasi/fw4.jpg"

      ]
    }
  ]

  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-id]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  function CertificateCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [imageErrors, setImageErrors] = useState({})

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 5000)
      return () => clearInterval(interval)
    }, [images.length])

    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      )
    }

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const handleImageError = (index) => {
      setImageErrors(prev => ({ ...prev, [index]: true }))
    }

    return (
      <div className="mt-4 max-w-full overflow-hidden">
        <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden border border-slate-700 shadow-lg max-w-full">
          {imageErrors[currentIndex] ? (
            <div className="w-full h-full bg-slate-700 flex items-center justify-center max-w-full overflow-hidden">
              <div className="text-center max-w-full overflow-hidden">
                <div className="text-slate-400 text-sm mb-2">image {currentIndex + 1}</div>
                <div className="text-slate-500 text-xs">Image not found</div>
                <div className="text-slate-500 text-xs mt-1">{images[currentIndex]}</div>
              </div>
            </div>
          ) : (
            <img
              src={images[currentIndex]}
              alt={`Certificate ${currentIndex + 1}`}
              className="w-full h-full object-cover max-w-full"
              onError={() => handleImageError(currentIndex)}
            />
          )}
        </div>
        <div className="flex justify-center mt-2 space-x-4 max-w-full overflow-hidden">
          <button
            onClick={prevSlide}
            aria-label="Previous certificate"
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded transition max-w-full overflow-hidden"
          >
            &#8249;
          </button>
          <span className="text-slate-400 text-sm flex items-center max-w-full overflow-hidden">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={nextSlide}
            aria-label="Next certificate"
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded transition max-w-full overflow-hidden"
          >
            &#8250;
          </button>
        </div>
      </div>
    )
  }

  return (
    <section id="OrganisationalExperience" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden max-w-full">
      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }
        
        @keyframes glow-move {
          0% { transform: translateY(-50px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(200vh); opacity: 0; }
        }
        
        @keyframes card-emerge {
          0% { 
            opacity: 0; 
            transform: translateY(50px) scale(0.9);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        .sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .card-emerge {
          animation: card-emerge 0.8s ease-out forwards;
        }
        
        .timeline-dot {
          background: radial-gradient(circle, #60a5fa 0%, #3b82f6 50%, #1e40af 100%);
          box-shadow: 
            0 0 20px rgba(59, 130, 246, 0.6),
            0 0 40px rgba(59, 130, 246, 0.4);
          border: 3px solid rgba(30, 41, 59, 0.8);
          position: relative;
          z-index: 30;
        }
        
        .timeline-dot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: sparkle 3s ease-in-out infinite;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            #3b82f6 10%,
            #60a5fa 50%,
            #3b82f6 90%,
            transparent 100%
          );
          transform: translateX(-50%);
          z-index: 10;
          max-width: 100%;
          overflow: hidden;
        }

        .timeline-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          background: rgba(255, 255, 255, 0.6);
          transform: translateX(-50%);
          animation: glow-move 6s linear infinite;
        }
        
        @media (max-width: 768px) {
          .timeline-line-mobile {
            position: absolute;
            left: 24px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(
              to bottom,
              transparent 0%,
              #3b82f6 10%,
              #60a5fa 50%,
              #3b82f6 90%,
              transparent 100%
            );
            z-index: 10;
            max-width: 100%;
            overflow: hidden;
          }
        }
      `}</style>
      
      <div className="container mx-auto px-4 max-w-full overflow-hidden">
        {/* Header */}
        <div className="text-center mb-16 max-w-full overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-full overflow-hidden">
            Some of <span className="text-blue-400">Organizational Experience</span>
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block max-w-full overflow-hidden">
          <div className="relative max-w-6xl mx-auto max-w-full overflow-hidden">
            {/* Center Timeline Line */}
            <div className="timeline-line">
              {/* Decorative sparkles */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full sparkle" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full sparkle" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-200 rounded-full sparkle" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full sparkle" style={{animationDelay: '3s'}}></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full sparkle" style={{animationDelay: '4s'}}></div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-24 max-w-full overflow-hidden">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  data-id={exp.id}
                  className="relative flex items-center max-w-full overflow-hidden"
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full"
                       style={{animationDelay: `${index * 0.2}s`}}></div>

                  {/* Content Card */}
                  <div className={`w-full flex max-w-full overflow-hidden ${exp.position === 'left' ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-5/12 mr-8 ml-8 max-w-full overflow-hidden">
                      <div className={`bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 opacity-0 max-w-full overflow-hidden ${
                        visibleItems.has(exp.id.toString()) ? 'card-emerge' : ''
                      }`} style={{animationDelay: `${index * 0.3}s`}}>
                        
                        {/* Header with logo and info */}
                        <div className="flex items-start space-x-4 mb-4 max-w-full overflow-hidden">
                          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg max-w-full overflow-hidden">
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-12 h-12 object-contain rounded max-w-full"
                              onError={(e) => {
                                e.target.style.display = 'none'
                                e.target.nextSibling.style.display = 'flex'
                              }}
                            />
                            <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center max-w-full overflow-hidden" style={{display: 'none'}}>
                              <span className="text-white font-bold text-sm">
                                {exp.company.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0 max-w-full overflow-hidden">
                            <h3 className="font-bold text-xl text-white mb-2 leading-tight max-w-full overflow-hidden">
                              {exp.title}
                            </h3>
                            <p className="text-slate-300 text-base mb-2 leading-tight max-w-full overflow-hidden">
                              {exp.company}
                            </p>
                            <p className="text-blue-400 text-sm font-medium max-w-full overflow-hidden">
                              {exp.duration}
                            </p>
                          </div>
                        </div>

                        {/* Job descriptions */}
                        {exp.jobDescriptions && (
                          <div className="mb-4 max-w-full overflow-hidden">
                            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1 max-w-full overflow-hidden">
                              {exp.jobDescriptions.map((desc, idx) => (
                                <li key={idx} className="max-w-full overflow-hidden">{desc}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Certificate carousel */}
                        {exp.certificates && exp.certificates.length > 0 && (
                          <CertificateCarousel images={exp.certificates} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden max-w-full overflow-hidden">
          <div className="relative max-w-full overflow-hidden">
            {/* Mobile Timeline Line */}
            <div className="timeline-line-mobile">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full sparkle" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full sparkle" style={{animationDelay: '1.5s'}}></div>
            </div>
            
            <div className="space-y-8 max-w-full overflow-hidden">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start space-x-6 max-w-full overflow-hidden" data-id={exp.id}>
                  {/* Mobile Timeline Dot */}
                  <div className="timeline-dot w-4 h-4 rounded-full flex-shrink-0 mt-8"
                       style={{animationDelay: `${index * 0.2}s`}}></div>
                  
                  {/* Mobile Content Card */}
                  <div className="flex-1 min-w-0 max-w-full overflow-hidden">
                    <div className={`bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-slate-700 opacity-0 max-w-full overflow-hidden ${
                      visibleItems.has(exp.id.toString()) ? 'card-emerge' : ''
                    }`} style={{animationDelay: `${index * 0.3}s`}}>
                      
                      {/* Header with logo and info */}
                      <div className="flex items-start space-x-4 mb-4 max-w-full overflow-hidden">
                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg max-w-full overflow-hidden">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 object-contain rounded max-w-full"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                          <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center max-w-full overflow-hidden" style={{display: 'none'}}>
                            <span className="text-white font-bold text-sm">
                              {exp.company.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 max-w-full overflow-hidden">
                          <h3 className="font-bold text-xl text-white mb-2 leading-tight max-w-full overflow-hidden">
                            {exp.title}
                          </h3>
                          <p className="text-slate-300 text-base mb-2 leading-tight max-w-full overflow-hidden">
                            {exp.company}
                          </p>
                          <p className="text-blue-400 text-sm font-medium max-w-full overflow-hidden">
                            {exp.duration}
                          </p>
                        </div>
                      </div>

                      {/* Job descriptions */}
                      {exp.jobDescriptions && (
                        <div className="mb-4 max-w-full overflow-hidden">
                          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1 max-w-full overflow-hidden">
                            {exp.jobDescriptions.map((desc, idx) => (
                              <li key={idx} className="max-w-full overflow-hidden">{desc}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Certificate carousel */}
                      {exp.certificates && exp.certificates.length > 0 && (
                        <CertificateCarousel images={exp.certificates} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
