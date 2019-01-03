import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ModelSelect from './ModelSelect'

class NewShoot extends React.Component {
  
  state = {
    pay: 0,
    location: '',
    date:'',
    time:'',
    selectedModels: null
   
  }

  handleSubmit = () => {
    
    axios.post('http://localhost:3001/api/v1/shoots', {
     
     
      job_id: this.props.job.id,
      pay: this.state.pay,
      location: this.state.location,
      date:this.state.date,
      time:this.state.time,
      model_ids: this.state.selectedModels
    })
    .then(res => this.props.addShoot(res.data))
  }

  

  addModel = val => {
    const id =  val.map(model =>  (model.value.toString()))
    this.setState({
      selectedModels: id
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const {models, close} = this.props
    const {location, pay, date, time } = this.state
    const { handleChange, handleSubmit, addModel } = this

    return (
      <div>
        <h3>Add new Shoot</h3>
        <TextField
          id='locationInput'
          label='location'
          value={location}
          onChange={handleChange}
          margin='normal'
          name='location'
        />
        <br />
        <TextField
        id="date"
        label="Date"
        type="date"
        value={date}
        onChange={handleChange}
        defaultValue="2019-01-01"
        name='date'
        InputLabelProps={{
          shrink: true,
        }}
      />
        <br />
        <TextField
        id="time"
        label="Time"
        type="time"
        value={time}
        onChange={handleChange}
        defaultValue="00:00"
        name='time'
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
        <br />
        <TextField
          id='Pay'
          label='Pay rate per model (£)'
          value={pay}
          onChange={handleChange}
          margin='normal'
          name='pay'
        />
        <br />
        <ModelSelect models={models} handleChange={addModel} />
        <br />






        <Button onClick={() => {handleSubmit(); close()}} variant='contained' color='primary'>
          SUBMIT
        </Button>
      </div>
    )
  }
}

export default NewShoot
