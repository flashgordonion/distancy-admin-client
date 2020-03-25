import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';


const ReservationSlot = (props) => {

  return (
    <Grid container direction='row' spacing={1} alignItems="center">
        <Grid item>
            <Typography>10:15 - 10:30</Typography>
        </Grid>
        <Grid item>
            <Typography>Slots Open: 3/10</Typography>
        </Grid>
        <Grid item>
            <Button>Reserve</Button>    
        </Grid>
    </Grid>
  )
}

export default ReservationSlot