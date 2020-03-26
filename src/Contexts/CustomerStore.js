import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { ENV_CONFIG } from '../Config/config';
import AuthorizationContext from './AuthorizationStore';

const Context = React.createContext()

export const CustomerStore = (props) => {

    const authContext = useContext(AuthorizationContext)

    const [ticket, setTicket] = useState({})
    const [openSlots, setOpenSlots] = useState([])

    // We want to ensure search is reset on page reload
    useEffect( () => {

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
            console.log(resp.data)
            setOpenSlots(resp.data['slots'])
        } catch (error) {
            // Remove invalid token
            if (error?.response?.status === 401) {
                
            }
            //TODO - alert to unexpected response
        } finally {
        }
    }
    
    return (
        <Context.Provider value = {{
            openSlots,
            findSlots
        }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;
