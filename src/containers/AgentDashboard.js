import React from 'react'
import ModelList from'../components/ModelList'
import Navbar from '../components/Navbar'
import JobList from '../components/JobList'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Model from '../components/Model'
import Job from '../components/Job'
import NewJob from '../components/NewJob'
import { Link } from 'react-router-dom'

// const AgentDashboard = ({match, agent}) => 
class AgentDashboard extends React.Component {

  state = {
    newJob: false
  }

  newJobToggle = () => {
    this.setState({newJob: !this.state.newJob
     
    })
  }

  render() {
    const agent = this.props.agent
    const match = this.props.match
return (
  
    <Route exact path={match.url} render={() => (

      <div className="wrapper">

        <div className="box header">
          <h1>model file</h1>
          <h2>welcome, {agent.name}</h2>
        </div>
      
        <div className="box sidebar">
          <h2>models</h2>
          <ModelList models={agent.models}  />
        </div>

        <div className="box content">
          <h2>jobs </h2>
          <div>{this.state.newJob ? 
          <div><a onClick={this.newJobToggle}><p>cancel</p></a>
           <NewJob agent={agent} /> </div>
          :
           <a onClick={this.newJobToggle}><p>add job</p></a>
           }
           </div>
          

          <JobList jobs={agent.jobs} models={agent.models} />
        </div>

    </div>
    )}/>
    // <Route path={`${match.url}/models/:modelId`}render={routerProps => <Model jobs={agent.jobs} models={agent.models} {...routerProps} /> } />
    
    
  
    // <Route path={`${match.url}/jobs/:jobId`}render={routerProps => <Job jobs={agent.jobs} models={agent.models} {...routerProps} /> } />

)
    }
    }
export default AgentDashboard