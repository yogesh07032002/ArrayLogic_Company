import { FaBullhorn, FaChartLine, FaCloud, FaDatabase, FaGlobe, FaLaptopCode, FaMobileAlt, FaPenFancy, FaShoppingCart, FaTools, FaUsers, FaWordpress } from "react-icons/fa";

const services = [
  {
    title: "SOFTWARE DEVELOPMENT",
    icon: <FaLaptopCode />,
    color: "bg-red-600",
    features: [
      "Custom Software Solutions",
      "Enterprise Application Development",
      "AI & Machine Learning Integration",
      "Secure Web & Mobile Applications",
      "Third-party API Development",
      "Cloud & On-Premise Solutions",
      "Scalable & High-Performance Software",
      "End-to-End Software Consulting",
    ],
  },
  {
    title: "WEBSITE DEVELOPMENT",
    icon: <FaGlobe />,
    color: "bg-blue-600",
    features: [
      "Responsive Website Design",
      "Static & Dynamic Websites",
      "E-commerce Website Development",
      "Domain, Hosting & SSL",
      "SEO-Friendly Websites",
      "CMS Development",
      "Fast & Secure Web Solutions",
      "Cross-Browser Compatibility",
    ],
  },
  {
    title: "APPLICATION DEVELOPMENT",
    icon: <FaMobileAlt />,
    color: "bg-green-600",
    features: [
      "Android & iOS App Development",
      "React Native & Flutter Apps",
      "E-commerce & Business Apps",
      "Custom UI/UX Design",
      "Third-party API Integrations",
      "Security & Data Encryption",
      "App Store Deployment & Optimization",
      "Performance & Speed Optimization",
    ],
  },
  {
    title: "CRM MANAGEMENT",
    icon: <FaDatabase />,
    color: "bg-purple-600",
    features: [
      "Custom CRM Development",
      "Lead & Customer Management",
      "Automation & Workflow Management",
      "Data Security & Compliance",
      "Third-party CRM Integration",
      "Cloud & On-Premise CRM Solutions",
      "Role-Based Access Control",
      "Real-Time Reports & Dashboards",
    ],
  },
  {
    title: "CLOUD SOLUTION",
    icon: <FaCloud />,
    color: "bg-teal-500",
    features: [
      "AWS, Google Cloud, Azure",
      "Cloud Hosting & Deployment",
      "Serverless Architecture",
      "Cloud Backup & Disaster Recovery",
      "API Gateway & Microservices",
      "Cost Optimization & Monitoring",
      "Scalable & Secure Cloud Apps",
      "Hybrid & Multi-Cloud Solutions",
    ],
  },
  {
    title: "DATA SOLUTION",
    icon: <FaChartLine />,
    color: "bg-yellow-600",
    features: [
      "Big Data Analytics",
      "Database Management & Optimization",
      "Data Warehousing & ETL",
      "AI-Powered Insights",
      "Data Migration & Integration",
      "Security & Compliance",
      "Predictive Data Analysis",
      "Real-Time Data Processing",
    ],
  },
  {
    title: "ECOMMERCE DEVELOPMENT",
    icon: <FaShoppingCart />,
    color: "bg-black",
    features: [
      "Unlimited Product Listings",
      "Payment Gateway Integration",
      "Content Management System",
      "Admin & User Logins",
      "Shopping Cart System",
      "Order & Inventory Management",
      "User-Friendly Navigation",
      "Multi-Vendor Marketplace",
    ],
  },
  {
    title: "SOCIAL MEDIA MARKETING (SMM)",
    icon: <FaUsers />,
    color: "bg-indigo-700",
    features: [
      "Creating & Managing Social Pages",
      "Market Analysis & Strategy",
      "Targeted Ad Campaigns",
      "Creative Graphic Designs",
      "Analytics & Insights Reports",
      "Budget-Friendly Promotions",
      "Influencer & Brand Collaborations",
      "Cross-Platform Social Media Presence",
    ],
  },
  {
    title: "DIGITAL MARKETING",
    icon: <FaBullhorn />,
    color: "bg-orange-600",
    features: [
      "Google Ads & PPC Campaigns",
      "Email & SMS Marketing",
      "Lead Generation Strategies",
      "Conversion Rate Optimization",
      "Content Marketing",
      "SEO & Retargeting Strategies",
      "Social Media Ads & Campaigns",
      "Performance Tracking & Optimization",
    ],
  },
  {
    title: "WEBSITE MAINTENANCE & SUPPORT",
    icon: <FaTools />,
    color: "bg-gray-700",
    features: [
      "Regular Updates & Fixes",
      "Security Enhancements",
      "Performance Optimization",
      "Backup & Recovery Solutions",
      "Bug Fixes & Troubleshooting",
      "Uptime Monitoring & Technical Support",
      "Hosting & Server Maintenance",
      "Website Speed Optimization",
    ],
  },
  {
    title: "WORDPRESS DEVELOPMENT",
    icon: <FaWordpress />,
    color: "bg-blue-800",
    features: [
      "Custom WordPress Themes",
      "Plugin Development & Customization",
      "WooCommerce Store Setup",
      "SEO-Friendly Websites",
      "Performance Optimization",
      "Security & Backup Solutions",
      "WordPress Migration & Upgrades",
      "Multilingual & Accessibility Features",
    ],
  },
  {
    title: "CONTENT WRITING",
    icon: <FaPenFancy />,
    color: "bg-pink-600",
    features: [
      "SEO Optimized Articles",
      "Website Content & Blogs",
      "Product Descriptions",
      "Social Media Captions & Posts",
      "Technical & Business Writing",
      "Creative Copywriting",
      "Script & Video Content Writing",
      "Press Releases & Email Copies",
    ],
  },
];




export default function Services() {
  return (
    <div className="relative bg-white py-16 px-6">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 inline-block border-b-4 border-orange-600 pb-2 mt-5">
          WHAT WE <span className="bg-orange-600 text-white px-2">DO</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-gray-900">
            <div className={`w-16 h-16 ${service.color} text-white text-3xl flex items-center justify-center rounded-full mx-auto -mt-12`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-black mt-4 mb-2">{service.title}</h3>
            <ul className="text-black  text-sm space-y-1">
              {service.features.map((feature, i) => (
                <li key={i} className="border-b  py-1">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call Button */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 bg-orange-500 text-white px-4 py-2 text-sm font-semibold cursor-pointer">
        <a href="tel:7620162336">Call: 7620162336</a>
      </div>
    </div>
  );
}
