import React from 'react';
import 'typeface-roboto';
import './App.css';
import RootPage from './Pages/RootPage';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

function App() {

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div>
        <RootPage />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
