import React, { useState } from 'react';
import { Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const PEOPLE_MAX = 50;

const EnforcerPage = (props) => {
  let [count, setCount] = useState(0);

  function handlePlusClick() {
    if (count < PEOPLE_MAX) {
      setCount(count + 1);
    }
  }

  function handleMinusClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <Grid
      container
      direction='column' 
      align='left'
      spacing={3}
    >
      TODO - EnforcerPage
      <Grid item>
        <Fab
          onClick={handlePlusClick}
          color="primary" 
          aria-label="add"
        >
          <AddIcon/>
        </Fab> 
        Walk-in
      </Grid>
      <Grid item>
        <Fab 
          onClick={handlePlusClick} 
          color="primary" 
          aria-label="add"
        >
          <AddIcon/>
        </Fab> 
        Reserved
      </Grid>
      <Grid item>
        <Fab 
          onClick={handleMinusClick} 
          color="primary" 
          aria-label="remove"
        >
          <RemoveIcon/>
        </Fab> 
        Exit
      </Grid>
      <Grid item>
        Count: {count}/50
      </Grid>
    </Grid>
  )
}

export default EnforcerPage