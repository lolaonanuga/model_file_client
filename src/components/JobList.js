import React from 'react'
import Job from './Job';
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import API from '../API'



const JobList = ({jobs, models}) => {


const renderJobs = 
<List component="nav" >
    {Object.keys(jobs).map(jobID =>
    <div>
        <ListItem button>
        <Link style={{color: '#fff' }}key={jobID} to= {`agent-dashboard/jobs/${jobID}`}>{
        <div>
        <h3 className="job-title">{jobs[jobID].brand}</h3>
       
        <p>{jobs[jobID].description}</p>
       
        {jobs[jobID].casting ?
         <p>casting - {API.parseDate(jobs[jobID].casting.date)}</p>
         :
         <p>No casting</p>
        }
        {jobs[jobID].shoot ?
        <p>shoot - {API.parseDate(jobs[jobID].shoot.date)}</p>
        :
        <p>No shoot</p>
        }
        
        </div>
        
        }
        
        </Link>
        </ListItem>
        <Divider />
     </div>
     
     
     ) }
     
     </List>
   



return (

   <div>{renderJobs}</div> 
)
}


export default JobList