import { useLoaderData } from "react-router-dom";
import SJobs from "../SJobs/SJobs";


const Jobss = () => {
    const jobes=useLoaderData();
    return (
        <div className="grid grid-cols-2 gap-5 max-w-7xl mx-auto">
            {
                jobes.map(job=><SJobs job={job} key={job.id}></SJobs>)
                // jobes.map(job=><PractiseV00 job={job} key={job.id}></PractiseV00>)
            }
        </div>
    );
};

export default Jobss;