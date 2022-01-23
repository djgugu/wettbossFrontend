import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Collapse, Divider, Grid, IconButton, Skeleton, Stack, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import AlarmIcon from '@mui/icons-material/Alarm';
import axios from 'axios';
import { red, grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';

function WettscheinComponent({type, bgSchein, title}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setdata] = useState([]);
    let checkIcon = (check) => {
        switch(check) {
          case "access_alarm":
            return <AlarmIcon />
          break;
          case "check":
            return <CheckIcon color='success' />
          break;
          case "clear":
            return <ClearIcon color='success' />
          break;
        }
      }
      useEffect(() => {    
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        let date = "20.12.2021"
        setIsLoaded(true)
        axios
          .get(`http://localhost/wordpress/wp-json/wettboss-api/v1/schein?date=`+date+`&type=`+type)
          .then((res) => {
            setdata(res.data);
            setIsLoaded(false)
          });
      }, []);
    return (
        <>
        <Card>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" src="" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Lorem ipsum dolor si"
        subheader="vor 1 Std."
      />
            <CardContent>
                <Grid container>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <img src="https://www.wettboss.com/wp-content/themes/wettboss/assets/images/wettschein_logo.jpg" width="250px" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sx={{bgcolor: bgSchein}}>
                    &nbsp;
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='overline'> Datum: 12.12.2021</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sx={{bgcolor: bgSchein}}>
                    <Typography variant='h4' align='center' sx={{color: "white"}}>{title}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant='body1' sx={{color: grey[500]}}>Italy - Serie B</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: "right"}}>
                        <Typography variant='body1'><strong>abgesagt</strong></Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1'>Lecce : Vicenza Virtus</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant='body1'><strong>Tipp: </strong>1</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='body1'>1.00</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <AlarmIcon />
                    </Grid>
                </Grid>
                <Divider />
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant='body1' sx={{color: grey[500]}}>Italy - Serie B</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: "right"}}>
                        <Typography variant='body1'><strong>abgesagt</strong></Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1'>Lecce : Vicenza Virtus</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant='body1'><strong>Tipp: </strong>1</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='body1'>1.00</Typography>
                    </Grid>
                    <Grid item xs={2} sx={{textAlign: "right"}}>
                        <AlarmIcon />
                    </Grid>
                </Grid>
                <Divider />
                <Grid container>
                    <Grid item xs={12} sx={{bgcolor: bgSchein}}>
                    &nbsp;
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='h6'>Gesamtquote:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: "right"}}>
                        <Typography variant='h6'>2.11</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider />
            <CardActions disableSpacing>
        <Grid container>
          <Grid item xs={4}>
            <Button variant="text" sx={{color: grey[900]}} startIcon={<FavoriteIcon />}>
            1000
            </Button>
          </Grid>
          <Grid item xs={8} sx={{textAlign: "right"}}>
            <Button variant="text" sx={{color: grey[900]}} onClick={handleExpandClick}>2 Kommentare ansehen</Button>
          </Grid>
        </Grid>

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container>
            <Grid item xs={2}>
              <Avatar src="" alt="A" />
            </Grid>
            <Grid item xs={10}>
             <span style={{fontSize: "14px", fontWeight: 500}}>abc def ghi jkl mno.</span> <span style={{fontSize: "13px", fontWeight: 400, color: "rgb(96, 96, 96)"}}>vor 1 Tag</span>
             <br />
             <span style={{fontSize: "14px"}}><Typography variant="body1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</Typography></span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3} sx={{display: 'flex', paddingRight: "5px"}} alignContent='end' justifyContent='right'>
              <Avatar sx={{ width: 24, height: 24 }} src="" alt="A" />
            </Grid>
            <Grid item xs={9}>
             <span style={{fontSize: "14px", fontWeight: 500}}>abc def ghi jkl mno.</span> <span style={{fontSize: "13px", fontWeight: 400, color: "rgb(96, 96, 96)"}}>vor 1 Tag</span>
             <br />
             <span style={{fontSize: "14px"}}><Typography variant="body2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</Typography></span>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>

                   </Card>
           </>
    )
}

WettscheinComponent.propTypes = {

}

export default WettscheinComponent

