import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { MdDescription } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { saveJobApplication } from "../Utility/Utility";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    const notify=()=>{
        saveJobApplication(idParse);
        toast('completed')
        
    }
    const jobs=useLoaderData();
    const id=useParams();
    const idParse=parseInt(id.jobId);
    console.log(idParse);
    const job=jobs.find(jobb=> jobb.id === idParse);
    console.log(job);
    const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title}=job;
    return (
        <div className="md:grid grid-cols-4 gap-5  my-10 p-10">
            <div className="md:col-span-3 ">
                <h2  className="text-sm  my-4"><span className="text-xl font-semibold">Job Description:</span>{job_description}</h2>
                
                <h2 className="text-sm my-4"><span className="text-xl font-semibold">Job Responsaibillty:</span>{job_responsibility}</h2>

                <h2 className="text-xl font-semibold my-4">Educational Requirement:</h2><p className="text-sm ">
                {educational_requirements}
                </p>
                <h2 className="text-xl my-4 font-semibold">Experience: <span className="text-sm font-normal">{experiences}</span></h2>
            </div>
            <div>
                <div className="border bg-green-100	p-4 m-4 rounded-lg">
                    <h2>Job Details</h2>
                    <hr className="my-4" />
                    <div>
                        <div className="flex gap-1">
                        <CiDollar className="mt-1" />
                        <h2>Salary:{salary} <span>Per month</span></h2>
                        </div>
                        <div className="flex gap-1">
                        <MdDescription className="mt-1" />
                        <h2>Job Title:{job_title}</h2>
                        </div>
                        <hr className="my-4" />
                        <div className="flex gap-1">
                        <MdOutlinePhone className="mt-1" />
                        <h2>Phone:{job.contact_information.phone}</h2>
                        </div>
                        <div className="flex gap-1">
                        <MdEmail className="mt-1" />
                        <h2>Email:{job.contact_information.email}</h2>
                        </div>
                        <div className="flex gap-1">
                        <IoLocationOutline className=" text-2xl" />
                        <h2>Address:{job.contact_information.address}</h2>
                        </div>
                    </div>
                </div>
                <div className="m-2 p-2">
        <button onClick={notify}  className="btn w-full bg-green-200">Apply Now</button>
        <ToastContainer />
      </div>
                
            </div>
         </div>
    );
};

export default JobDetails;