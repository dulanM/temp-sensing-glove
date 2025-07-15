"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const teamMembers = [
    {
      name: "Kavya Fernando",
      role: "Team Member",
      expertise: "Index number: 34268",
    },
    {
      name: "Harshon Kumalaruban",
      role: "Team Member",
      expertise: "Index number: 33573",
    },
    {
      name: "Pabasara Kaushan",
      role: "Team Member",
      expertise: "Index number: 33420",
    },
    {
      name: "Asitha Wanninayake",
      role: "Team Member",
      expertise: "Index number: 33664",
    },
    {
      name: "Joanna Machado",
      role: "Team Member",
      expertise: "Index number: 34047",
    },
    {
      name: "Sanindi Perera",
      role: "Team Member",
      expertise: "Index number: 33948",
    },
    {
      name: "Fathima Reema",
      role: "Team Member",
      expertise: "Index number: 33906",
    },
    {
      name: "Dhananjana Senanayake",
      role: "Team Member",
      expertise: "Index number: 33674",
    },
    {
      name: "Sandalu Theshan",
      role: "Team Member",
      expertise: "Index number: 33986",
    },
    {
      name: "Sasmitha Dowani",
      role: "Team Member",
      expertise: "Index number: 33383",
    }
  ]

  const features = [
    {
      icon: "🌡️",
      title: "Real-time Temperature Monitoring",
      description: "Advanced sensors detect temperature changes instantly, alerting workers to potential hazards.",
    },
    {
      icon: "🛡️",
      title: "Enhanced Protection",
      description: "Superior heat resistance combined with cut and puncture protection for comprehensive safety.",
    },
    {
      icon: "⚡",
      title: "Smart Alerts",
      description: "Vibration and LED indicators warn users when safe temperature thresholds are exceeded.",
    },
    {
      icon: "👁️",
      title: "Visual Indicators",
      description: "Color-changing materials provide immediate visual feedback on temperature conditions.",
    },
  ]

  const safetyBenefits = [
    "Prevents heat-related injuries and burns",
    "Reduces workplace accidents by 40%",
    "Complies with OSHA safety standards",
    "Improves worker confidence and productivity",
    "Real-time hazard detection and prevention",
    "Durable construction for long-term use",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🛡️</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Temperature Sensing Glove</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#product"
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Product
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Process
              </a>
              <a
                href="#safety"
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("safety")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Safety
              </a>
              <a
                href="#team"
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Team
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#product"
                  className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer px-4 py-2 rounded-md hover:bg-gray-50"
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Product
                </a>
                <a
                  href="#process"
                  className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer px-4 py-2 rounded-md hover:bg-gray-50"
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Process
                </a>
                <a
                  href="#safety"
                  className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer px-4 py-2 rounded-md hover:bg-gray-50"
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    document.getElementById("safety")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Safety
                </a>
                <a
                  href="#team"
                  className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer px-4 py-2 rounded-md hover:bg-gray-50"
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Team
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Theme and Topic Section */}
      <section className="py-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-2">
              Academic Assignment
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Theme: Health & Safety in Operation</h2>
            <p className="text-lg md:text-xl text-blue-100">Topic: Personal Protective Equipment (PPE)</p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Revolutionary PPE Technology
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Temperature Sensing Glove
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Advanced personal protective equipment that monitors temperature in real-time, keeping workers safe from
                heat-related hazards in industrial environments.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/image0.png"
                alt="Temperature Sensing Glove"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section id="product" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Safety Features</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our Temperature Sensing Glove combines cutting-edge technology with proven safety standards to deliver
              unparalleled protection for industrial workers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section id="process" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manufacturing Process</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our Temperature Sensing Gloves are manufactured with precision and quality control at every
              step.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Behind the Scenes</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Our manufacturing process combines advanced technology with meticulous craftsmanship to create the most
                reliable temperature sensing gloves in the industry.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Material Selection</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Premium heat-resistant materials and sensor integration
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Precision Assembly</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Advanced manufacturing techniques for sensor placement
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Testing</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Rigorous testing for durability and accuracy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Final Inspection</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Comprehensive quality assurance before packaging
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">👁️</span>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Watch Our Manufacturing Process</h4>
                </div>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Get an exclusive behind-the-scenes look at how our Temperature Sensing Gloves are made, from raw
                  materials to finished product.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="https://drive.google.com/file/d/1lQ4EChne9quGxNHcFQVdZrYsv0_j8lSK/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-lg font-medium text-center transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>View Manufacturing Videos</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/image1.png"
                alt="Manufacturing process of temperature sensing gloves"
                width={600}
                height={500}
                className="rounded-lg shadow-xl w-full h-auto"
                unoptimized
              />
            </div>
          </div>

          {/* Additional Process Information */}
          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌡️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Sensor Integration</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Advanced temperature sensors are carefully integrated during the manufacturing process to ensure
                accuracy and durability.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Quality Control</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Every glove undergoes rigorous testing to meet our high standards for safety, durability, and
                performance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Continuous research and development ensure our manufacturing process stays at the forefront of PPE
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Benefits */}
      <section id="safety" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Workplace Safety Benefits
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Our Temperature Sensing Glove is designed to prevent heat-related injuries and create safer working
                environments across various industries.
              </p>
              <div className="space-y-4 ">
                {safetyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl mt-0.5 flex-shrink-0">✅</span>
                    <span className="text-gray-700 text-sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="py-16 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3 text-sm sm:text-base">{member.role}</p>
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm">
                  {member.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
