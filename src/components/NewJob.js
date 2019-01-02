import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class NewJob extends React.Component {
  
  state = {
   brand: '',
   description: ''
   
  }

  handleSubmit = () => {
    console.log(this.state)
    axios.post('http://localhost:3001/api/v1/jobs', {
      brand: this.state.brand,
      description: this.state.description,
      agent_id: this.props.agent.id
    })
    
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const agent = this.props.agent
    const { brand, description } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <div>
        <h3>Add new Job</h3>
        <TextField
          id='brandInput'
          label='brand'
          value={brand}
          onChange={handleChange}
          margin='normal'
          name='brand'
        />
        <br />
        <TextField
          id='descriptionInput'
          label='Description'
          value={description}
          onChange={handleChange}
          margin='normal'
          name='description'
          
        />
        <br />
        <Button onClick={handleSubmit} variant='contained' color='primary'>
          SUBMIT
        </Button>
      </div>
    )
  }
}

export default NewJob
