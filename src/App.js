import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {  Switch } from 'react-router-dom'
import API from './API'
import './App.css';
import AgentDashboard from './containers/AgentDashboard'
import Button from '@material-ui/core/Button'
import Model from './components/Model'
import Job from './components/Job'
import NewJob from './components/NewJob'
import './App.css'



class App extends Component {
  state = {
    agent: '',
   
  }

  componentDidMount () {
    this.getAgentInfo()
  }

    getAgentInfo = () => {
    API.getAgent()
    .then(res => this.setState({
      agent: res
    }))
    
  }

  

  render() {


    const agent = this.state.agent
    
    return (
     
      <Router>
         <div className="main">
        <div>
        
          <Route exact path="/" render={() => <div className="splash">
            <h1>model file</h1>
            <Link to='/agent-dashboard'><Button className="btn" variant='contained' color='inherit'>Enter</Button></Link>
            </div>} />
          </div>
          
          <Route path='/agent-dashboard' render={routerProps => <AgentDashboard {...routerProps} models={agent.models} jobs={agent.jobs} agent={agent}/>} />
          <Route path={`/agent-dashboard/models/:modelId`}render={routerProps => <Model jobs={agent.jobs} models={agent.models} {...routerProps} /> } />
          <Route exact path={`/agent-dashboard/jobs/:jobId`}render={routerProps => <Job jobs={agent.jobs} models={agent.models} {...routerProps} /> } />
   
        </div>
      </Router>


    )
  }
}

export default App;
