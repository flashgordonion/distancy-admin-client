import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ENV_CONFIG } from '../Config/config';
import AuthorizationContext from './AuthorizationStore';
import moment from 'moment';

const Context = React.createContext()

export const CustomerStore = (props) => {

	const authContext = useContext(AuthorizationContext)

	const [openSlots, setOpenSlots] = useState([])
	const [loadingOpenSlots, setLoadingOpenSlots] = useState(false)
	const [storeInfo, setStoreInfo] = useState(null)
	const [loadingStoreInfo, setLoadingStoreInfo] = useState(false)
	const [comingRes, setComingRes] = useState(null)
	const [loadingComingRes, setLoadingComingRes] = useState(false)


	// TODO - ensure we check first for upcoming reservations on page reload
	useEffect(() => {
		
		if (authContext.isAuthenticated === true) {
			getUpcomingReservation()
		}

	
	// https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook - references in depth what this warns about
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authContext.isAuthenticated])

	// We want to ensure search is reset on page reload
	useEffect(() => {

	}, [])


	useEffect(() => { //TODO - support store lookup
		setLoadingStoreInfo(true)
		setStoreInfo({
			store: 1,
			store_name: "Trader Joe's West Los Angeles",
			street_address: "10850 National Blvd", 
			city: "Los Angeles",
			state: "CA",
			zip_code: "90064",
			store_lat: "34.030061",
			store_lon: "-118.421488"
		})
		setLoadingStoreInfo(false)
	}, [])

	const findSlots = async (searchDateTime, searchOffset) => {
		setLoadingOpenSlots(true)
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
			setLoadingOpenSlots(false)
		}
	}

	/**
	 * Attempt to reserve a timeslot As the logged in user.
	 * @param {*} slotStart 
	 * @param {*} slotEnd 
	 */
	const reserveSlot = async (slotStart, slotEnd) => {
		setLoadingOpenSlots(true)
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
			setLoadingOpenSlots(false)
		}
	}

	/**
	 * Fetch the upcoming reservation (if it exists) as the current user 
	 * for the currently selected store.
	 */
	const getUpcomingReservation = async () => {
		setLoadingComingRes(true)
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
			setLoadingComingRes(false)
		}
	}

	return (
		<Context.Provider value={{
			storeInfo,
			loadingStoreInfo,
			openSlots,
			loadingOpenSlots,
			comingRes,
			loadingComingRes,
			findSlots,
			reserveSlot
		}}>
			{props.children}
		</Context.Provider>
	)

}

export default Context;
