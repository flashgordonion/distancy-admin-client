import React from 'react';
import { Grid } from '@material-ui/core';

const Footer = () => {

  return (
    <Grid container
      style={{marginTop: '0px'}} 
      justify="center"
    >
    <Grid item>
      Currently v0.0.1. Released under the
    </Grid>
    <Grid item>
      GNU General Public License v3.0
    </Grid>
    <Grid item>
      Copyright © 2020 Distancy
    </Grid>
  </Grid>
  );
}

export default Footer;