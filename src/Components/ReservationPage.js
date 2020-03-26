import React, {useState, useContext, useEffect} from 'react';
import { Button, Grid, Container, Card, CardContent, CardHeader, MenuItem, Select, InputLabel, TextField} from '@material-ui/core';
import StoreSummary from './StoreSummary';
import { KeyboardTimePicker, KeyboardDatePicker, KeyboardDateTimePicker } from '@material-ui/pickers';
import ReservationSlot from './ReservationSlots';
import moment from 'moment'
import CustomerStore from '../Contexts/CustomerStore';


const ReservationPage = (props) => {
    const customerContext = useContext(CustomerStore)

    // const [searchDateTime, setSearchDateTime] = useState(moment())
    // const [searchRange, setSearchRange] = useState(3)
    const [searchParams, setSearchParams] = useState({
        "searchDateTime": moment(),
        "searchOffset": 3
    })

    // TODO wait untilauthorized
    // useEffect(() => {
    //     customerContext.findSlots({...searchParams})
    // }, [searchParams])

    return (
        <Container maxWidth='md'>
            <Grid container direction='column' spacing={1}>
                <Grid item>
                    <StoreSummary/>
                </Grid>
                <Grid item>
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
                                                label="Search Time"
                                                value={searchParams.searchDateTime}
                                                onChange={searchDateTime => setSearchParams({...searchParams, searchDateTime})}
                                                onError={console.log}
                                                disablePast
                                                openTo='hours'
                                                format="MM/DD h:mm A"
                                                minutesStep={5}
                                            />
                                        </Grid>
                                        <Grid item>
                                            
                                            <TextField
                                                labelId="hours-label"
                                                label="Hours"
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
                </Grid>
                {
                    customerContext.openSlots.map( (item, idx) => {
                        return (
                            <Grid item key={idx}><Card><CardContent><ReservationSlot slot={item} /></CardContent></Card></Grid>)
                    })
                }
                
            </Grid>
        </Container>
        
    )
}

export default ReservationPage