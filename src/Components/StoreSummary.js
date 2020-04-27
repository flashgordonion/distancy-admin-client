import React, { useContext } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CustomerStore from '../Contexts/CustomerStore';

import Map from './Map';

const StoreSummary = ({store_name, street_address, city, state, zip_code, coords, store_lat, store_lon, ...props}) => {

  const linksComingFromSomewhere = [
    // store locations as objects here
    {},
    {},
    {},
    {}
  ]
  

  const link = {
    coords: { lat: store_lat, lng: store_lon }, // required: latitude & longitude at which to display the marker
    title: `store_name, street_address, city, state, zip_code`, // optional
    url: `https://wikipedia.org/wiki/Life,_the_Universe_and_Everything`, // optional
  }
  

  const addMarkers = (map, links) => {
    links.forEach((link, index) => {
      console.log(`adding markers ${store_lat}`);
      const marker = new window.google.maps.Marker({
        map,
        position: { lat: store_lat, lng: store_lon },
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

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        // maps label/icon for expandIcon?
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{store_name} {`${street_address}, ${city}, ${state}, ${zip_code}`}</Typography>
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