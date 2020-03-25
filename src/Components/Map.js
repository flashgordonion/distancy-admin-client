import React from 'react';
import { Grid, Container, Card, CardContent, CardHeader} from '@material-ui/core';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export const GMap = () => {
  return (
    <Map
      // google={this.props.google}
      google
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: -1.2884,
        lng: 36.8233
      }}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpbnpIYddiS8_LEogXC7JEbg7r_5LcSuY'
})(GMap);