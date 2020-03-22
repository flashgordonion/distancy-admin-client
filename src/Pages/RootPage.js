import React, {useState} from 'react';
import { Grid, AppBar, Tabs, Tab} from '@material-ui/core'
import EnforcerPage from './EnforcerPage';
import AdminPage from './AdminPage';

const RootPage = () => {

    const [ selectedTab, setSelectedTab ] = useState(0)

    return (
        <Grid>

        
          <AppBar position="static">
            
            <Tabs value={selectedTab} onChange={(event, newValue) => {setSelectedTab(newValue)}}>
              <Tab label="Enforcer"/>
              <Tab label="Admin"/>
            </Tabs>
            
          </AppBar>
          {
            selectedTab === 0 &&
            <Grid>
            <EnforcerPage/>
          </Grid>
          }
          <Grid hidden={selectedTab !== 1}>
            <AdminPage/>
          </Grid>
        </Grid>
    )
}

export default RootPage