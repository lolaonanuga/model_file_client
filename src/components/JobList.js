import React from 'react'
import Job from './Job';

const ModelList = ({jobs}) => {




    
  return (
    <div className="ui grid">
        <h1>Jobs</h1>
    
      {jobs.map(job => 
    <div>
       <h3>{job.brand}</h3>
       <p>{job.description}</p>
        <p>CASTING:</p>
        <p>{job.casting.date}</p>

        <p>SHOOT:</p>
        <p>{job.shoot.date}</p>
      </div>
      )}
    </div>
  )
}


export default ModelList