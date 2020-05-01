import React, { useContext } from 'react';
import { Grid, Container, Card, CardContent, CircularProgress } from '@material-ui/core';
import StoreSummary from './StoreSummary';

import ReservationSlot from './ReservationSlots';
import ReservationSearch from './ReservationSearch';
import ReservationTicket from './ReservationTicket';

import CustomerStore from '../Contexts/CustomerStore';


const ReservationPage = (props) => {
  const customerContext = useContext(CustomerStore)

  const renderTicket = () => {
    let ticket 

    if ( customerContext.loadingComingRes === true) {
      ticket = (
        <Grid item container justify="center">
          <CircularProgress/>
        </Grid>
      )
    }
    else {
      ticket = (
        <Grid item>
          {customerContext.comingRes &&
            <ReservationTicket {...customerContext.comingRes} />
          }
        </Grid>
      )
    }

    return ticket
  }

  const renderSearch = () => {

    let slots;

    if (customerContext.loadingOpenSlots === true) {
      slots = (
        <Grid item container justify="center">
          <CircularProgress/>
        </Grid>
      )
    }
    else {
      slots = customerContext.openSlots.map((item, idx) => {
        return (
          <Grid item key={idx}><Card><CardContent><ReservationSlot slot={item} /></CardContent></Card></Grid>)
      })
    }

    return (
      <Grid container spacing={1}>
        <Grid item>
          <ReservationSearch />
        </Grid>
        { slots }
      </Grid>
    )
  }

  return (
    <Container maxWidth='md'>
      <Grid container direction='column' spacing={2}>

        {customerContext.storeInfo &&
          <Grid item>

            <StoreSummary {...customerContext.storeInfo} />
            <StoreSummary {...customerContext.storeLookup} />
          </Grid>
        }
        { renderTicket() }
        { renderSearch() }

      </Grid>
    </Container>

  )
}

export default ReservationPage