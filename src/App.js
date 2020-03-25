import React from 'react';
import 'typeface-roboto';
import './App.css';
import RootPage from './Components/RootPage';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { AuthorizationStore } from './Contexts/AuthorizationStore'
import MomentUtils from '@date-io/moment';


function App() {

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <AuthorizationStore>
        <div>
          <RootPage />
        </div>
      </AuthorizationStore>
    </MuiPickersUtilsProvider>
  );
}

export default App;
