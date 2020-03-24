import React, { useState } from 'react';
import axios from 'axios';


const Context = React.createContext()

export const AuthorizationStore = (props) => {

    const baseState = {
        username: "",
        token: "",
        is_authenticated: false,
        authorizations: []
    }
    const [state, setState] = useState(baseState)

    // TODO - send validate login 

    const signup = (email, password) => {

    }

    const login = (email, password) => {
        console.log(email, password)
    }

    const logout = () => {
        console.log("logout")
    }

    return (
        <Context.Provider value = {{
            ...state,
            login,
            logout,
            signup
        }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;
