import React from 'react'
import Model from './Model';
import { Link, withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';



const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
     
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  })

  
   const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../images', true, /^\.\/.*\.(jpg|png|gif)$/))
   
const ModelList = ({models}) => {

  
  
const renderModels =

    <div className={'root'}>
      <GridList cellHeight={'180'} className={'gridList'}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        
        </GridListTile>
        
            {Object.keys(models).map(modelID => (
          <GridListTile key={models[modelID].id}>
          
            <img src={images[`${models[modelID].image1}`]} alt={models[modelID].name} />
            
            <Link key={models[modelID]} to= {`agent-dashboard/models/${modelID}`}>
            <GridListTileBar
              title={models[modelID].name}
              subtitle={<span> {models[modelID].location}</span>}
              actionIcon={
                <IconButton className={'icon'}>
                
                </IconButton>
              }
            /></Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  


  return (<div>{renderModels}</div>)
            }

// TitlebarGridList.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default  withRouter(ModelList)