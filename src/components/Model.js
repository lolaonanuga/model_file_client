import React from 'react'

const Model = ({model}) => {

    return (
      <div>
          <h1>{model.name}</h1>
        <img src={model.image1} />
        <img src={model.image2} />
        <img src={model.image3} />
      </div>
    )
  }
  







export default Model