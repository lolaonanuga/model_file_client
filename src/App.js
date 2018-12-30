import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {  Switch } from 'react-router-dom'
import API from './API'
import './App.css';
import AgentDashboard from './containers/AgentDashboard'
import Button from '@material-ui/core/Button'

import './App.css'


class App extends Component {
  state = {
    agent: '',
    enter: false
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

  handleClick = () => {
    this.setState({enter: true})
  }

  render() {
  
    // const {agent } = this.state

    // return (
      
    //   <div className="App">
    //   <h1>MODEL FILE</h1>
    //   {this.state.enter ? 
    //   <AgentDashboard agent={agent} />
    //    : 
    //   <Button onClick={this.handleClick} variant='contained' color='primary'>Enter</Button>
    //   }
    //       </div>

      
    // );


    
    return (
     
      <Router>
        <div>
        <h1>MODEL FILE</h1>
          
          {/* <Route exact path="/" render={() => <div>Home</div>} /> */}
          <Link to='/agent-dashboard'><Button variant='contained' color='primary'>Enter</Button></Link>
          <Route path='/agent-dashboard' render={routerProps => <AgentDashboard {...routerProps} agent={this.state.agent}/>} />
        </div>
      </Router>


    )
  }
}

export default App;
