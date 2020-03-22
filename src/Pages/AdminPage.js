import React, { useState } from 'react';
import { Grid, TextField, Button, Paper } from '@material-ui/core';
import { KeyboardTimePicker } from '@material-ui/pickers';


const AdminPage = (props) => {

  const [state, setState] = useState({
    customerCapacity: 0,
    reservationSlots: 0,
    openingTime: new Date(),
    closingTime: new Date(),
    timeslotDuration: 15
  })

  return (
    <Paper>
    <Grid
      container
      direction='column' 
    >
      <Grid item>
        <Grid container spacing={3}>
          <Grid item>
            <KeyboardTimePicker 
              autoOk 
              label="Opening Time" 
              value={state.openingTime} 
              onChange={ openingTime => setState({...state, openingTime})} />
          </Grid>
          <Grid item>
            <KeyboardTimePicker 
              autoOk 
              label="Closing Time" 
              value={state.closingTime} 
              onChange={ closingTime => setState({...state, closingTime})} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <TextField 
          label="Customer Capacity"
          type="number"
          value={state.customerCapacity} 
          onChange={ event => setState({...state, customerCapacity: event.target.value})} />
      </Grid>
      <Grid item>
        <Grid container spacing={3}>
          <Grid item>
            <TextField 
              label="Reservation Slots" 
              type="number"
              value={state.reservationSlots} 
              onChange={ event => setState({...state, reservationSlots: event.target.value})} />
          </Grid>
          <Grid item>
          <TextField 
            label="Reservation Duration" 
            type="number"
            value={state.timeslotDuration} 
            onChange={ event => setState({...state, timeslotDuration: event.target.value})} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button >
          Save
        </Button>
      </Grid>
    </Grid>
    </Paper>
  )
}

export default AdminPage
