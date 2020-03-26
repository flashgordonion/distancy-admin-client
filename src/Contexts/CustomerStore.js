import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { ENV_CONFIG } from '../Config/config';
import AuthorizationContext from './AuthorizationStore';

const Context = React.createContext()

export const CustomerStore = (props) => {

    const authContext = useContext(AuthorizationContext)

    const [openSlots, setOpenSlots] = useState([])
    const [storeInfo, setStoreInfo] = useState(null)
    // We want to ensure search is reset on page reload
    useEffect( () => {

    }, [])

    useEffect( () => { //TODO - support 
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
                    "headers": {'Authorization': `Token ${authContext.token}`}
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
    
    return (
        <Context.Provider value = {{
            storeInfo,
            openSlots,
            findSlots
        }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;
