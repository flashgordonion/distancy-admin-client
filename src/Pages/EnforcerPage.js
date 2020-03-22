import React, { useState } from 'react';
import { Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const EnforcerPage = (props) => {
  let [count, setCount] = useState(0);

  function handlePlusClick() {
    setCount(count + 1);
  }

  function handleMinusClick() {
    setCount(count - 1);
  }

  return (
    <Grid container={true} direction='column' align='left'>
      TODO - EnforcerPage
      <Grid item={true}>
        <Fab
          onClick={handlePlusClick}
          color="primary" 
          aria-label="add"
        >
          <AddIcon/>
        </Fab> 
        Walk-in
      </Grid>
      <Grid item={true}>
      <Fab 
        onClick={handlePlusClick} 
        color="primary" 
        aria-label="add"
      >
        <AddIcon/>
      </Fab> Reserved
      </Grid>
      <Grid item={true}>
        <Fab 
          onClick={handleMinusClick} 
          color="primary" 
          aria-label="add"
        >
        <AddIcon/>
      </Fab> Exit
      Count: {count}/50
      </Grid>
    </Grid>
  )
}

export default EnforcerPage