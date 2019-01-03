import React from 'react'
import { Link } from 'react-router-dom'
import Image from 'react-image-resizer';
import API from '../API'

const Model = ({match, models, jobs}) => {

    const model = models[match.params.modelId]

   const modelPay = () => {
        let pay = 0
        if (model.shoots) {model.shoots.forEach(shoot => pay += shoot.pay)}
        return pay
    }

    // const parseDate = (date) => {
    //   const dates = new Date(date)
    //   return new Intl.DateTimeFormat().format(dates)
    // }

    const shootJob = (shoot) => 
    jobs.find(job => job.id == shoot.job_id)

   const importAll = (r) => {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }
   
    const images = importAll(require.context('../images', true, /^\.\/.*\.(jpg|png|gif)$/))
       
   

    return (
      
      <div className='showPage'>
           <Link to="/agent-dashboard" exact className="back"><p>Go back</p></Link>
          <h1>{model.name}</h1>

          <div className='flex-grid'>
          <Image src={images[`${model.image1}`]} height={320} width={240} alt={model.name} className='col' />
          <Image src={images[`${model.image2}`]} height={320} width={240} alt={model.name} className='col' />          
          <Image src={images[`${model.image3}`]} height={320} width={240} alt={model.name} className='col' />
          </div>
        <hr />
        <div className='flex-grid'>
        <div className='col'>
        <h2>Details</h2>
        <p>D.O.B:{API.parseDate(model.dob)}</p>
        <p>Sex: {model.sex}</p>
        <p>Location: {model.location}</p>
        <p>Mobile:{model.mobile}</p>
        
        
        <h2>Stats</h2>
        <p>Height:{model.height}</p>
        <p>Clothing size:{model.clothing}</p>
        <p>Shoe size: {model.shoe}</p>
        </div>

        <div className='col'>
          <h2>Jobs and Earnings</h2>
          <p>Total earnings to date: £{modelPay()}</p>
          <hr />
          {model.shoots ? model.shoots.map(shoot => 
            <div>
            <p>Brand: {shootJob(shoot).brand}</p>
            <p>Shoot date:{API.parseDate(shoot.date)}</p>
            <p>Pay: {shoot.pay}</p>
            
            </div>) 
            : 
            <p>No shoots</p>}

          
          
        </div>
        
        </div>
      </div>
    )
  }
  


export default Model