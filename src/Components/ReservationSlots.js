import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import moment from 'moment'


const ReservationSlot = ({slot, ...props}) => {

  return (
    <Grid container direction='row' spacing={1} alignItems="center">
      <Grid item>
        <TextField
          label='Slots Available'
          value={`${slot.maximum - slot.taken}/${slot.maximum}`}
          disabled
        />
      </Grid>
      <Grid item>
        <TextField
          label='Arrive between'
          value={`${moment(slot.arrive_after).format('LT').toString()} - ${moment(slot.arrive_before).format('LT').toString()}`}
          disabled
        />
      </Grid>
      
      <Grid item>
          <Button>Reserve</Button>    
      </Grid>
    </Grid>
  )
}

export default ReservationSlot