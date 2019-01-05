import React from 'react'
import { Link } from 'react-router-dom'
import NewShoot from '../components/NewShoot'
import NewCasting from '../components/NewCasting'
import Image from 'react-image-resizer'
import API from '../API'


    class Job extends React.Component {
  
        state = {
         newCasting: false,
         newShoot: false,
         job: this.props.jobs[this.props.match.params.jobId],
         casting: this.props.jobs[this.props.match.params.jobId].casting,
         shoot: this.props.jobs[this.props.match.params.jobId].shoot
        }

        
       getShootModels =  (job, models) =>
       models.filter(model => model.shoots.some(shoot => shoot.id == this.state.shoot.id))

       
        getCastingModels = (job, models) =>
       models.filter(model => model.castings.some(casting => casting.id == this.state.casting.id))
   
    newShootToggle = () => {
        this.setState({newShoot: !this.state.newShoot
         
        })
      }

    newCastingToggle = () => {
        this.setState({newCasting: !this.state.newCasting
         
        })
      }
      importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
     
      renderShoot = shoot => {
        this.props.models.filter(model => shoot.models.map(mo => mo.id).includes(model.id)).map(model => model.shoots.push(shoot))
        this.setState({shoot: shoot
        }, this.props.update())
        
      }

      renderCasting = casting => {
        this.props.models.filter(model => casting.models.map(mo => mo.id).includes(model.id)).map(model => model.castings.push(casting))
        
        this.setState({casting: casting
        }, this.props.update())
      }
        





        render() {
            const {models, match, update} = this.props
            // const job = this.props.jobs[this.props.match.params.jobId]
           const {newShoot, newCasting, job, shoot, casting} = this.state
            const {getCastingModels, getShootModels} = this
            const images = this.importAll(require.context('../images', true, /^\.\/.*\.(jpg|png|gif)$/))
            

            return (
                <div className='showPage'>
                    <div className='main'>
                    <h1>{job.brand}</h1>
                    <Link to="/agent-dashboard" exact className="back"><p>Go back</p></Link>
                        <h4>Job description:</h4><p>{job.description}</p>
                    </div>
                    <hr />
                <div className='flex-grid'>
                {shoot ?
                    <div className='col'>
                        <h3>Shoot</h3> 
                        <p>Date: {API.parseDate(shoot.date)}</p>
                        <p>Time:{new Date(shoot.time).toTimeString()}</p>
                        <p>Location:{shoot.location}</p>
                        <p>Pay: £{shoot.pay}</p>
                        <h4>Models</h4>

                        <div className='flex-grid-image'>
                        {getShootModels(job, models).map(model =>
                        <div className='col-img'>
                            <Image src={images[`${model.image1}`]} height={160} width={120} alt={model.name} className='gridImage' />
                            
                            {model.name}
                        </div>
                        )}
                        </div>
                    </div>
                    :
                    <div>{newShoot ? 
                        <div><a onClick={this.newShootToggle}><p>cancel</p></a>
                         <NewShoot update={update} close={this.newShootToggle} addShoot={this.renderShoot} models={casting ? getCastingModels(job, models) : models} job={job} agent={job.agent} /> </div>
                        :
                         <a onClick={this.newShootToggle}><p>add shoot</p></a>
                         }
                         </div>

                    }
                  
                    {casting ?
                    <div className='col'>
                        <h3>Casting</h3>
                        <p>{API.parseDate(casting.date)}</p>
                        <p>Call time:{new Date(casting.time).toTimeString()}</p>
                        <p>Location: {casting.location}</p>
                        <p>Details:{casting.details}</p>
                        <p>Models</p>
                        <div className="flex-grid-image">
                            {getCastingModels(job, models).map(model =>
                                <div className='col-img'>
                                    <Image src={images[`${model.image1}`]} height={160} width={120} alt={model.name} className='gridImage' />
                                    {model.name}
                            </div>
                        )}
                        </div>
                         </div>
                        :
                        <div>{newCasting ? 
                            <div><a onClick={this.newCastingToggle}><p>cancel</p></a>
                             <NewCasting update={update} close={this.newCastingToggle} addCasting={this.renderCasting} models={models} job={job} agent={job.agent} /> </div>
                            :
                             <a onClick={this.newCastingToggle}><p>/add casting</p></a>
                             }
                            </div>
                
                        }
                        </div>
                </div>   
                
            )   
        }
  
    }

export default Job