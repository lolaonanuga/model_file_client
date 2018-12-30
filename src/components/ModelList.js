import React from 'react'
import Model from './Model';
import { Link } from 'react-router-dom'

const ModelList = ({models}) => {

    const renderModels = 
    Object.keys(models).map(modelID =>
        <Link key={modelID} to= {`agent-dashboard/models/${modelID}`}>{models[modelID].name}</Link>)

        return (
            <div>{renderModels}</div>


        )

//   return (
//     <div className="ui grid">
//         <h1>Models</h1>

//       {models.map(model => 
//     //   <img src={model.image1} />
//        <p>{model.name}</p>
      
//       )}
//     </div>
//   )
}


export default ModelList