'use client'
import { useEffect, useRef, useState } from 'react'
import { Award, Calendar, Building2, ExternalLink } from 'lucide-react'

export default function CertificationsTraining() {
  const [isVisible, setIsVisible] = useState(true)
  const [showPowerBIDoc, setShowPowerBIDoc] = useState(false)
  const sectionRef = useRef(null)

  const certifications = [
    {
      title: 'Introduction to Data Analysts',
      organization: 'RevoU',
      date: 'December 2024',
      type: 'Certification',
      description: 'Comprehensive training program covering data analysis fundamentals, statistical methods, and practical applications in business analytics.',
      skills: ['Data Analysis', 'Statistical Methods', 'Business Analytics', 'Data Visualization'],
      icon: '/images/certificate/RevoULogo.png',
      image: '/images/certificate/revou.png'
    },
    {
      title: 'Power BI Workshop',
      organization: 'PUMA BA',
      date: 'November 2024',
      type: 'Training',
      description: 'Intensive seminar focused on Microsoft Power BI for business intelligence, dashboard creation, and data visualization techniques.',
      skills: ['Power BI', 'Dashboard Design', 'Data Visualization', 'Business Intelligence'],
      icon: '/images/certificate/PumaBA.jpg',
      certificateImage: '/images/certificate/PowerBICeritificate.png',
      documentationImage: '/images/certificate/PowerBICeritificate.png'
    },
    {
      title: 'Machine Learning Essentials for Business and Technical Decision Makers',
      organization: 'AWS Training & Certification',
      date: 'April 2025',
      type: 'Training',
      description: 'Comprehensive AWS certification covering machine learning fundamentals, business applications, and technical decision-making processes.',
      skills: ['Machine Learning', 'AWS Services', 'Business Intelligence', 'Technical Decision Making'],
      icon: '/images/certificate/AWSLogo.png',
      image: '/images/certificate/Machine Learning Essentials for Business and Technical Decision Makers Certificate.jpeg'
    },
    {
      title: 'Machine Learning Learning Plan',
      organization: 'AWS Training & Certification',
      date: 'April 2025',
      type: 'Training',
      description: 'Structured learning path for machine learning concepts, AWS ML services, and practical implementation strategies.',
      skills: ['Machine Learning', 'AWS ML Services', 'Data Science', 'Cloud Computing'],
      icon: '/images/certificate/AWSLogo.png',
      image: '/images/certificate/Machine Learning Learning Plan certificate.jpeg'
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    console.log('Component mounted, isVisible:', true)
  }, [])

  // Timer for Power BI certificate to documentation transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPowerBIDoc(true)
    }, 10000) // 10 seconds

    return () => clearTimeout(timer)
  }, [])

  const getImageSrc = (cert) => {
    if (cert.title === 'Power BI Workshop') {
      return showPowerBIDoc ? cert.documentationImage : cert.certificateImage
    }
    return cert.image
  }

  return (
    <section ref={sectionRef} id="certifications" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Certifications & Training
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Professional development and continuous learning achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
            >
              {/* Header with Icon and Type Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    {cert.icon ? (
                      <div className="w-6 h-6 relative">
                        <img 
                          src={cert.icon} 
                          alt={`${cert.organization} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'block'
                          }}
                        />
                        <Award size={16} className="text-blue-400 hidden" />
                      </div>
                    ) : (
                      <Award size={24} className="text-blue-400" />
                    )}
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.type === 'Certification' 
                        ? 'bg-blue-900 text-blue-300 border border-blue-700' 
                        : 'bg-green-900 text-green-300 border border-green-700'
                    }`}>
                      {cert.type}
                    </span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
              </div>

              {/* Certificate/Documentation Image */}
              {(cert.image || cert.certificateImage || cert.documentationImage) && (
                <div className="mb-6">
                  <div className="relative w-full h-64 bg-slate-700 rounded-lg overflow-hidden p-4">
                    <img
                      src={getImageSrc(cert)}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-contain transition-opacity duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center">
                      <div className="text-center">
                        <Award size={48} className="text-slate-500 mx-auto mb-2" />
                        <p className="text-slate-400 text-sm">
                          {cert.title === 'Power BI Workshop' 
                            ? (showPowerBIDoc ? 'Documentation Image' : 'Certificate Image')
                            : 'Certificate Image'
                          }
                        </p>
                      </div>
                    </div>
                    {cert.title === 'Power BI Workshop' && (
                      <div className="absolute top-6 right-6">
                        <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                          {showPowerBIDoc ? 'Documentation' : 'Certificate'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Title and Organization */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-300 mb-2">
                  <Building2 size={16} />
                  <span className="font-medium">{cert.organization}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-3">Key Skills Acquired:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600 hover:border-slate-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full mt-6"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">
              Continuous Learning Journey
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              I'm committed to staying current with industry trends and continuously expanding my skill set. 
              These certifications represent my dedication to professional growth in data science, analytics, 
              machine learning, and business intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}