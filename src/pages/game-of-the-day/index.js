import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Alert, BottomNavigation, BottomNavigationAction, Box, Container, Grid, Paper, Skeleton, Typography } from '@mui/material'
import { purple, red } from '@mui/material/colors';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';
// @ts-ignore
import bg from '../../img/bg.jpg';

function SpielDesTages(props) {
  const [value, setValue] = React.useState(1);
  const [data, setdata] = useState([]);
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
      .get(`http://localhost/wordpress/wp-json/wettboss-api/v1/game-of-the-day?date=`+date)
      .then((res) => {
        setdata(res.data);
        console.log(res.data)
        setIsLoaded(false)
      });
  }, [value]);

    return (
        <>
        {/* background: "url('https://www.wettboss.com/wp-content/themes/wettboss/assets/images/SdT-01.jpg') center center" */}
            <Box sx={{background: `url(${bg}) center center`, backgroundSize: "cover",color: "white", boxShadow: 1}} p={1}>
                <Grid container spacing={2} style={{textAlign: "center"}}>
                    {isLoaded ? (
                        <>
                        <Grid item xs={4}>
                            <Skeleton animation="pulse" height={110} variant="circular" />
                        </Grid>
                        <Grid item xs={4} style={{textAlign: "center"}}>
                            
                        </Grid>
                        <Grid item xs={4} style={{textAlign: "center"}}>
                        <Skeleton animation="pulse" height={110} variant="circular" />
    
                        </Grid>
                        <Grid item xs={4}>
                            <Skeleton animation="pulse" variant="text" />
                        </Grid>
                        <Grid item xs={4} style={{textAlign: "center"}}>
                            
                        </Grid>
                        <Grid item xs={4} style={{textAlign: "center"}}>
                        <Skeleton animation="pulse" variant="text" />
    
                        </Grid>
                        </>
                    ) : (
                        <>
                        <Grid item xs={4}>
                        <img 
// @ts-ignore
                        src={data.map(el => el.team_logo_home)} style={{maxWidth: "100%", height: "auto" }}/>
                       
                        </Grid>
                        <Grid item xs={4} style={{textAlign: "center"}}>
                            
                        </Grid>
                        <Grid item xs={4} style={{textAlign: "center"}}>
                        <img 
// @ts-ignore
                        src={data.map(el => el.team_logo_away)} style={{maxWidth: "100%", height: "auto" }} />
    
                        </Grid>
                        <Grid item xs={4}>
                    {data.map(el => el.homeTeam)}
                    </Grid>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                    {data.map(el => el.status)}
                    </Grid>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                    {data.map(el => el.awayTeam)}
                    </Grid>
                        </>
                    )}

               
                   
                </Grid> 
            </Box>
        <Container>
            <Box sx={{boxShadow: 1, marginBottom: 15, background: "white"}}>
                <Box mt={2}>
                    <Grid container spacing={1}>
                        <Grid item xs={4} className='text-center'>
                            <strong>Tippmethode</strong>
                        </Grid>
                        <Grid item xs={4} className='text-center'>
                        <strong>Tipp</strong>
                        </Grid>
                        <Grid item xs={4} className='text-center'>
                        <strong>Quote</strong>
                        </Grid>
                    </Grid>
                </Box>

                {isLoaded ? (
                    <>
                    <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                        <Grid container spacing={1} sx={{background: "rgba(242,242,242,0.5)"}}>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-right'>
                            <Skeleton variant='text' /> 
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                        <Grid container spacing={1}>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-right'>
                            <Skeleton variant='text' /> 
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                        <Grid container spacing={1} sx={{background: "rgba(242,242,242,0.5)"}}>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-right'>
                            <Skeleton variant='text' /> 
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                        <Grid container spacing={1}>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-right'>
                            <Skeleton variant='text' /> 
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                        <Grid container spacing={1} sx={{background: "rgba(242,242,242,0.5)"}}>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-right'>
                            <Skeleton variant='text' /> 
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                        <Grid container spacing={1}>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-right'>
                            <Skeleton variant='text' /> 
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                        <Grid container spacing={1} sx={{background: "rgba(242,242,242,0.5)"}}>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-center'>
                            <Skeleton variant='text' /> 
                            </Grid>
                            <Grid item xs={4} className='text-right'>
                            <Skeleton variant='text' /> 
                            </Grid>
                        </Grid>
                    </Box>
                    </>
                ) : (
                    <>
                    <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                    <Grid container spacing={1} sx={{background: "rgba(242,242,242,0.5)"}}>
                        <Grid item xs={4} className='text-center'>
                        Normaler
                        </Grid>
                        <Grid item xs={4} className='text-center'>
                        {data.map(el => el.normal_tipp)}
                        </Grid>
                        <Grid item xs={2} className='text-right'>
                        {data.map(el => el.normal_quote)}

                        </Grid>
                        <Grid item xs={2} className='text-center'>
                        {data.map(el => {
                            if(el.normal_icon == "check") {
                                return <CheckIcon color='success' />
                            }else if(el.normal_icon == "clear") {
                                return <ClearIcon color='error' />
                            }else {
                                return <AccessAlarmsIcon />
                            }
                        })}
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                    <Grid container spacing={1}>
                        <Grid item xs={4} className='text-center'>
                        Over/Under
                        </Grid>
                        <Grid item xs={4} className='text-center'>
                        {data.map(el => el.over_under)}

                        </Grid>
                        <Grid item xs={2} className='text-right'>
                        {data.map(el => el.over_under_quote)}

                        </Grid>
                        <Grid item xs={2} className='text-center'>
                        {data.map(el => {
                            if(el.over_under_icon == "check") {
                                return <CheckIcon color='success' />
                            }else if(el.over_under_icon == "clear") {
                                return <ClearIcon color='error' />
                            }else {
                                return <AccessAlarmsIcon />
                            }
                        })}
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                    <Grid container spacing={1} sx={{background: "rgba(242,242,242,0.5)"}}>
                        <Grid item xs={4} className='text-center'>
                        Handicap
                        </Grid>
                        <Grid item xs={4} className='text-center'>
                        {data.map(el => el.handicap)}

                        </Grid>
                        <Grid item xs={2} className='text-right'>
                        {data.map(el => el.handicap_quote)}

                        </Grid>
                        <Grid item xs={2} className='text-center'>
                        {data.map(el => {
                            if(el.handicap_icon == "check") {
                                return <CheckIcon color='success' />
                            }else if(el.handicap_icon == "clear") {
                                return <ClearIcon color='error' />
                            }else {
                                return <AccessAlarmsIcon />
                            }
                        })}
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                    <Grid container spacing={1}>
                        <Grid item xs={4} className='text-center'>
                        Doppelte Chance
                        </Grid>
                        <Grid item xs={4} className='text-center'>
                        {data.map(el => el.doppelte_chance)}

                        </Grid>
                        <Grid item xs={2} className='text-right'>
                        {data.map(el => el.doppelte_chance_quote)}
                        
                        </Grid>
                        <Grid item xs={2} className='text-center'>
                        {data.map(el => {
                            if(el.doppelte_chance_icon == "check") {
                                return <CheckIcon color='success' />
                            }else if(el.doppelte_chance_icon == "clear") {
                                return <ClearIcon color='error' />
                            }else {
                                return <AccessAlarmsIcon />
                            }
                        })}

                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                    <Grid container spacing={1} sx={{background: "rgba(242,242,242,0.5)"}}>
                        <Grid item xs={4} className='text-center'>
                        Beide Treffen
                        </Grid>
                        <Grid item xs={4} className='text-center'>
                        {data.map(el => el.beide_treffen)}

                        </Grid>
                        <Grid item xs={2} className='text-right'>
                        {data.map(el => el.beide_treffen_quote)}

                        </Grid>
                        <Grid item xs={2} className='text-center'>
                        {data.map(el => {
                            if(el.beide_treffen_icon == "check") {
                                return <CheckIcon color='success' />
                            }else if(el.beide_treffen_icon == "clear") {
                                return <ClearIcon color='error' />
                            }else {
                                return <AccessAlarmsIcon />
                            }
                        })}
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                    <Grid container spacing={1}>
                        <Grid item xs={4} className='text-center'>
                        HT/FT
                        </Grid>
                        <Grid item xs={4} className='text-center'>
                        {data.map(el => el.HT_FT)}

                        </Grid>
                        <Grid item xs={2} className='text-right'>
                        {data.map(el => el.HT_FT_quote)}

                        </Grid>
                        <Grid item xs={2} className='text-center'>
                        {data.map(el => {
                            if(el.HT_FT_icon == "check") {
                                return <CheckIcon color='success' />
                            }else if(el.HT_FT_icon == "clear") {
                                return <ClearIcon color='error' />
                            }else {
                                return <AccessAlarmsIcon />
                            }
                        })}
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2} sx={{boxShadow: 0, background: "white"}}>
                    <Grid container spacing={1} sx={{background: "rgba(242,242,242,0.5)"}}>
                        <Grid item xs={4} className='text-center'>
                        Korrektes Ergebnis
                        </Grid>
                        <Grid item xs={4} className='text-center'>
                        {data.map(el => el.korrektes_ergebnis)}

                        </Grid>
                        <Grid item xs={2} className='text-right'>
                        {data.map(el => el.korrektes_ergebnis_quote)}

                        </Grid>
                        <Grid item xs={2} className='text-center'>
                        {data.map(el => {
                            if(el.korrektes_ergebnis_icon == "check") {
                               return <CheckIcon color='success' />
                            }else if(el.korrektes_ergebnis_icon == "clear") {
                                return <ClearIcon color='error' />
                            }else {
                                return <AccessAlarmsIcon />
                            }
                        })}
                        </Grid>
                    </Grid>
                </Box>
                </>
                )}

               
            </Box>
        </Container>
        
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
        </>
    )
}

SpielDesTages.propTypes = {

}

export default SpielDesTages

