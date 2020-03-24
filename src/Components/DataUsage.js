import React from 'react';
import { Grid } from '@material-ui/core';

const DataUsage = () => {

  return (
    <Grid container
      style={{marginTop: '30px'}} 
      justify="center"
    >
    <Grid item>
      Data Usage info goes here. CCPA might not apply to us.
    </Grid>
  </Grid>
  );
}

export default DataUsage;