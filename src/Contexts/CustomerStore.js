import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { ENV_CONFIG } from '../Config/config'


const Context = React.createContext()

export const CustomerStore = (props) => {

    const [state, setState] = useState({})
    const [ticket, setTicket] = useState({})
    const [searchParams, setSearchParams] = useState({})
    const [openSlots, getOpenSlots] = useState({})

    // We want to ensure search is reset on page reload
    useEffect( () => {

    }, [])

    const findSlots = async (datetime) => {

    }
    
    return (
        <Context.Provider value = {{
            ...state,
        }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;
