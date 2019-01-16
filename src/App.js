import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {  Switch, withRouter, } from 'react-router-dom'
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
    agent: '',
    jobs: ''
   
  }

    componentDidMount () {
    console.log(this.state.loaded)
     this.getAgentInfo()
    
   
  }

    getAgentInfo = () => {
    API.getAgent()
    .then(res => this.setState({
      agent: res,
      models: res.models,
      jobs: res.jobs
    }))
    .then(res => localStorage.setItem('agent', JSON.stringify(this.state.agent)))

    }
    
    


  

  render() {


    const agent = this.state.agent
    const models = this.state.models
    const jobs = this.state.jobs
    const loaded = this.state.loaded
    
    return (
     
      
         <div className="main">
        <div>
        
          <Route exact path="/" render={() => <div className="splash">
            <h1>model file</h1>
            {/* <Link to='/agent-dashboard'><Button className="btn" variant='contained' color='inherit'>Enter</Button></Link> */}
            <Button onClick={() =>  this.props.history.push('/agent-dashboard')  }>Enter</Button>
            </div>} />
          </div>
          <Switch>
          <Route exact path='/agent-dashboard' render={routerProps => <AgentDashboard {...routerProps} loaded={loaded} models={models} jobs={jobs} agent={agent} update={this.getAgentInfo} />} />
          <Route path={`/agent-dashboard/models/:modelId`}render={routerProps => <Model jobs={agent.jobs} models={agent.models} {...routerProps} /> } />
          <Route exact path={`/agent-dashboard/jobs/:jobId`}render={routerProps => <Job jobs={agent.jobs} models={agent.models} update={this.getAgentInfo} {...routerProps} /> } />
          {/* <Route exact path={`/agent-dashboard/models`}render={routerProps => <JobList jobs={agent.jobs} models={agent.models} update={this.getAgentInfo} {...routerProps} /> } />
          <Route exact path={`/agent-dashboard/jobs/`}render={routerProps => <JobList jobs={agent.jobs} models={agent.models} update={this.getAgentInfo} {...routerProps} /> } /> */}
          
          <Route component={() => <h1>Page not found.</h1>} /> 
          </Switch>
        </div>
      


    )
  }
}

export default withRouter(App);
