import React from 'react'
import Job from './Job';
import { Link } from 'react-router-dom'

const JobList = ({jobs}) => {


const renderJobs = 
    Object.keys(jobs).map(jobID =>
    <div>
        <Link key={jobID} to= {`agent-dashboard/jobs/${jobID}`}>{<h3>{jobs[jobID].brand}</h3>}</Link>
        <p>{jobs[jobID].description}</p>
        <p>CASTING:</p>
        <p>{jobs[jobID].casting.date}</p>

        <p>SHOOT:</p>
        <p>{jobs[jobID].shoot.date}</p>
     </div>)

    
//   return (
//     <div className="ui grid">
//         <h1>Jobs</h1>
    
//       {jobs.map(job => 
//     <div>
//        <h3>{job.brand}</h3>
//        <p>{job.description}</p>
//         <p>CASTING:</p>
//         <p>{job.casting.date}</p>

//         <p>SHOOT:</p>
//         <p>{job.shoot.date}</p>
//       </div>
//       )}
//     </div>
//   )



return (

   <div>{renderJobs}</div> 
)
}


export default JobList