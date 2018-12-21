import React from 'react'
import ModelList from'../components/ModelList'
import Navbar from '../components/Navbar'
import JobList from '../components/JobList'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const AgentDashboard = ({agent}) => {

        return (
          
          <div className="dashboard">
          <h2>Hello, {agent.name} </h2>
          
            <ModelList models={agent.models} />
            <JobList jobs={agent.jobs} />
            
            </div>
        )
      }


export default AgentDashboard