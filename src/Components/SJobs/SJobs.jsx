
const SJobs = ({job}) => {
    console.log(job);
    const {id,logo,job_title,company_name,remote_or_onsite,contact_information
,address,email,phone,job_description,job_responsibility,salary,location,job_type}=job;
    return (
        <div>
            <div>
        <div className="p-5 m-4 border rounded-lg card-compact bg-base-100  shadow-xl">
<figure>
 <img
 className="w-[100px] h-[50px] rounded-lg"
   src={logo}
   alt="logo" />
</figure>
 <div>
     <h3>{job_title}</h3>
     <h4>{company_name}</h4>
     <div className="flex gap-3">
     <button className="p-2 m-2 text-cyan-500 rounded-lg border border-cyan-300 text-tomato-200 ">{remote_or_onsite}</button>
     <button className="p-2 m-2 text-cyan-500 rounded-lg border border-cyan-300 text-tomato-200 ">{job_type}</button>
     </div>
     <div className="flex gap-2">
         <div className="flex">
         {/* <IoLocationOutline className="mt-1" /> */}
         <p>{location}</p>
         </div>

         <div className="flex">
         {/* <CiDollar className="mt-1" />    */}
         <p> {salary}</p>
         </div>
     </div>
    
 </div>
 <div className="card-actions">
     {/* <Link to={`/job/${id}`}> */}
     <button className="bg-cyan-300 p-2 m-1 rounded-lg text-white font-semibold">View Details</button>
     {/* </Link> */}
 </div>
</div>
     </div>
        </div>
    );
};

export default SJobs;