import React from 'react'
import { Link } from 'react-router-dom'
const Model = ({match, models, jobs}) => {

    const model = models[match.params.modelId]

   const modelPay = () => {
        let pay = 0
        model.shoots.forEach(shoot => pay += shoot.pay)
        return pay
    }

    const shootJob = (shoot) => 
    jobs.find(job => job.id == shoot.job_id)

   

    return (
      
      <div>
           
          <h1>{model.name}</h1>
        <img src={model.image1} />
        <img src={model.image2} />
        <img src={model.image3} />
        

        <h2>Details</h2>
        <p>{model.dob}</p>
        <p>{model.sex}</p>
        <p>{model.location}</p>
        <p>{model.mobile}</p>
        
        


        <h2>Stats</h2>
        <p>{model.height}</p>
        <p>{model.clothing}</p>
        <p>{model.shoe}</p>

        <h2>Jobs and Earnings</h2>

        {model.shoots ? model.shoots.map(shoot => 
        <div>
        <p>{shootJob(shoot).brand}</p>
        <p>{shoot.date}</p>
        <p>{shoot.pay}</p>
        <p>Total</p>
        <p>£{modelPay()}</p>
        </div>) : <p>No shoots</p>}

         <Link to="/agent-dashboard" exact><p>Go back</p></Link>
      </div>
    )
  }
  


export default Model