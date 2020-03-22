import React, {useState} from 'react';
import { Grid, AppBar, Tabs, Tab} from '@material-ui/core'
import EnforcerPage from './EnforcerPage';
import AdminPage from './AdminPage';

const RootPage = () => {

    const [ selectedTab, setSelectedTab ] = useState(1)

    return (
      <div>
        <AppBar position='absolute'>      
          <Tabs value={selectedTab} onChange={(event, newValue) => {setSelectedTab(newValue)}}>
            <Tab label="Enforcer"/>
            <Tab label="Admin"/>
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
        </Grid>
        {/* </main> */}
      </div>
    )
}

export default RootPage