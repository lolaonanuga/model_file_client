import React from 'react'
import Button from '@material-ui/core/Button'

const Home = ({handleClick}) => {

    return (

<div className="splash">
  <h1>model file</h1>
  <Button onClick={handleClick} Name="btn" variant='contained' color='inherit'>Enter</Button>
  </div>
)}      

 export default Home