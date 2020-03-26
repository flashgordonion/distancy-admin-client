import React, {useState, useContext } from 'react';
import { Grid, Button, CardHeader, MenuItem, TextField, Card, CardContent, } from '@material-ui/core';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import moment from 'moment'
import CustomerStore from '../Contexts/CustomerStore';

const ReservationSearch = (props) => {
  const customerContext = useContext(CustomerStore)

  const [searchParams, setSearchParams] = useState({
    "searchDateTime": moment(),
    "searchOffset": 3
  })

  return (
    <Card>
      <CardHeader 
          title="Find open times"
      />
      <CardContent>
          <Grid container direction='column' spacing={1}>
              <Grid item>
                  <Grid container spacing={1}>
                      <Grid item>
                          <KeyboardDateTimePicker
                              ampm={true}
                              label="Search From"
                              value={searchParams.searchDateTime}
                              onChange={searchDateTime => setSearchParams({...searchParams, searchDateTime})}
                              disablePast
                              openTo='hours'
                              format="MM/DD h:mm A"
                              minutesStep={5}
                          />
                      </Grid>
                      <Grid item>
                          
                          <TextField
                              labelId="hours-label"
                              label="Time"
                              select
                              value={searchParams.searchOffset}
                              onChange={ event => setSearchParams({...searchParams, searchOffset: event.target.value})}
                          >
                              {[1,2,3,4].map( item => <MenuItem value={item}>{item} Hours</MenuItem>)}
                          </TextField>
                      </Grid>
                      
                  </Grid>
              </Grid>
              <Grid item>
                  <Button
                      onClick={
                          () => customerContext.findSlots(searchParams.searchDateTime, searchParams.searchOffset)
                      }
                  >
                      Search
                  </Button>
              </Grid>
          </Grid>
      </CardContent>
    </Card>
  )
}

export default ReservationSearch