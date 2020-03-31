import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../Styles/Styles';
import Container from '@material-ui/core/Container';
import AuthorizationContext from '../Contexts/AuthorizationStore'

const LoginPage = () => {
  const classes = useStyles();
  const context = useContext(AuthorizationContext)

  const [state, setState] = useState({email:'', password: ''})


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">Log in</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={state.email}
            onChange={event => setState({...state, email : event.target.value})}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={state.password}
            onChange={event => setState({...state, password : event.target.value})}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            // type="submit"
            fullWidth
            onClick={()=>{context.login(state.email, state.password)}}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signup">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}

export default LoginPage