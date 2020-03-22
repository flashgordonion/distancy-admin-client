import React, { Fragment, useState } from 'react';
import { Grid, Fab } from '@material-ui/core';
import { TimePicker } from '@material-ui/pickers';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const PEOPLE_MAX = 50;
const PERCENTAGE_RESERVATION = 50;
const TIME_SLOT_LENGTH = 30;

const AdminPage = (props) => {
  let [inStoreCapacity, setInStoreCapacity] = useState(PEOPLE_MAX);
  let [percentageReservation, setPercentageReservation] = useState(PERCENTAGE_RESERVATION);
  let [selectedDate, handleDateChange] = useState(new Date());

  function handleInStoreCapacityEditClick() {
    setInStoreCapacity(0);
  }
  
  function handleInStoreCapacityIncreaseClick() {
    if (inStoreCapacity < PEOPLE_MAX) {
      setInStoreCapacity(inStoreCapacity + 1);
    }
  }
  
  function handleInStoreCapacityDecreaseClick() {
    if (inStoreCapacity > 0) {
      setInStoreCapacity(inStoreCapacity - 1);
    }
  }

  function handlePercentageReservationEditClick() {
    setPercentageReservation(0);
  }

  return (
    <Grid
      container
      direction='column' 
      align='left'
      spacing={3}
    >
      TODO - AdminPage
      <Grid item>
        Open hour, close hour
        {/* https://material-ui-pickers.dev/demo/timepicker */}
        {/* <TimePicker autoOk label="12 hours" value={selectedDate} onChange={handleDateChange} /> */}
      </Grid>
      <Grid item>
        In store capacity: {inStoreCapacity}  
        <Fab 
          onClick={handleInStoreCapacityEditClick}
          color="secondary" 
          aria-label="edit"
        >
          < EditIcon />
        </Fab>
        <Fab
          onClick={handleInStoreCapacityIncreaseClick}
          color="primary" 
          aria-label="add"
        >
          <AddIcon/>
        </Fab> 
        <Fab
          onClick={handleInStoreCapacityDecreaseClick}
          color="primary" 
          aria-label="remove"
        >
          <RemoveIcon/>
        </Fab> 
      </Grid>
      <Grid item>
        Percent saved for reservation: {percentageReservation}%
        <Fab 
          onClick={handlePercentageReservationEditClick}
          color="secondary" 
          aria-label="edit"
        >
          < EditIcon />
        </Fab>
      </Grid>
      <Grid item>
        TIme slot length: {TIME_SLOT_LENGTH}
      </Grid>
      <Grid item>
        
      </Grid>
    </Grid>
  )
}

export default AdminPage
