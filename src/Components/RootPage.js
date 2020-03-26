import React from 'react';
import { AppBar, Typography, Grid, Container} from '@material-ui/core'
import EnforcerPage from './EnforcerPage';
import AdminPage from './AdminPage';
import LoginPage from './LoginPage';
import ReservationPage from './ReservationPage'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


const RootPage = () => {

    return (
      <div>
        <AppBar position='static'>  
          <Grid container spacing={1} style={{margin: "8px"}} justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant='h3' >
                Distancy
              </Typography>
            </Grid>
            <Grid item>

            </Grid>
            <Grid item style={{marginRight: "16px"}}>
              <Typography >
                Get your groceries
              </Typography>
              <Typography >
                with some space
              </Typography>
            </Grid>
          </Grid>    
          
          
        </AppBar>
        <Container style={{marginTop: '8px'}}>
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
        </Container>
      </div>
    )
}

export default RootPage