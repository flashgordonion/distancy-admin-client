import React from 'react';
import { AppBar, Typography, Grid} from '@material-ui/core'
import EnforcerPage from './EnforcerPage';
import AdminPage from './AdminPage';
import LoginPage from './LoginPage';
import ReservationPage from './ReservationPage'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


const RootPage = () => {

    return (
      <div>
        <AppBar position='static'>  
          <Grid container>
            <Grid item>
              <Typography>
                Distancy
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Keeping people apart
              </Typography>
            </Grid>
          </Grid>    
          
          
        </AppBar>
        <BrowserRouter basename="/">
          <Switch>
            <Route path="/enforcer">
              <EnforcerPage/>
            </Route>
            <Route path="/admin">
              <AdminPage/>
            </Route>
            <Route path="/login">
              <LoginPage/>
            </Route>
            
            <Route exact path="/">
              <ReservationPage/>
            </Route>
            <Route render={() => <Redirect to="/"/>} />
          </Switch>
        </BrowserRouter>
      </div>
    )
}

export default RootPage