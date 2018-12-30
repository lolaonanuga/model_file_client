import React from 'react'
import ModelList from'../components/ModelList'
import Navbar from '../components/Navbar'
import JobList from '../components/JobList'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Model from '../components/Model'
import Job from '../components/Job'
// const AgentDashboard = ({agent}) => {

//         return (
          
//           <div className="dashboard">
//           <h2>Hello, {agent.name} </h2>
          
//             <ModelList models={agent.models} />
//             <JobList jobs={agent.jobs} />
            
//             </div>
//         )
//       }



const AgentDashboard = ({match, agent}) => 


(
  <div>
    <ModelList models={agent.models} />
    <Route exact path={match.url} render={() => (
      <h3>{match.url}</h3>
    )}/>
    <Route path={`${match.url}/models/:modelId`}render={routerProps => <Model jobs={agent.jobs} models={agent.models} {...routerProps} /> } />

    <JobList jobs={agent.jobs}  />
    <Route exact path={match.url} render={() => (
      <h3>{match.url}</h3>
    )}/>
    <Route path={`${match.url}/jobs/:jobId`}render={routerProps => <Job jobs={agent.jobs} models={agent.models} {...routerProps} /> } />




  </div>
)

export default AgentDashboard