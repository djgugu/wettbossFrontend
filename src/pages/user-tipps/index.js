import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppBar, AvatarGroup, Box, Button, CardActionArea, Checkbox, Chip, Container, Dialog, DialogTitle, Divider, Drawer, Fab, FormControlLabel, FormGroup, Grid, List, ListItem, ListItemAvatar, ListItemText, Slide, Toolbar, useScrollTrigger, Zoom } from '@mui/material';
import UserTippsCard from './components/user-tipps';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { red, grey, blue } from '@mui/material/colors';
import ScrollTop from './components/ScrollTop';
import WettscheinComponent from 'pages/wettscheine/components/wettschein';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CreateIcon from '@mui/icons-material/Create';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
const emails = ['username@gmail.com', 'user02@gmail.com'];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;


  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Was wollen Sie erstellen?</DialogTitle>
      <List sx={{ pt: 0 }}>
          <ListItem component={NavLink} to="/create-user-tipps" button onClick={() => handleListItemClick("Wettschein")} key={"Wettschein"}>
            <ListItemAvatar>
                <CreateIcon />
            </ListItemAvatar>
            <ListItemText primary={"Tipp"} />
          </ListItem>
          <ListItem component={NavLink} to="/create-wettschein" button onClick={() => handleListItemClick("Wettschein")} key={"Wettschein"}>
            <ListItemAvatar>
                <AssignmentIcon />
            </ListItemAvatar>
            <ListItemText primary={"Wettschein"} />
          </ListItem>
        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
              <CancelIcon />
          </ListItemAvatar>
          <ListItemText primary="Abbrechen" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


function UserTipps(props) {
  const [openDialog, setopenDialog] = useState(false)

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
    };
    return (
      <>
{/* <Drawer
      anchor='right'
      open={openDrawer}
      onClose={() => setopenDrawer(false)}
    >
     <Box sx={{width: "300px"}}>
      <Typography variant='h3' align="center">Filter</Typography>

     </Box>
    </Drawer> */}
   <Dialog
        fullScreen
        open={openDialog}
        onClose={() => setopenDialog(false)}
        TransitionComponent={Transition}
      >
      <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setopenDialog(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Filter
            </Typography>
            <Button autoFocus color="inherit" onClick={() => setopenDialog(false)}>
              Speichern
            </Button>
          </Toolbar>
        </AppBar>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label={'Alle auswählen'}  />

          <FormControlLabel control={<Checkbox defaultChecked />} label={<><p>Team1</p><p>Team2</p></>} />
          <FormControlLabel control={<Checkbox />} label={<><p>Team1</p><p>Team2</p></>}  />
        </FormGroup>
      </Dialog>

      <Box id="back-to-top-anchor"> </Box>
      <Container>
        <Grid container mt={2} mb={2}>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" src="" />
                }
                action={
                  <IconButton onClick={() => setopenDialog(true)} aria-label="settings">
                    <FilterAltIcon />
                  </IconButton>
                }
                title={<Button onClick={handleClickOpen} variant="text">Jetzt einen Tipp verfassen!</Button>}
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={4}>
           <WettscheinComponent title='Wettschein' type='user' bgSchein={blue[900]} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <UserTippsCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <UserTippsCard />
          </Grid>
        </Grid>


      </Container>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <ScrollTop {...props}>
        <Fab sx={{bgcolor: grey[900], color: "white", opacity: 0.5}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      </>
    )
}

UserTipps.propTypes = {

}

export default UserTipps

