import React from 'react'
import ModelList from'../components/ModelList'
import Navbar from '../components/Navbar'
import JobList from '../components/JobList'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Model from '../components/Model'
import Job from '../components/Job'


const AgentDashboard = ({match, agent}) => 


(
  
    <Route exact path={match.url} render={() => (

      <div className="wrapper">

        <div className="box header">
          <h1>model file</h1>
        </div>

        <div className="box content">
          <h2>models</h2>
          <ModelList models={agent.models}  />
        </div>

        <div className="box sidebar">
          <h2>jobs</h2>
          <JobList jobs={agent.jobs}  />
        </div>

    </div>
    )}/>
    // <Route path={`${match.url}/models/:modelId`}render={routerProps => <Model jobs={agent.jobs} models={agent.models} {...routerProps} /> } />
    
    
  
    // <Route path={`${match.url}/jobs/:jobId`}render={routerProps => <Job jobs={agent.jobs} models={agent.models} {...routerProps} /> } />

)

export default AgentDashboard