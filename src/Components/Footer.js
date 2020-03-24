import React,  { Component } from 'react';
import { Grid, TextField, Button, Paper } from '@material-ui/core';

const Footer = () => {

  return (
    <Grid container
      style={{marginTop: '0px'}} 
      justify="center"
    >
    <Grid item>
      Currently v0.0.1. Released under the
      <a 
        class="rootFooter" 
        href="https://github.com/flashgordonion/distancy-web-client/blob/master/LICENSE.txt"
      >
        GNU General Public License v3.0
      </a>
    </Grid>
    <Grid item>
      Copyright © 2020 Distancy
    </Grid>
  </Grid>
  );
}

export default Footer;