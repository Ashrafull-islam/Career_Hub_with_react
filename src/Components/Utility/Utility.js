
// const getJObLocal=()=>{
//     const storeJobApplication=localStorage.getItem('Job_Application');
//     if(storeJobApplication){
//         return JSON.parse(storeJobApplication);
//     }
//     else{
//         return [];
//     }
// }

// const setJobLocal=(id)=>{
//     const storeJobApplications=getJObLocal();
//     const exit=storeJobApplications.find(Job=>Job===id);
//     if(!exit){
//         storeJobApplications.push(id);
//         localStorage.setItem('Job_Application',JSON.stringify(storeJobApplications));
//     }
// }

// export {getJObLocal, setJobLocal};

const getJobApplication=()=>{
    const storeJobApplication=localStorage.getItem('Jobs_title');
    if(storeJobApplication){
        return JSON.parse(storeJobApplication);
    }
    return [];
}

const saveJobApplication=id=>{
    const saveJobApplications=getJobApplication();
    const exit=saveJobApplications.find(jobId=>jobId===id);
    if(!exit){
        saveJobApplications.push(id);
        localStorage.setItem('Jobs_title',JSON.stringify(saveJobApplications));
    }
}
export {saveJobApplication,getJobApplication};