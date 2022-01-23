import React, { useEffect, useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Box, Card, CardContent, Grid, Paper, Skeleton } from '@mui/material'
import axios from 'axios';
import Tipps from './components/Tipps';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Preloader from './components/Preloader';

function Home(props) {
  const [value, setValue] = React.useState(1);
  const [tipps, setTipps] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    let date = "20.12.2021"
    switch(value) {
      case 0:
        date = "gestern"
      break;
      case 1:
        date = "heute"
      break;
      case 2:
        date = "morgen"
      break;
    }
    setIsLoaded(true)
    axios
      .get(`http://localhost/wordpress/wp-json/wettboss-api/v1/fixtures?date=`+date)
      .then((res) => {
        setTipps(res.data);
        setIsLoaded(false)
      });
  }, [value]);

    return (
            <Box p={2} pb={5}>
              {isLoaded ? (
                <Grid container spacing={3}>
                   <Grid item xs={12} md={6} lg={4}>
                      <Preloader />
                   </Grid>
                   <Grid item xs={12} md={6} lg={4}>
                      <Preloader />
                   </Grid>
                   <Grid item xs={12} md={6} lg={4}>
                      <Preloader />
                   </Grid>                   
                </Grid>
              ) : (
                <Grid container spacing={3}>
                {tipps.map((a,i) => (
                    <Grid item xs={12} md={6} lg={4} key={i}>
                        <Box mb={1.5}>
                            <Tipps tippProp={a} />
                        </Box>
                    </Grid>
                ))}
                </Grid>
              )}

                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}>
                  <BottomNavigationAction  label="Gestern" icon={<EventNoteIcon />} />
                  <BottomNavigationAction  label="Heute" icon={<EventNoteIcon />}/>
                  <BottomNavigationAction  label="Morgen" icon={<EventNoteIcon />}/>
                </BottomNavigation>
                </Paper>
            </Box>
    );
}

Home.propTypes = {

}

export default Home

