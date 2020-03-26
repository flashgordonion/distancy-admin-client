import React, { useContext } from 'react';
import { Grid, Container, Card, CardContent } from '@material-ui/core';
import StoreSummary from './StoreSummary';

import ReservationSlot from './ReservationSlots';
import ReservationSearch from './ReservationSearch';
import ReservationTicket from './ReservationTicket';

import CustomerStore from '../Contexts/CustomerStore';


const ReservationPage = (props) => {
  const customerContext = useContext(CustomerStore)

  return (
    <Container maxWidth='md'>
      <Grid container direction='column' spacing={1}>

        {customerContext.storeInfo &&
          <Grid item>
            <StoreSummary {...customerContext.storeInfo} />
          </Grid>
        }
        {customerContext.comingRes &&
          <ReservationTicket {...customerContext.comingRes} />
        }
        <Grid item>
          
        </Grid>
        <Grid item>
          <ReservationSearch />
        </Grid>
        {
          customerContext.openSlots.map((item, idx) => {
            return (
              <Grid item key={idx}><Card><CardContent><ReservationSlot slot={item} /></CardContent></Card></Grid>)
          })
        }

      </Grid>
    </Container>

  )
}

export default ReservationPage