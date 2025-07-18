// src/components/About.jsx

'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const techStack = [
    { name: 'TypeScript', image: '/images/about/typescript.png' },
    { name: 'React', image: '/images/about/React.png' },
    { name: 'NextJs', image: '/images/about/NextJS.png' },
    { name: 'Python', image: '/images/about/python.png' },
    { name: 'Django', image: '/images/about/django.png' },
    { name: 'Power BI', image: '/images/about/PowerBI.png' },
    { name: 'PostgreSQL', image: '/images/about/postgreSQL.png' },
    { name: 'Laravel', image: '/images/about/laravel.png' },
    { name: 'Java', image: '/images/about/java.png' },
    { name: 'JavaScript', image: '/images/about/JavaScript.png' },    
    { name: 'CSS', image: '/images/about/css.png' },
    { name: 'HTML', image: '/images/about/html.png' },
    { name: 'Figma', image: '/images/about/figma.png' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        {/* About Me Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        {/* Mobile Layout: Image first, then content */}
        <div className="block md:hidden">
          {/* Mobile Image */}
          <div className={`flex justify-center mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-slate-700 rounded-2xl p-6 w-full max-w-sm">
              <div className="bg-slate-600 rounded-xl p-4 text-center">
                <div className="w-full h-80 bg-slate-500 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/images/about/profile.jpg"
                    alt="Profile Image"
                    width={300}
                    height={300}
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Content */}
          <div>
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-3xl font-bold mb-4 text-white text-center">
                SYAHIRA ANA PISCOULY
              </h1>
              <p className="text-lg text-slate-300 mb-6 text-center">
                Final-year Information Systems Student at President University 
              </p>
            </div>
            
            <div className={`mb-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                Hello! I'm Syahira, a results-driven and detail-oriented final-year Information Systems student at President University. 
                I have a strong foundation in data analysis, business analytics, and front-end development, with hands-on experience 
                in machine learning, data science, and full-stack development. My passion lies in leveraging data to drive strategic 
                decisions and building scalable, user-centric solutions. Known for my adaptability and problem-solving skills, I thrive 
                in dynamic environments and enjoy turning complex data into actionable insights.
              </p>
              
              <p className="text-slate-300 mb-8 leading-relaxed text-sm">
                I specialize in modern web technologies, machine learning algorithms, and data visualization tools. My technical 
                expertise, combined with my ability to analyze data and translate it into business solutions, allows me to contribute 
                effectively in a variety of roles. I'm always eager to stay up-to-date with industry advancements, collaborate on 
                impactful projects, and continuously improve my skill set in data science, AI, and web development to drive business 
                growth and innovation.
              </p>
            </div>
            
            <div className={`mb-8 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-xl font-semibold text-white mb-6">
                Tech stack :
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <div 
                    key={index} 
                    className={`tech-card-mobile group relative bg-slate-800/50 border border-slate-700/50 rounded-xl px-3 py-3 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${1000 + index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 relative z-10">
                      <Image 
                        src={tech.image} 
                        alt={tech.name} 
                        width={20} 
                        height={20}
                        className="object-contain flex-shrink-0"
                      />
                      <span className="text-white text-xs font-medium">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Original side-by-side */}
        <div className="hidden md:grid md:grid-cols-5 gap-12 items-start">
          {/* Left Content */}
          <div className="md:col-span-3">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                SYAHIRA ANA PISCOULY
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Final-year Information Systems Student at President University 
              </p>
            </div>
            
            <div className={`mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Hello! I'm Syahira, a results-driven and detail-oriented final-year Information Systems student at President University. 
                I have a strong foundation in data analysis, business analytics, and front-end development, with hands-on experience 
                in machine learning, data science, and full-stack development. My passion lies in leveraging data to drive strategic 
                decisions and building scalable, user-centric solutions. Known for my adaptability and problem-solving skills, I thrive 
                in dynamic environments and enjoy turning complex data into actionable insights.
              </p>
              
              <p className="text-slate-300 mb-8 leading-relaxed">
                I specialize in modern web technologies, machine learning algorithms, and data visualization tools. My technical 
                expertise, combined with my ability to analyze data and translate it into business solutions, allows me to contribute 
                effectively in a variety of roles. I'm always eager to stay up-to-date with industry advancements, collaborate on 
                impactful projects, and continuously improve my skill set in data science, AI, and web development to drive business 
                growth and innovation.
              </p>
            </div>
            
            <div className={`mb-8 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Tech stack :
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {techStack.map((tech, index) => (
                  <div 
                    key={index} 
                    className={`tech-card-desktop group relative bg-slate-800/50 border border-slate-700/50 rounded-xl px-3 py-3 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                    style={{ transitionDelay: `${1100 + index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 relative z-10">
                      <Image 
                        src={tech.image} 
                        alt={tech.name} 
                        width={24} 
                        height={24}
                        className="object-contain flex-shrink-0"
                      />
                      <span className="text-white text-sm font-medium">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`md:col-span-2 flex justify-center transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="bg-slate-700 rounded-2xl p-6 w-full max-w-md">
              <div className="bg-slate-600 rounded-xl p-4 text-center">
                <div className="w-full h-96 bg-slate-500 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/images/about/profile.jpg"
                    alt="Profile Image"
                    width={300}
                    height={300}
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .tech-card-desktop {
          position: relative;
          overflow: hidden;
        }

        .tech-card-desktop::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(
            135deg,
            transparent,
            rgba(148, 163, 184, 0.3),
            rgba(203, 213, 225, 0.5),
            rgba(148, 163, 184, 0.3),
            transparent
          );
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-card-desktop:hover::before {
          opacity: 1;
        }

        .tech-card-desktop:hover {
          background: rgba(30, 41, 59, 0.8);
          border-color: rgba(148, 163, 184, 0.3);
          box-shadow: 0 0 20px rgba(148, 163, 184, 0.2);
        }

        .tech-card-mobile {
          position: relative;
          overflow: hidden;
        }

        .tech-card-mobile::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(
            135deg,
            transparent,
            rgba(148, 163, 184, 0.3),
            rgba(203, 213, 225, 0.5),
            rgba(148, 163, 184, 0.3),
            transparent
          );
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-card-mobile:hover::before {
          opacity: 1;
        }

        .tech-card-mobile:hover {
          background: rgba(30, 41, 59, 0.8);
          border-color: rgba(148, 163, 184, 0.3);
          box-shadow: 0 0 20px rgba(148, 163, 184, 0.2);
        }
      `}</style>
    </section>
  )
}
