// import React from 'react';
import { FaCode, FaChartBar, FaPalette, FaCog, FaShieldAlt, FaCloud } from 'react-icons/fa';

const Blog = () => {
  const jobCategories = [
    {
      title: 'Software Development',
      icon: <FaCode className="text-4xl text-blue-500" />,
      description: 'Software developers design, code, and maintain software applications. They work on everything from mobile apps to enterprise-level systems.',
      roles: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Mobile App Developer']
    },
    {
      title: 'Data Science',
      icon: <FaChartBar className="text-4xl text-green-500" />,
      description: 'Data scientists analyze and interpret complex data to help companies make better decisions. They use statistical methods and machine learning.',
      roles: ['Data Analyst', 'Machine Learning Engineer', 'Business Intelligence Analyst', 'Data Engineer']
    },
    {
      title: 'Design',
      icon: <FaPalette className="text-4xl text-purple-500" />,
      description: 'Designers in tech create user interfaces and experiences for digital products. They focus on aesthetics, usability, and user satisfaction.',
      roles: ['UX Designer', 'UI Designer', 'Product Designer', 'Graphic Designer']
    },
    {
      title: 'DevOps',
      icon: <FaCog className="text-4xl text-red-500" />,
      description: 'DevOps professionals bridge the gap between development and operations. They automate processes and ensure smooth deployment of software.',
      roles: ['DevOps Engineer', 'Site Reliability Engineer', 'Systems Administrator', 'Release Manager']
    },
    {
      title: 'Cybersecurity',
      icon: <FaShieldAlt className="text-4xl text-yellow-500" />,
      description: 'Cybersecurity experts protect company assets from digital threats. They implement security measures and respond to incidents.',
      roles: ['Security Analyst', 'Penetration Tester', 'Security Engineer', 'Incident Response Specialist']
    },
    {
      title: 'Cloud Computing',
      icon: <FaCloud className="text-4xl text-indigo-500" />,
      description: 'Cloud computing professionals design, implement, and manage cloud-based systems and services for businesses.',
      roles: ['Cloud Architect', 'Cloud Engineer', 'Cloud Security Specialist', 'Cloud Operations Manager']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaCode className="text-4xl text-blue-600 mr-4" />
              <h1 className="text-3xl font-bold text-gray-800">TechCareers Blog</h1>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-blue-600 hover:text-blue-800">Home</a></li>
                <li><a href="#" className="text-blue-600 hover:text-blue-800">About</a></li>
                <li><a href="#" className="text-blue-600 hover:text-blue-800">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Jobs in Tech Companies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-2xl font-semibold ml-4 text-gray-800">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <h4 className="font-semibold text-lg mb-2 text-gray-700">Common Roles:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {category.roles.map((role, roleIndex) => (
                    <li key={roleIndex}>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 TechCareers Blog. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Blog;