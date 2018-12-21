import React from 'react'
import Model from './Model';

const ModelList = ({models}) => {

  return (
    <div className="ui grid">
        <h1>Models</h1>

      {models.map(model => 
    //   <img src={model.image1} />
       <p>{model.name}</p>
      
      )}
    </div>
  )
}


export default ModelList