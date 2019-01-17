import React from 'react'
import ModelList from'../components/ModelList'
import Navbar from '../components/Navbar'
import JobList from '../components/JobList'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { withRouter} from 'react-router-dom'
import Model from '../components/Model'
import Job from '../components/Job'
import Button from '@material-ui/core/Button'
import NewJob from '../components/NewJob'
import { Link } from 'react-router-dom'
import API from '../API'

class AgentDashboard extends React.Component {

  state = {
    newJob: false,
    agent: JSON.parse(localStorage.getItem('agent')),
    jobs: JSON.parse(localStorage.getItem('agent')).jobs,
    filteredModels: JSON.parse(localStorage.getItem('agent')).models,
    modelFilter: 'all',
    models: JSON.parse(localStorage.getItem('agent')).models,
    

  }

  newJobToggle = () => {
    this.setState({newJob: !this.state.newJob
    })
  }

  renderJob = job => {
    this.setState({jobs: [...this.state.jobs, job]
    })
    this.props.update()
  }

  changeFilter = (filter) => {
    console.log(filter)
    this.setState({modelFilter: filter})
    // this.getFilteredModels(event.target.value)
  }

  getFilteredModels = () => {
    if (this.state.modelFilter === 'all') {
      return this.state.models 
    }
    else if (this.state.modelFilter === 'men') {
      return this.state.models.filter(model => model.sex === 'M')
    }
    else if (this.state.modelFilter === 'women') {
      return  this.state.models.filter(model => model.sex === 'F')
    }
  }



 

  render() {
    const { modelFilter} = this.state
    const { agent, models, jobs} = this.state
    const update = this.props
    const match = this.props.match
    console.log(agent)
return (
  
 

      <div className="wrapper">

        <div className="box header">
          <h1>model file</h1>
          <h2>welcome, {agent.name}</h2>
          
        </div>
      
          <div className="box sidebar">
          <h2>models</h2>
          <Button color={modelFilter === 'men' ? 'primary' : 'default'} onClick={() => this.changeFilter('men')}>men</Button> <Button color={modelFilter === 'women' ? 'primary' : 'default'} onClick={() => this.changeFilter('women')}>women</Button> <Button color={modelFilter === 'all' ? 'primary' : 'default'} onClick={() => this.changeFilter('all')} value='all'>all</Button>
          <ModelList models={this.getFilteredModels()}  />
       
        </div>

        <div className="box content">
          <h2>jobs </h2>
          <div>{this.state.newJob ? 
          <div><a onClick={this.newJobToggle}><p>cancel</p></a>
           <NewJob renderJob={this.renderJob} agent={agent} close={this.newJobToggle}/> </div>
          :
           <a onClick={this.newJobToggle}><p>add job</p></a>
           }
           </div>
          

          <JobList jobs={jobs} models={models} />
        </div>  

    </div>
  
  

    )
    }
    }
export default withRouter(AgentDashboard)