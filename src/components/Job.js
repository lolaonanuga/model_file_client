import React from 'react'
import { Link } from 'react-router-dom'

const Job = ({match, jobs, models}) => {

    const job = jobs[match.params.jobId]
    const getShootModels =  (job) =>
    models.filter(model => model.shoots.some(shoot => shoot.id == job.shoot.id))
    const getCastingModels = (job) =>
    models.filter(model => model.castings.some(casting => casting.id == job.casting.id))



    return (
        <div>
            <div>
                <h1>{job.brand}</h1>
                <h2>Details</h2>
                <p>{job.description}</p>
            </div>
        
            <div>
                <h3>Shoot</h3> 
                <p>{job.shoot.date}</p>
                <p>{job.shoot.time}</p>
                <p>{job.shoot.location}</p>
                <p>{job.shoot.pay}</p>
                <p>Models</p>

                
                {getShootModels(job).map(model =>
                <div>
                    {model.image1}
                    {model.name}
                </div>
                )}

                
            </div>

            <div>
                <h3>Casting</h3>
                <p>{job.casting.date}</p>
                <p>{job.casting.time}</p>
                <p>{job.casting.location}</p>
                <p>{job.casting.pay}</p>
                <p>Models</p>
                {getCastingModels(job).map(model =>
                <div>
                    {model.image1}
                    {model.name}
                </div>
                )}

            </div>
            <Link to="/agent-dashboard" exact><p>Go back</p></Link>
        </div>   

    )}
  


export default Job