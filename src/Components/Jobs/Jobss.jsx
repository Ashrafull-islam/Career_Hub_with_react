import { useLoaderData } from "react-router-dom";
import SJobs from "../SJobs/SJobs";

const Jobss = () => {
    const jobes=useLoaderData();
    return (
        <div>
            {
                jobes.map(job=><SJobs job={job} key={job.id}></SJobs>)
            }
        </div>
    );
};

export default Jobss;