import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ENV_CONFIG } from '../Config/config'
import moment from 'moment'


const Context = React.createContext()
// const AuthContext = React.createContext({})
// const AuthProvider = Context.Provider

export const AuthorizationStore = (props) => {

    // Attemt to auto-authorize on page refresh
    useEffect(() => {
        fetchValidateToken()
    }, [])

    const baseState = {
        email: "",
        token: "",
        isAuthenticated: false,
        isAuthenticating: false,
        authorizations: []
    }
    const [state, setState] = useState(baseState)

    const storeToken = (token) => {
        let expry = moment().add(365, 'days').utc().format(
            "ddd, DD MMM YYYY HH:mm:ss"
        )
        document.cookie = `distancy_token=${token}; expires=${expry}; path=/`
    }

    const fetchValidateToken = () => {
        // Retrieve token cookie
        // Async validate
        // Set logged in status if valid
    }

    const signup = async (email, password) => {
        
    }

    const login = async (email, password) => {
        try {
            let resp = await axios.post(
                ENV_CONFIG['AUTHORIZATION_URL'],
                {
                    username: email,
                    password: password
                }
            )
            let token = resp.data['token']
            storeToken(token)
            setState({
                email: email,
                token: token,
                isAuthenticated: true,
                isAuthenticating: false,
                authorizations: []
            })
        }
        catch (error) {
            console.log(error.response.data)
        }
        finally {

        }
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
