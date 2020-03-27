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
          <Container maxWidth="xl">
          <Grid container spacing={1} justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant='h3' >
                Distancy
              </Typography>
            </Grid>
            <Grid item>

            </Grid>
            {/* <Grid item style={{marginRight: "16px"}}> */}
            <Grid item>
              <Typography >
                Get your groceries
              </Typography>
              <Typography >
                Keep your space
              </Typography>
            </Grid>
          </Grid>    
          </Container>
          
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