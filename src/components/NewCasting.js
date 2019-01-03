import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ModelSelect from './ModelSelect'

class NewCasting extends React.Component {
  
  state = {
    date: '',
    time: '',
    location: '',
    details: '',
    selectedModels: null
   
  }

  handleSubmit = () => {
    axios.post('http://localhost:3001/api/v1/castings', {
        job_id: this.props.job.id,
        date: this.state.date,
        time: this.state.date,
        location: this.state.date,
        details: this.state.details,
        model_ids: this.state.selectedModels
    })
    .then(res => this.props.addCasting(res.data))
    
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addModel = val => {
    const id =  val.map(model =>  (model.value.toString()))
    this.setState({
      selectedModels: id
    })
  }
  
  render () {
    const {models, close} = this.props
    const { date, time, location, details } = this.state
    const { handleChange, handleSubmit, addModel } = this
    
    return (
      <div>
        <h3>Add casting</h3>
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
          id='detailsInput'
          label='details'
          value={details}
          multiline
          onChange={handleChange}
          margin='normal'
          name='details'
        />
        <br />
        <ModelSelect handleChange={addModel} models={models} />
        <Button onClick={() => {handleSubmit(); close()}} variant='contained' color='primary'>
          SUBMIT
        </Button>
      </div>
    )
  }
}

export default NewCasting
