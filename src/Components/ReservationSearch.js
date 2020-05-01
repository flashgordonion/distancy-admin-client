import React, { useState, useContext, useEffect } from 'react';
import { Grid, CardHeader, MenuItem, TextField, Card, CardContent, } from '@material-ui/core';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import moment from 'moment'

import CustomerStore from '../Contexts/CustomerStore';

const ReservationSearch = (props) => {
  const customerContext = useContext(CustomerStore)

  const [searchParams, setSearchParams] = useState({
    "searchDateTime": moment(),
    "searchOffset": 3
  })

  const renderSearch = () => {
    customerContext.findSlots(searchParams.searchDateTime, searchParams.searchOffset)
  }

  useEffect(() => {
      renderSearch();
    },
    [searchParams]
  )

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
                  onChange={searchDateTime => setSearchParams({ ...searchParams, searchDateTime })}
                  disablePast
                  openTo='hours'
                  format="MM/DD h:mm A"
                  maxDate={moment().add(1, 'days')}
                  maxDateMessage="Reservations can only be made one day in advance."
                  minutesStep={5}
                />
              </Grid>
              <Grid item>

                <TextField
                  label="Time"
                  select
                  value={searchParams.searchOffset}
                  onChange={(event) => {
                      setSearchParams({ ...searchParams, searchOffset: event.target.value })
                      // renderSearch()
                  }}
                >
                  {[1, 2, 3, 4]
                    .map((item) => {
                      return(
                        <MenuItem 
                          key={item} 
                          value={item}
                        >
                          {item} Hours
                        </MenuItem>
                        )
                    })
                  }
                </TextField>
              </Grid>

            </Grid>
          </Grid>
          <Grid item>
            {/* <Button
              onClick={renderSearch}
            >
              Search
            </Button> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ReservationSearch