// import React from 'react';

// const PractiseV00 = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default PractiseV00;

import React from 'react';
import { FaMapMarkerAlt, FaBuilding, FaClock, FaDollarSign, FaGraduationCap, FaBriefcase, FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';

const PractiseV00 = ({job}) => {
    console.log(job);

  return (
    <div className="card w-full max-w-2xl mx-auto bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="card-body p-8">
        <div className="flex items-center mb-6">
          <img src={job.logo} alt={job.company_name} className="w-20 h-20 object-contain mr-6" />
          <div>
            <h2 className="card-title text-2xl font-bold text-gray-800">{job.job_title}</h2>
            <p className="text-lg font-semibold text-gray-600">{job.company_name}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="badge badge-outline py-3 px-4 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" /> <span>{job.location}</span>
          </div>
          <div className="badge badge-outline py-3 px-4 flex items-center gap-2">
            <FaBuilding className="text-green-500" /> <span>{job.remote_or_onsite}</span>
          </div>
          <div className="badge badge-outline py-3 px-4 flex items-center gap-2">
            <FaClock className="text-yellow-500" /> <span>{job.job_type}</span>
          </div>
          <div className="badge badge-outline py-3 px-4 flex items-center gap-2">
            <FaDollarSign className="text-red-500" /> <span>{job.salary}</span>
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Job Description</h3>
            <p className="text-gray-600">{job.job_description}</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Job Responsibility</h3>
            <p className="text-gray-600">{job.job_responsibility}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start gap-3">
            <FaGraduationCap className="text-blue-500 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Educational Requirements</h4>
              <p className="text-gray-600">{job.educational_requirements}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <FaBriefcase className="text-green-500 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Experience</h4>
              <p className="text-gray-600">{job.experiences}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3 text-gray-800">Contact Information</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-500" />
              <span className="text-gray-600">{job.contact_information.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              <span className="text-gray-600">{job.contact_information.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaHome className="text-red-500" />
              <span className="text-gray-600">{job.contact_information.address}</span>
            </div>
          </div>
        </div>
        
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default PractiseV00;