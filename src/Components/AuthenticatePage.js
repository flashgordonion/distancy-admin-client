import React, { useContext } from 'react';
import AuthorizationStore from '../Contexts/AuthorizationStore';
import {CircularProgress, Grid} from '@material-ui/core'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';


const AuthenticatePage = ({children, ...props}) => {
  const authContext = useContext(AuthorizationStore)

  const renderApp = () => {
    if (authContext.isAuthenticating) {
      return (
        <Grid container justify="center">
          <CircularProgress/>
        </Grid>
      )
    }
    else if (authContext.isAuthenticated === false) {
      return (
        <BrowserRouter basename="/">
          <Switch>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/signup">
              <SignUpPage/>
            </Route>
            <Route render={() => <Redirect to="/login"/>} />
          </Switch>
        </BrowserRouter>
      )
    }
    return(
      <div>
        {children}
      </div>
    )
  }

  return (
    <div>
      { renderApp() }
    </div>
  )
}

export default AuthenticatePage