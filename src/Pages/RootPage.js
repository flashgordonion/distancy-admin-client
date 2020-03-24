import React, {useState} from 'react';
import { Grid, AppBar, Tabs, Tab} from '@material-ui/core'
import EnforcerPage from './EnforcerPage';
import AdminPage from './AdminPage';
import CustomerPage from './CustomerPage';

// Will clean up imports if we keep bottom buttons
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';

const RootPage = () => {

    const [ selectedTab, setSelectedTab ] = useState(2)

    const useStyles = makeStyles({
      root: {
        width: 500,
      },
    });
    const [value, setValue] = useState(0);

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

        <BottomNavigation 
          style={{marginTop: '30px'}} 
          justify="center"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels={true}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
        <Grid container
          style={{marginTop: '0px'}} 
          justify="center"
        >
          <span>
            Currently v0.0.1. Released under the
            <a 
              class="rootFooter" 
              href="https://github.com/flashgordonion/distancy-web-client/blob/master/LICENSE.txt"
            >
              GNU General Public License v3.0
            </a>
          </span>
            Copyright © 2020 Distancy
        </Grid>
      </Grid>
    )
}

export default RootPage