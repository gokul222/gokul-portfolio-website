'use client'

import { useEffect, useState } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(true)

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'Next.js', level: 90, color: 'from-gray-700 to-gray-900' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-700' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-yellow-600' },
        { name: 'HTML5', level: 98, color: 'from-orange-500 to-orange-600' },
        { name: 'CSS3', level: 98, color: 'from-cyan-500 to-cyan-600' },
        { name: 'Bootstrap', level: 85, color: 'from-purple-500 to-purple-600' },
        { name: 'jQuery', level: 85, color: 'from-blue-400 to-blue-500' },
        { name: 'AngularJS', level: 80, color: 'from-red-500 to-red-600' },
        { name: 'Redux.js', level: 80, color: 'from-purple-600 to-purple-700' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'PHP', level: 95, color: 'from-purple-600 to-purple-700' },
        { name: 'Laravel', level: 90, color: 'from-red-500 to-red-600' },
        { name: 'Laravel Lumen', level: 85, color: 'from-red-400 to-red-500' },
        { name: 'CodeIgniter', level: 85, color: 'from-orange-600 to-orange-700' },
        { name: 'Node.js', level: 85, color: 'from-green-600 to-green-700' },
        { name: 'MySQL', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'MongoDB', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'SQL', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'Redis', level: 75, color: 'from-red-600 to-red-700' },
        { name: 'MQTT', level: 70, color: 'from-green-400 to-green-500' },
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 95, color: 'from-blue-400 to-blue-500' },
        { name: 'Flutter Flow', level: 90, color: 'from-blue-300 to-blue-400' },
        { name: 'Dart', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Android Development', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'iOS Development', level: 75, color: 'from-gray-500 to-gray-600' },
      ]
    },
    {
      title: 'API & Web Services',
      skills: [
        { name: 'REST APIs', level: 95, color: 'from-purple-500 to-purple-600' },
        { name: 'API Development', level: 90, color: 'from-indigo-500 to-indigo-600' },
        { name: 'Web Services', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Postman API', level: 85, color: 'from-orange-500 to-orange-600' },
        { name: 'API Testing', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'JSON', level: 95, color: 'from-yellow-500 to-yellow-600' },
        { name: 'AJAX', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'OAuth', level: 80, color: 'from-purple-600 to-purple-700' },
      ]
    },
    {
      title: 'Cloud & Tools',
      skills: [
        { name: 'AWS', level: 80, color: 'from-orange-500 to-orange-600' },
        { name: 'Firebase', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Git/GitHub', level: 90, color: 'from-gray-600 to-gray-700' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-600' },
        { name: 'Unit Testing', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'Responsive Design', level: 95, color: 'from-purple-500 to-purple-600' },
      ]
    },
    {
      title: 'Development Methodologies',
      skills: [
        { name: 'Full-Stack Development', level: 95, color: 'from-indigo-500 to-indigo-600' },
        { name: 'Mobile Application Development', level: 90, color: 'from-blue-400 to-blue-500' },
        { name: 'Web Development', level: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'Back-End Web Development', level: 90, color: 'from-purple-500 to-purple-600' },
        { name: 'Object-Oriented Programming', level: 90, color: 'from-green-500 to-green-600' },
        { name: 'User Interface Design', level: 85, color: 'from-pink-500 to-pink-600' },
        { name: 'Software Development', level: 95, color: 'from-blue-600 to-blue-700' },
      ]
    }
  ]

  const frameworks = [
    { name: 'Laravel', icon: '🚀' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Flutter Flow', icon: '🌊' },
    { name: 'CodeIgniter', icon: '🔥' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'PHP', icon: '🐘' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Bootstrap', icon: '🎨' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Dart', icon: '🎯' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'jQuery', icon: '📜' },
    { name: 'AngularJS', icon: '🅰️' },
    { name: 'Redux.js', icon: '🔄' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'JSON', icon: '📋' },
    { name: 'AJAX', icon: '⚡' },
    { name: 'OAuth', icon: '🔐' },
    { name: 'Redis', icon: '🔴' },
    { name: 'MQTT', icon: '📡' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📚' },
    { name: 'Postman', icon: '📮' },
    { name: 'Android', icon: '🤖' },
    { name: 'iOS', icon: '🍎' },
    { name: 'OpenCart', icon: '🛒' },
    { name: 'Magento', icon: '🏪' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Razorpay', icon: '💰' },
    { name: 'PayPal', icon: '💙' },
    { name: 'CCAvenue', icon: '🏦' },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 scroll-mt-24 sm:scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I've worked with a wide range of technologies and frameworks to deliver 
              high-quality solutions across different platforms and industries.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`transition-all duration-1000 delay-${(categoryIndex + 1) * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-${skillIndex * 100}`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies & Frameworks */}
          <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Technologies & Frameworks
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {frameworks.map((framework, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-hover text-center"
                >
                  <div className="text-2xl mb-2">{framework.icon}</div>
                  <div className="text-sm font-medium text-gray-700">{framework.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Payment Gateway Expertise
              </h3>
              <p className="text-gray-600 mb-6">
                I have extensive experience integrating various payment gateways including:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Stripe', 'Razorpay', 'PayPal', 'CCAvenue'].map((gateway, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-medium"
                  >
                    {gateway}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
