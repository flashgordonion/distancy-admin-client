import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ENV_CONFIG } from '../Config/config';
import AuthorizationContext from './AuthorizationStore';
import moment from 'moment';

const Context = React.createContext()

export const CustomerStore = (props) => {

	const authContext = useContext(AuthorizationContext)

	const [openSlots, setOpenSlots] = useState([])
	const [storeInfo, setStoreInfo] = useState(null)
	const [comingRes, setComingRes] = useState(null)
	
	// TODO - ensure we check first for upcoming reservations on page reload
	useEffect(() => {
		
		if (authContext.isAuthenticated === true) {
			getUpcomingReservation()
			console.log("Authenticated")
		}
		else {
			console.log("Not Authenticate")
		}
	}, [authContext.isAuthenticated])

	// We want to ensure search is reset on page reload
	useEffect(() => {

	}, [])

	

	useEffect(() => { //TODO - support store lookup
		setStoreInfo({
			store: 1,
			store_name: "Trader Joe's Westwood",
			street_address: "1000 Glendon Ave",
			city: "Los Angeles",
			state: "CA",
			zip_code: "90024"
		})
	}, [])

	const findSlots = async (searchDateTime, searchOffset) => {
		try {
			let resp = await axios.post(
				`${ENV_CONFIG['BACKEND_URL']}/searchReservations/`,
				{
					store_id: 1,
					search_date: searchDateTime,
					offset: searchOffset
				},
				{
					"headers": { 'Authorization': `Token ${authContext.token}` }
				}
			)
			setOpenSlots(resp.data['slots'])
		} catch (error) {
			// Remove invalid token
			console.log(error)
			//TODO - alert to unexpected response
		} finally {

		}
	}

	/**
	 * Attempt to reserve a timeslot As the logged in user.
	 * @param {*} slotStart 
	 * @param {*} slotEnd 
	 */
	const reserveSlot = async (slotStart, slotEnd) => {

		try {
			let resp = await axios.post(
				`${ENV_CONFIG['BACKEND_URL']}/reservation/`,
				{
					store: storeInfo.store,
					slot_time: slotStart,
					slot_time_end: slotEnd
				},
				{
					"headers": { 'Authorization': `Token ${authContext.token}` }
				}
			)
			setComingRes(resp.data)
		} catch (error) {
			if (error?.response?.status === 400) {
				let errorMessage = error.response.data?.slot.join('\n')
				alert(errorMessage)
			}
		} finally {

		}
	}

	/**
	 * Fetch the upcoming reservation (if it exists) as the current user 
	 * for the currently selected store.
	 */
	const getUpcomingReservation = async () => {
		try {
			let resp = await axios.get(
				`${ENV_CONFIG['BACKEND_URL']}/reservation/`,
				{
					headers: { Authorization: `Token ${authContext.token}` },
					params: { slot_time__gte: moment().toISOString()}
				}
			)
			if (resp.data.count > 0) {
				const next_res = resp.data.results.sort( (resA, resB) => resA.slot_time > resB.slot_time)[0]
				setComingRes(next_res)
			}
		} catch (error) {
			//TODO - alert to unexpected response
		} finally {
			
		}
	}

	return (
		<Context.Provider value={{
			storeInfo,
			openSlots,
			comingRes,
			findSlots,
			reserveSlot
		}}>
			{props.children}
		</Context.Provider>
	)

}

export default Context;
