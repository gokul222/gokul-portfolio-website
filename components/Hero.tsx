'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Download } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{' '}
                  <span className="gradient-text">Gokul Kannan</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                  Full Stack Developer & Mobile App Developer
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Experienced software developer with 5+ years of expertise in PHP, Laravel, React.js, Next.js, Flutter, and mobile app development. 
                  I create innovative web applications and mobile solutions that drive business growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Available for projects</span>
                </div>
                <div className="text-gray-500">•</div>
                <div className="text-gray-600">5+ Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform rotate-6"></div>
                <div className="absolute inset-2 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <div className="w-72 h-72 relative overflow-hidden rounded-full">
                    <Image
                      src="/assets/profile.jpg"
                      alt="Gokul Kannan"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-float">
                  PHP
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  React
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  Flutter
                </div>
                <div className="absolute -top-4 -left-4 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-float" style={{ animationDelay: '3s' }}>
                  Node.js
                </div>
                <div className="absolute bottom-1/4 -right-6 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-float" style={{ animationDelay: '4s' }}>
                  Python
                </div>
                <div className="absolute top-1/4 -right-8 w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-float" style={{ animationDelay: '5s' }}>
                  Next.js
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  )
}
