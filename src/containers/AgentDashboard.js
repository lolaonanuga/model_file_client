import React from 'react'
import ModelList from'../components/ModelList'
import Navbar from '../components/Navbar'
import JobList from '../components/JobList'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Model from '../components/Model'
import Job from '../components/Job'
import NewJob from '../components/NewJob'
import { Link } from 'react-router-dom'


class AgentDashboard extends React.Component {

  state = {
    newJob: false,
    agent: this.props.agent,
    jobs: this.props.jobs
    
  }

  newJobToggle = () => {
    this.setState({newJob: !this.state.newJob
    })
  }

  renderJob = job => {
    this.setState({jobs: [...this.state.jobs, job]
    })
  }

 

  render() {
    const { jobs} = this.state
    const {models, agent} = this.props
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
          <ModelList models={models}  />
        </div>

        <div className="box content">
          <h2>jobs </h2>
          <div>{this.state.newJob ? 
          <div><a onClick={this.newJobToggle}><p>cancel</p></a>
           <NewJob  renderJob={this.renderJob} agent={agent} close={this.newJobToggle}/> </div>
          :
           <a onClick={this.newJobToggle}><p>add job</p></a>
           }
           </div>
          

          <JobList jobs={jobs} models={agent.models} />
        </div>

    </div>
    )}/>
  
)
    }
    }
export default AgentDashboard