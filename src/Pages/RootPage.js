import React, {useState} from 'react';
import { Grid, AppBar, Tabs, Tab} from '@material-ui/core'
import EnforcerPage from './EnforcerPage';
import AdminPage from './AdminPage';
<<<<<<< HEAD
import CustomerPage from './CustomerPage';

import Footer from '../Components/Footer.js';

const RootPage = () => {

  const [ selectedTab, setSelectedTab ] = useState(2)

  return (
    <Grid>
      <AppBar position='absolute'>      
        <Tabs value={selectedTab} onChange={(event, newValue) => {setSelectedTab(newValue)}}>
          <Tab label="Enforcer"/>
          <Tab label="Admin"/>
          <Tab label="Customer"/>
        </Tabs>
      </AppBar>
      {/* <main> */}
      <Grid container style={{marginTop: '60px'}} justify="center">
        { selectedTab === 0 &&
          <Grid item>
            <EnforcerPage/>
          </Grid>
        }
        { selectedTab === 1 &&
          <Grid item>
            <AdminPage/>
          </Grid> 
        }
        { selectedTab === 2 &&
          <Grid item>
            <CustomerPage/>
          </Grid> 
        }
      </Grid>
      {/* </main> */}

      <Footer/>
    </Grid>
  )
=======
import LoginPage from './LoginPage';

const RootPage = () => {

    const [ selectedTab, setSelectedTab ] = useState(0)

    return (
      <div>
        <AppBar position='absolute'>      
          <Tabs value={selectedTab} onChange={(event, newValue) => {setSelectedTab(newValue)}}>
            <Tab label="Login"/>
            <Tab label="Enforcer"/>
            <Tab label="Admin"/>
          </Tabs>
        </AppBar>
        {/* <main> */}
        <Grid container style={{marginTop: '60px'}} justify="center">
          { selectedTab === 0 &&
            <Grid item>
              <LoginPage/>
            </Grid>
          }
          { selectedTab === 1 &&
            <Grid item>
              <EnforcerPage/>
            </Grid>
          }
          { selectedTab === 2 &&
            <Grid item>
              <AdminPage/>
            </Grid> 
          }
        </Grid>
        {/* </main> */}
      </div>
    )
>>>>>>> dev
}

export default RootPage