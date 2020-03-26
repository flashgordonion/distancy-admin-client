import React from 'react';
import { AppBar, Typography, Grid, Container} from '@material-ui/core'
import EnforcerPage from './EnforcerPage';
import AdminPage from './AdminPage';
import LoginPage from './LoginPage';
import ReservationPage from './ReservationPage'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import GMap from './Map';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const RootPage = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        className={classes.root}
        position='static'
      >
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
      <Container>
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
        {/* <GMap/> */}
      </Container>
    </div>
  )
}

export default RootPage