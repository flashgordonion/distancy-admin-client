import React, {useState, useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../Styles/Styles';
import Container from '@material-ui/core/Container';
import AuthorizationContext from '../Contexts/AuthorizationStore'
import { Grid } from '@material-ui/core';

const SignUpPage = () => {
  const classes = useStyles();
  const context = useContext(AuthorizationContext)

  const [state, setState] = useState({email:'', password: '', passwordDuplicate: ''})
  const [passWordMismatch, setPassWordMismatch] = useState(null)

  // Clear the warning for usability when forms are edited
  useEffect( () => {
    setPassWordMismatch(null)
  }, [state])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">Create Account</Typography>
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={state.passwordDuplicate}
            onChange={event => setState({...state, passwordDuplicate : event.target.value})}
            name="password"
            label="Reenter Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            fullWidth
            onClick={()=>{
              if (state.passwordDuplicate !== state.password) {
                setPassWordMismatch(true)
              }
              else {
                context.signup(state.email, state.password)
              }
            }}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Account
          </Button>
          { passWordMismatch === true &&
            <Grid item>
              <Typography>
                Passwords don't match.
              </Typography>
            </Grid>
          }
          
      </div>
    </Container>
  );
}

export default SignUpPage