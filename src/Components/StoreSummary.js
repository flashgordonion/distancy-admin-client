import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Map from './Map';


const linksComingFromSomewhere = [
  // store locations as objects here
  {
  }
]

const link = {
  coords: { lat: 34.030061, lng: -118.421488 }, // required: latitude & longitude at which to display the marker
  title: `store_name, street_address, city, state, zip_code`, // optional
  url: `https://wikipedia.org/wiki/Life,_the_Universe_and_Everything`, // optional
}

const addMarkers = (map, links) => {
  links.forEach((link, index) => {
    console.log('adding markers');
    const marker = new window.google.maps.Marker({
      map,
      position: { lat: 34.030061, lng: -118.421488 },
      // position: link.coords,
      label: `${index + 1}`,
      title: link.title,
    })
    marker.addListener(`click`, () => {
      window.location.href = link.url
    })
  })
}

const mapProps = {
  options: { center: { lat: 34.030061, lng: -118.421488 }, zoom: 15 },
  onMount: addMarkers,
  onMountProps: linksComingFromSomewhere, 
}

const StoreSummary = ({store_name, street_address, city, state, zip_code, coords, ...props}) => {

  return (
    

    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        // maps label/icon for expandIcon?
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{store_name} {`${street_address}, ${city}, ${state}, ${zip_code}, ${coords}`}</Typography>
      </ExpansionPanelSummary>
      <Map {...mapProps}/>
      <ExpansionPanelDetails>
        <Typography>
          Store hours
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>        
  )
}

export default StoreSummary