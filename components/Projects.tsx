'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, Github, Smartphone, Globe, Server, Database } from 'lucide-react'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    // Web Projects
    {
      id: 1,
      title: 'E-Visa Apply Website',
      description: 'Developed a web application for users to apply for e-visas online. The platform allows users to fill out application forms, upload documents, and track their application status in real-time.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'HTML', 'CSS'],
      category: 'web',
      icon: <Globe className="w-6 h-6" />,
      features: ['Online Application Forms', 'Document Upload', 'Real-time Status Tracking', 'User Dashboard']
    },
    {
      id: 2,
      title: 'Tax Calculator',
      description: 'Developed a tax calculator tool to help users accurately calculate their tax liabilities for the fiscal year. The application includes features for applying various deductions and exemptions to optimize tax savings.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'HTML', 'CSS'],
      category: 'web',
      icon: <Globe className="w-6 h-6" />,
      features: ['Tax Calculations', 'Deduction Optimization', 'Exemption Management', 'Reports Generation']
    },
    {
      id: 3,
      title: 'PG Mansion Search Room Website',
      description: 'Developed a web platform for users to search and book rooms in PG (Paying Guest) mansions. The site features advanced search filters, room availability tracking, and user reviews to help users find the perfect accommodation.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'HTML', 'CSS', 'Bootstrap'],
      category: 'web',
      icon: <Globe className="w-6 h-6" />,
      features: ['Advanced Search Filters', 'Room Availability', 'Booking System', 'User Reviews']
    },
    {
      id: 4,
      title: 'Firebase Data Management for Master Data',
      description: 'Developed a system using Firebase for efficient management and integration of master data across various applications. The project focused on centralizing and organizing key data entities, ensuring data consistency, real-time updates, and easy accessibility across multiple platforms.',
      technologies: ['Firebase', 'PHP', 'JavaScript', 'AJAX', 'HTML', 'CSS', 'Bootstrap'],
      category: 'web',
      icon: <Database className="w-6 h-6" />,
      features: ['Master Data Management', 'Real-time Updates', 'Data Consistency', 'Cross-platform Integration']
    },
    {
      id: 5,
      title: 'Identiphy (Animal Data Management)',
      description: 'Developed a comprehensive system for managing livestock data, including the grouping of animals and the management of whitelist microchip numbers. The platform facilitates efficient tracking, organization, and monitoring of animal data, ensuring accuracy and compliance with industry standards.',
      technologies: ['PHP (Custom Framework)', 'JavaScript', 'AJAX', 'HTML', 'CSS', 'Bootstrap'],
      category: 'web',
      icon: <Database className="w-6 h-6" />,
      features: ['Livestock Management', 'Microchip Tracking', 'Animal Grouping', 'Data Analytics']
    },
    {
      id: 6,
      title: 'Rave (Video Management)',
      description: 'Developed a video management system that enables users to share videos via email links. The system integrates with Amazon S3 for secure video storage and link generation, allowing users to easily distribute video content while maintaining control over access and permissions.',
      technologies: ['Amazon S3', 'JavaScript', 'PHP (CodeIgniter)', 'HTML', 'CSS'],
      category: 'web',
      icon: <Globe className="w-6 h-6" />,
      features: ['Video Sharing', 'Email Integration', 'S3 Storage', 'Access Control']
    },
    {
      id: 7,
      title: 'TDFS (E-Commerce for Animals and Products)',
      description: 'Developed an e-commerce platform for managing and selling animal-related products using OpenCart. The system supports product catalog management, order processing, and customer interactions, providing a seamless online shopping experience for users interested in animal products.',
      technologies: ['OpenCart', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      category: 'web',
      icon: <Globe className="w-6 h-6" />,
      features: ['Product Catalog', 'Shopping Cart', 'Payment Integration', 'Order Management']
    },
    {
      id: 8,
      title: 'Wekya (Waste Management)',
      description: 'Developed a waste management system to streamline the management of customer accounts and administrative tasks. The platform includes features for generating user contracts, managing customer and account details, and overseeing waste collection operations to ensure efficient and effective waste management services.',
      technologies: ['PHP (CodeIgniter)', 'MySQL', 'JavaScript', 'AJAX', 'HTML', 'CSS'],
      category: 'web',
      icon: <Database className="w-6 h-6" />,
      features: ['Customer Account Management', 'Contract Generation', 'Waste Collection Operations', 'API Integration']
    },
    {
      id: 9,
      title: 'SGG (School Management)',
      description: 'Developed a comprehensive school management system to handle various aspects of school administration. The platform includes functionalities for managing student records, scheduling and tracking meetings, overseeing staff activities, and managing workshops. Additionally, it features a badge allocation system for students to recognize achievements and milestones.',
      technologies: ['PHP (CodeIgniter)', 'MySQL', 'JavaScript', 'AJAX', 'HTML', 'CSS'],
      category: 'web',
      icon: <Database className="w-6 h-6" />,
      features: ['Student Records', 'Meeting Management', 'Staff Activities', 'Badge Allocation System']
    },
    {
      id: 10,
      title: 'Eventsapp (Laravel)',
      description: 'Developed an event management application using Laravel to handle events across different time zones. The system includes features for managing event agendas, speakers, roundtables, and attendance. It also provides user and admin metrics for tracking engagement and performance, offering a comprehensive solution for event organization and management.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      category: 'web',
      icon: <Globe className="w-6 h-6" />,
      features: ['Multi-timezone Events', 'Speaker Management', 'Attendance Tracking', 'Performance Metrics']
    },
    {
      id: 11,
      title: 'Alraya (Sales and Stock Management)',
      description: 'Developed a sales and stock management system to streamline inventory and supplier management. The platform includes features for managing supplier information, administrative tasks, scorecards, purchase orders (PO), goods receipt notes (GRN), and product supplier documents.',
      technologies: ['Core PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
      category: 'web',
      icon: <Database className="w-6 h-6" />,
      features: ['Inventory Management', 'Purchase Orders', 'Supplier Management', 'Document Control']
    },
    {
      id: 12,
      title: 'AI Timesheet (Web)',
      description: 'Developed a web-based application for managing medical contracts. The platform includes features for creating and scheduling contracts, tracking contract statuses, and managing contract details. Additionally, it incorporates a timesheet management system for tracking work hours and ensuring accurate billing and compliance with contract terms.',
      technologies: ['Flutter'],
      category: 'web',
      icon: <Globe className="w-6 h-6" />,
      features: ['Contract Management', 'Timesheet Tracking', 'Billing System', 'Compliance Monitoring']
    },
    {
      id: 13,
      title: 'Wellzone',
      description: 'Developed a store management system using Magento and the Multi Vendor Marketplace plugin to manage products and customer billing. The platform facilitates product inventory management, order processing, and customer billing, ensuring efficient operation of the store and a smooth shopping experience for customers.',
      technologies: ['Magento', 'Multi Vendor Marketplace', 'PHP', 'JavaScript', 'Python API'],
      category: 'web',
      icon: <Globe className="w-6 h-6" />,
      features: ['Multi-vendor Marketplace', 'Store Management', 'Inventory Control', 'Automated Data Sync']
    },
    {
      id: 14,
      title: 'Doparttime (Job Portal Web)',
      description: 'Developed a job portal to facilitate job search and application processes. Utilized Next.js for the job portal front-end, featuring job and company display, search functionality based on location and job categories, and filtering by job type. On the Flutter Flow side, managed user sessions, job applications, saved jobs, and job provider management.',
      technologies: ['Next.js', 'Flutter Flow', 'TypeScript', 'Firebase'],
      category: 'web',
      icon: <Globe className="w-6 h-6" />,
      features: ['Job Listings', 'Application Management', 'User Profiles', 'Real-time Updates']
    },
    {
      id: 15,
      title: 'TimeSmart.AI Web',
      description: 'TimeSmart.AI is a healthcare-focused software solution designed to automate and simplify physician time tracking and contract management, payment efficiency, and the enforcement of contract compliance all in one platform.',
      technologies: ['React.js', 'MongoDB', 'Node.js'],
      category: 'web',
      icon: <Globe className="w-6 h-6" />,
      features: ['Physician Time Tracking', 'Contract Management', 'Payment Processing', 'Compliance Monitoring']
    },

    // Mobile Projects
    {
      id: 16,
      title: 'Jewelry App',
      description: 'Developed a mobile application to manage jewelry location and information. The app includes features for tracking the location of jewelry items, managing drawer contents, and storing detailed information about each piece. It provides an organized system for keeping track of valuable items and their details, enhancing inventory management and security.',
      technologies: ['Flutter', 'Dart', 'Firebase (FCM Notification)'],
      category: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['Item Tracking', 'Inventory Management', 'Drawer Management', 'Push Notifications']
    },
    {
      id: 17,
      title: 'Satellite',
      description: 'Developed a management system for overseeing multiple satellite companies within a single project. The platform includes features for managing and tracking the holdings of each company, generating detailed reports, and providing insights into project status. It aims to streamline the management of satellite companies, ensuring effective oversight and reporting capabilities.',
      technologies: ['Flutter', 'Dart'],
      category: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['Company Management', 'Holdings Tracking', 'Report Generation', 'Project Insights']
    },
    {
      id: 18,
      title: 'Landlord Mobile App',
      description: 'Developed a mobile application for landlords to manage properties and their details. The app features include tracking and managing property information, saving favorite properties, and searching for properties based on location within Dubai. It provides a user-friendly interface for efficient property management and enhanced search capabilities.',
      technologies: ['Flutter', 'Dart'],
      category: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['Property Management', 'Location Search', 'Favorite Properties', 'Dubai-focused Search']
    },
    {
      id: 19,
      title: 'Tenant App',
      description: 'Developed a mobile application for tenants to manage their property-related needs. The app includes features for managing user profiles under specific properties, tracking and updating property details, and submitting requests for issues such as water problems and maintenance needs.',
      technologies: ['Flutter', 'Dart'],
      category: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['User Profile Management', 'Property Details', 'Issue Reporting', 'Maintenance Requests']
    },
    {
      id: 20,
      title: 'Wekaya Collection App',
      description: 'Developed a mobile application for managing waste collection orders. The app handles pending and completed orders, tracks order collection, and calculates collection weight using Bluetooth technology. It also features a customer sign-off process to confirm collection completion.',
      technologies: ['Flutter', 'Dart', 'Firebase (FCM Notification)'],
      category: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['Bluetooth Integration', 'Weight Calculation', 'Order Tracking', 'Customer Sign-off']
    },
    {
      id: 21,
      title: 'RC Prime',
      description: 'Developed an application for viewing products and managing a product catalog. The app includes features for user login via QR code scanning, fetching and displaying product information, and creating orders. It integrates an in-app browser for accessing additional content and incorporates various modules to enhance functionality and user experience.',
      technologies: ['Flutter', 'Dart', 'Firebase (FCM Notification)'],
      category: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['QR Code Login', 'Product Catalog', 'Order Creation', 'In-app Browser']
    },
    {
      id: 22,
      title: 'Warehouse Management System',
      description: 'Developed a comprehensive warehouse management system for overseeing product inventory and managing collection requests. The platform includes features for managing product details, handling collection requests, and tracking warehouse operations. It also provides tools for team management and efficient request handling, with advanced search functionality.',
      technologies: ['Flutter', 'Dart'],
      category: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['Inventory Management', 'Collection Requests', 'Team Management', 'Advanced Search']
    },
    {
      id: 23,
      title: 'Doparttime (Job Portal)',
      description: 'Developed a job portal application with Flutter Flow for managing user sessions, job applications, and saved jobs. The platform also includes features for job provider management, including job and company administration. Utilized Firestore for real-time data management and synchronization.',
      technologies: ['Flutter Flow', 'Firestore', 'Dart', 'Firebase'],
      category: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['Job Applications', 'Saved Jobs', 'Provider Management', 'Real-time Sync']
    },
    {
      id: 24,
      title: 'Edjabet (Mobile APP)',
      description: 'Developed a management system for Edjabet focused on overseeing various operational details. The project involves managing and maintaining comprehensive records related to holdings, including financial details, asset tracking, and administrative data. The system provides tools for accurate data entry, detailed reporting, and efficient oversight of all managed details.',
      technologies: ['Flutter', 'Dart'],
      category: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['Holdings Management', 'Financial Tracking', 'Asset Management', 'Detailed Reporting']
    },
    {
      id: 25,
      title: 'Eventsapp (Mobile APP)',
      description: 'Developed a Events app integrated with Bluetooth printer connectivity. The app enables event management, including attendance tracking and real-time printing of attendee badges or tickets via a Bluetooth printer, ensuring efficient and seamless event operations.',
      technologies: ['Flutter', 'Dart'],
      category: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['Event Management', 'Attendance Tracking', 'Bluetooth Printing', 'Badge Generation']
    },
    {
      id: 26,
      title: 'Pink Driver (Taxi App)',
      description: 'Pink Driver is a taxi app for women in Qatar. It allows customers to select a driver based on a bidding system from a list of available drivers.',
      technologies: ['Android Native', 'Node.js', 'MongoDB'],
      category: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['Driver Bidding System', 'Women-only Service', 'Real-time Tracking', 'Safety Features']
    },

    // Backend/Support Projects
    {
      id: 27,
      title: 'Reilance (Product and Cart Management)',
      description: 'Developed a comprehensive e-commerce platform to manage products, view customer carts, and handle product catalogues. The system includes features for customers to browse products, manage their shopping carts, and view product details, while providing an admin interface for managing product listings and customer orders.',
      technologies: ['PHP (CodeIgniter)', 'MySQL', 'JavaScript', 'AJAX', 'HTML', 'CSS'],
      category: 'backend',
      icon: <Server className="w-6 h-6" />,
      features: ['Product Management', 'Cart System', 'Admin Interface', 'Order Processing']
    },
    {
      id: 28,
      title: 'Adcoops (Sales and Stock Management)',
      description: 'Developed a sales and stock management system to streamline inventory and supplier management. The platform includes features for managing supplier information, administrative tasks, scorecards, purchase orders (PO), goods receipt notes (GRN), and product supplier documents.',
      technologies: ['Core PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
      category: 'backend',
      icon: <Database className="w-6 h-6" />,
      features: ['Inventory Management', 'Supplier Portal', 'Sales Analytics', 'API Integration']
    },
    {
      id: 29,
      title: 'Data Migration',
      description: 'Developed a Python script for data migration, handling large-scale data transfers from XLSX and CSV files to Firebase. The script efficiently processes and migrates old data to Firebase, ensuring data integrity and consistency throughout the migration process.',
      technologies: ['Python', 'Firebase', 'Pandas', 'XLSX', 'CSV'],
      category: 'backend',
      icon: <Server className="w-6 h-6" />,
      features: ['Data Migration', 'File Processing', 'Data Integrity', 'Firebase Integration']
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'backend', label: 'Backend Systems' }
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web': return 'from-blue-500 to-blue-600'
      case 'mobile': return 'from-green-500 to-green-600'
      case 'backend': return 'from-purple-500 to-purple-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="projects" className="py-20 bg-white scroll-mt-24 sm:scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of my diverse portfolio including web applications, mobile apps, 
              and backend systems that demonstrate my expertise across different technologies.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${getCategoryColor(project.category)}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                      {project.icon}
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-600">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">29</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">15</div>
              <div className="text-gray-600">Web Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">11</div>
              <div className="text-gray-600">Mobile Apps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-600">Backend Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
