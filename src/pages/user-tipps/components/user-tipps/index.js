import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Collapse, Divider, Grid, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function UserTippsCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    let boxGradient = 'black-gradient'

    return (
        <>
              <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src="" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Link to='/profile/28'>Lorem ipsum dolor si</Link>} 
        subheader="vor 1 Std."
      />
      <CardContent sx={{paddingTop: 0}}> 

        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.
     
        <Divider sx={{marginTop: 1, marginBottom: 1}}/>
        <Box display="flex" justifyContent="space-between" pt={1} px={2}>
        <Box width={110} m={0}>
         11:00
        </Box>
        <Box textAlign="right" lineHeight={1.25}>
          <Typography variant="button" fontWeight="light" color="text">
            Tipp
          </Typography>
          <Typography variant="h5" fontWeight="bold">1</Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" pt={4} px={2}>
        <Box width="100%" height="4rem" mt={-3}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <img src="https://media.api-sports.io/football/teams/28.png" height={30} style={{ marginRight: "5px" }} alt="homeTeam" />
            </Grid>
            <Grid item xs={10}>
            Tunisia
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <img src="https://media.api-sports.io/football/teams/1500.png" height={30} style={{ marginRight: "5px" }} alt="homeTeam" />
            </Grid>
            <Grid item xs={10}>
            Mali
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="right" lineHeight={1.25}>
          <Typography variant="button" fontWeight="light" color="text">
            Quote
          </Typography>
          <Typography variant="h5" fontWeight="bold">1.34</Typography>
        </Box>
      </Box>
{/* 
    
      <Button variant="text" size="small" sx={{color: grey[900]}}>Mehr ansehen</Button>
    */}

        {/* <Chip label="To Win Either Half | Home" variant="outlined" />

        <Chip label="1.23" />

        
        <Grid container pt={1}>
          <Grid item xs={2}>
            <img src="https://media.api-sports.io/football/teams/28.png" style={{width: "32px", height: "32px"}}/>
          </Grid>
          <Grid item xs={10}>
          <Typography variant='body2'>
          Tunisia
</Typography>
          </Grid>
        </Grid>
        <Grid container>
        <Grid item xs={2}>
            <img src="https://media.api-sports.io/football/teams/1500.png" style={{width: "32px", height: "32px"}}/>
          </Grid>
          <Grid item xs={10}>
        <Typography variant='body2'>
        Mali
</Typography>
         
          </Grid>
        </Grid>
        <Button variant="text" size="small" sx={{color: grey[900]}}>Mehr ansehen</Button> */}

      </CardContent>
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

        
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Antworten ansehen"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
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

UserTippsCard.propTypes = {

}

export default UserTippsCard

