import React from 'react'
import { Link } from 'react-router-dom'




    class Job extends React.Component {
  
        state = {
         newCasting: false,
         newShoot: false
         
        }

        
       getShootModels =  (job, models) =>
       models.filter(model => model.shoots.some(shoot => shoot.id == job.shoot.id))
    //    console.log(models)
       
        getCastingModels = (job, models) =>
       models.filter(model => model.castings.some(casting => casting.id == job.casting.id))
   
    newShootToggle = () => {
        this.setState({newShoot: !this.state.newShoot
         
        })
      }

    newCastingToggle = () => {
        this.setState({newCasting: !this.state.newCasting
         
        })
      }
        





        render() {
            const {models, match} = this.props
            const job = this.props.jobs[this.props.match.params.jobId]
           
            const {getCastingModels, getShootModels} = this
      

            return (
                <div>
                    <div>
                        <h1>{job.brand}</h1>
                        <h2>Details</h2>
                        <p>{job.description}</p>
                    </div>
                
                {job.shoot ?
                    <div>
                        <h3>Shoot</h3> 
                        <p>{job.shoot.date}</p>
                        <p>{job.shoot.time}</p>
                        <p>{job.shoot.location}</p>
                        <p>{job.shoot.pay}</p>
                        <h4>Models</h4>

                        
                        {getShootModels(job, models).map(model =>
                        <div>
                            {model.image1}
                            {model.name}
                        </div>
                        )}

                    </div>
                    :
                    <a onClick={this.newJobToggle}><p>add casting</p></a>
                
                    }
                    {job.casting ?
                    <div>
                        <h3>Casting</h3>
                        <p>{job.casting.date}</p>
                        <p>{job.casting.time}</p>
                        <p>{job.casting.location}</p>
                        <p>{job.casting.pay}</p>
                        <p>Models</p>
                        {getCastingModels(job, models).map(model =>
                            <div>
                                {model.image1}
                                {model.name}
                            </div>
                        )}
                         </div>
                        :
                        <a onClick={this.newCastingToggle}><p>add casting</p></a>
                
                        }

                   
                    <Link to="/agent-dashboard" exact><p>Go back</p></Link>
                </div>   
                
            )   
        }
  
    }

export default Job