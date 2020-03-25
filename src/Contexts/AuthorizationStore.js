import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ENV_CONFIG } from '../Config/config'
import Cookie from 'js-cookie'


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
        authorizations: []
    }
    const [state, setState] = useState(baseState)
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    const storeToken = (token) => {
        Cookie.set('distancy_token', token, { expires: 365})
    }

    const fetchValidateToken = async () => {
        // Retrieve token cookie
        let storedToken = Cookie.get('distancy_token')
        
        if (storedToken) {
            setIsAuthenticating(true)
            // Async validate
            try {
                let resp = await axios.get(
                    `${ENV_CONFIG['BACKEND_URL']}/api-token-verification/`,
                    {
                        "headers": {'Authorization': `Token ${storedToken}`}
                    }
                )
                setState({
                    email: resp.data['username'],
                    token: storedToken,
                    isAuthenticated: true,
                    authorizations: []
                })
            } catch (error) {
                // Remove invalid token
                if (error?.response?.status === 401) {
                    Cookie.remove('distancy_token')
                }
            } finally {
                setIsAuthenticating(false)
            }
        }
    }

    const signup = async (email, password) => {
        
    }

    const login = async (email, password) => {
        
        try {
            setIsAuthenticating(true)
            let resp = await axios.post(
                `${ENV_CONFIG['BACKEND_URL']}/api-token-auth/`,
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
            // TODO - display login problem
            console.log(error.response.data)
        }
        finally {
            setIsAuthenticating(false)
        }
    }

    const logout = () => {
        console.log("logout")
    }

    return (
        <Context.Provider value = {{
            ...state,
            isAuthenticating,
            login,
            logout,
            signup
        }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;
