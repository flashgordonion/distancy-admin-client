import React, {useContext} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import moment from 'moment'
import CustomerStore from '../Contexts/CustomerStore';

const ReservationSlot = ({ slot, ...props }) => {

  const {reserveSlot} = useContext(CustomerStore)

  return (
    <Grid container direction='row' spacing={1} alignItems="center">
      <Grid 
        item
        style={{ backgroundColor: coral }}
      >
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
        <Button
          onClick = {() => {reserveSlot(slot.arrive_after, slot.arrive_before)}}
        >
          Reserve
        </Button>
      </Grid>
    </Grid>
  )
}

export default ReservationSlot