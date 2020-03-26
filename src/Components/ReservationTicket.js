import React, { useContext, useState } from 'react';
import { CardContent, Card, CardHeader, Grid } from '@material-ui/core';
import CustomerStore from '../Contexts/CustomerStore'
import moment from 'moment'


const ReservationTicket = ({slot_time, slot_time_end, ...props}) => {

	return (
		<Card>
			<CardHeader
				title="Reservation Ticket"
			/>
			<CardContent>
				<Grid container direction='column'></Grid>
				<Grid item>Arrive Between</Grid>
				<Grid item>{moment(slot_time).format('LT').toString()}</Grid>
				<Grid item>{moment(slot_time_end).format('LT').toString()}</Grid>
			</CardContent>
		</Card>
	)
}

export default ReservationTicket