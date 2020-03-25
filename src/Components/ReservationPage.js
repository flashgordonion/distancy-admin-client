import React, {useState} from 'react';
import { Grid, Container, Card, CardContent, CardHeader} from '@material-ui/core';
import StoreSummary from './StoreSummary';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import ReservationSlot from './ReservationSlots';
import moment from 'moment'


const ReservationPage = (props) => {
    
    const [searchDateTime, setSearchDateTime] = useState(moment())

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
                            <Grid container spacing={1}>
                                <Grid item>
                                <KeyboardDateTimePicker
                                    variant="inline"
                                    label="Search"
                                    ampm={true}
                                    value={searchDateTime}
                                    onChange={setSearchDateTime}
                                    // onError={console.log}
                                    disablePast
                                    format="YYYY/MM/DD HH:mm"
                                />  
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {
                    [1,2,3,4].map( (item) => {
                        return (
                            <Grid item key={item}><Card><CardContent><ReservationSlot  /></CardContent></Card></Grid>)
                    })
                }
                
            </Grid>
        </Container>
    )
}

export default ReservationPage