import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../Utility/Utility";
// import { getJObLocal } from "../Utility/Utility";



const AppliedJobs = () => {
    const details=useLoaderData();
    const [applied,setApplied]=useState([]);
    const [jobfilter,setFilter]=useState([]);
    const handleFilter=(remoteJob)=>{
        if(remoteJob === "all"){
            setFilter(applied);
        }
        else if(remoteJob === "OnSite"){
            const remote=applied.filter(remoted=> remoted.remote_or_onsite==="OnSite")
            setFilter(remote);
        }
        else if(remoteJob === "Remote"){
            const onSite=applied.filter(onsited=> onsited.remote_or_onsite === "Remote");
            setFilter(onSite);
        }
    }
    useEffect(()=>{
        const takeFromStore=getJobApplication();
        if(details.length>0){
            const temporary=[];
            for (const id of takeFromStore) {
                const jobs=details.find(job=>job.id===id);
                if(jobs){
                    temporary.push(jobs);
                }
            }
        setApplied(temporary);
        setFilter(temporary);
        }
    },[])
    console.log(details);
    return (
        <div className="max-w-5xl mx-auto">
            <details className="dropdown">
        <summary className="btn m-1  bg-green-300">Filter</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=>handleFilter('all')}><a>All</a></li>
            <li onClick={()=>handleFilter("OnSite")}><a>On Site</a></li>
            <li onClick={()=>handleFilter('Remote')}><a>Remote</a></li>
        </ul>
    </details>
            {
                jobfilter.map(jobbs=><div key={jobbs.id}>
                     <div className="p-5 m-4 border rounded-lg card-compact bg-base-100  shadow-xl max-w-5xl mx-auto">
<figure>
 <img
 className="w-[100px] h-[50px] rounded-lg"
   src={jobbs.logo}
   alt="logo" />
</figure>
 <div>
     <h3>{jobbs.job_title}</h3>
     <h4>{jobbs.company_name}</h4>
     <div className="flex gap-3">
     <button className="p-2 m-2 text-cyan-500 rounded-lg border border-cyan-300 text-tomato-200 ">{jobbs.remote_or_onsite}</button>
     <button className="p-2 m-2 text-cyan-500 rounded-lg border border-cyan-300 text-tomato-200 ">{jobbs.job_type}</button>
     </div>
     <div className="flex gap-2">
         <div className="flex">
         {/* <IoLocationOutline className="mt-1" /> */}
         <p>{jobbs.location}</p>
         </div>

         <div className="flex">
         {/* <CiDollar className="mt-1" />    */}
         <p> {jobbs.salary}</p>
         </div>
     </div>
    
 </div>
</div>
                </div>)
            }
        </div>
    );
};

export default AppliedJobs;