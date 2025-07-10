// src/components/Contact.js
'use client'
import { Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      value: '+62 815-3546-8561',
      description: 'Chat with me directly',
      link: 'https://wa.me/6281535468561?text=Halo%20!%20Terimakasih%20sudah%20menghubungi%20saya.%20Klik%20lanjutkan%20untuk%20terhubung%20langsung%20dengan%20Syahira%20Ana%20Piscouly%20%2B6281535468561%0A%0A',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      hoverColor: 'hover:bg-green-100'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'syahira.piscouly@student.president.ac.id',
      description: 'Send me an email',
      link: 'mailto:syahira.piscouly@student.president.ac.id?subject=Project%20Inquiry&body=Hi%20Syahira,%0D%0A%0D%0AI%20would%20like%20to%20discuss...',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Cikarang Utara, Jawa Barat',
      description: 'Available for WFO or WFH',
      link: '#',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      hoverColor: 'hover:bg-purple-100'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Let's connect!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <a 
              key={index} 
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : '_self'}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`${info.bgColor} ${info.hoverColor} p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg border border-slate-200 group`}
            >
              <div className="text-center">
                <div className={`${info.iconColor} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3 break-all">
                  {info.value}
                </p>
                <p className="text-slate-500 text-xs">
                  {info.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-600">
            © 2024 Syahira Ana Piscouly. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
