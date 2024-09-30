
import { useEffect, useState } from "react";
import Job from "../../Job/Job";

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);
    const [limited,setLimited]=useState(4);
    useEffect(()=>{
        fetch('Jobs.json')
        .then(response=>response.json())
        .then(data=>setJobs(data));
    },[])
    return (
        <div>
              <div className="max-w-5xl mx-auto my-20">
            <h1 className="text-center text-4xl font-semibold">Featured Jobs</h1>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit at impedit adipisci, minima unde nulla repellat maxime ipsam expedita odit quisquam illo eligendi. Omnis optio blanditiis, reprehenderit facere vitae nesciunt.</p>
        </div>

        <div className="grid grid-cols-2">
            {
                jobs.slice(0,limited).map(job=><Job job={job} key={job.id}></Job>)
            }
        </div>

        <div className={limited === jobs.length && 'hidden'} >
            <button onClick={()=>setLimited(jobs.length)} className="bg-cyan-300 p-2 m-1 rounded-lg text-white font-semibold block mx-auto">Show more</button>
        </div>

        </div>
    );
};

export default FeaturedJobs;