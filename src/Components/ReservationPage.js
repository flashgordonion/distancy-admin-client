import React from 'react';
import { Grid, Container, Typography} from '@material-ui/core';


const ReservationPage = (props) => {

  return (
    <Container maxWidth='md'>
        <Grid container direction='column'>
            <Grid item>
                <Typography>Store info</Typography>
            </Grid>
            <Grid item>
                <Typography>Date Filter</Typography>
            </Grid>
            <Grid item>
                <Typography>Open Slot</Typography>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ReservationPage