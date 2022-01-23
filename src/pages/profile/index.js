// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import PropTypes from 'prop-types';
import { Avatar, Box, Button, Card, DialogTitle, Fab, styled, Tab, Tabs, Typography } from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Overview page components
import Header from "./components/Header";
import React from "react";
import ProfileInfoCard from "./components/ProfileInfoCard";
import ProfilesList from "./components/ProfilesList";

// @ts-ignore
import burceMars from "img/profile_img.jpg";
import UserTippsCard from "pages/user-tipps/components/user-tipps";
import ScrollTop from "pages/user-tipps/components/ScrollTop";
import { red, grey, blue} from '@mui/material/colors';
import WettscheinComponent from "pages/wettscheine/components/wettschein";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Overview(props) {
  let profilesListData = [
    {
      image: burceMars,
      name: "Sophie B.",
      description: "Profilebeschreibung",
      action: {
        type: "internal",
        route: "/pages/profile/profile-overview",
        color: "info",
        label: "Abonnieren",
      },
    },
    {
      image: {burceMars},
      name: "Anne Marie",
      description: "",
      action: {
        type: "internal",
        route: "/pages/profile/profile-overview",
        color: "info",
        label: "reply",
      },
    },
    {
      image: {burceMars},
      name: "Ivanna",
      description: "About files I can..",
      action: {
        type: "internal",
        route: "/pages/profile/profile-overview",
        color: "info",
        label: "reply",
      },
    },
    {
      image: {burceMars},
      name: "Peterson",
      description: "Have a great afternoon..",
      action: {
        type: "internal",
        route: "/pages/profile/profile-overview",
        color: "info",
        label: "reply",
      }
    },
    {
      image: {burceMars},
      name: "Nick Daniel",
      description: "Hi! I need more information..",
      action: {
        type: "internal",
        route: "/pages/profile/profile-overview",
        color: "info",
        label: "reply",
      },
    },
  ];
  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openeditprofil, seteditprofil] = React.useState(false);

  const handleClickOpenProfil = () => {
    seteditprofil(true);
  };
  const handleCloseProfil = () => {
    seteditprofil(false);
  };
 
  return (
      <>
            
            <Box id="back-to-top-anchor"> </Box>

            <BootstrapDialog
        onClose={handleCloseProfil}
        aria-labelledby="customized-dialog-title"
        open={openeditprofil}
        fullWidth={true}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseProfil}>
        Profil bearbeiten
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={8}>
             <Typography variant="h6"> Profilbild</Typography>
            </Grid>
            <Grid item xs={2}>
            <IconButton aria-label="delete">
              <AddIcon />
            </IconButton>
            </Grid>
            <Grid item xs={2}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            </Grid>
          </Grid>
          <Typography sx={{display: "flex", justifyContent: "center"}}>
            <Avatar src="" sx={{ width: 168, height: 168 }}>

            </Avatar>
          </Typography>
          <Grid container sx={{marginTop: "30px"}}>
            <Grid item xs={8}>
             <Typography variant="h6"> Titelbild</Typography>
            </Grid>
            <Grid item xs={2}>
            <IconButton aria-label="delete">
              <AddIcon />
            </IconButton>
            </Grid>
            <Grid item xs={2}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            </Grid>
          </Grid>
          <Typography sx={{display: "flex", justifyContent: "center"}}>
            <img src="" height={168} width={'100%'}/>
          </Typography>
          <Grid container sx={{marginTop: "30px"}}>
            <Grid item xs={12}>
             <Typography variant="h6">Beschreibe dich</Typography>
            </Grid>
          </Grid>
          <Typography sx={{display: "flex", justifyContent: "center"}}>
            
          </Typography>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseProfil}>
            Deine Infos speichern
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <Box mb={0} />
      <Header>
        <Box mt={5} mb={3}>
          <Grid container spacing={1}>
            {/* <Grid item xs={12} md={6} xl={4}>
                Einstellungen
            </Grid> */}
            <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="Info"
                description="Hallo guys, ich bin der wettboss ihr lutscher!"
                info={{
                  fullName: "Alec M. Thompson",
                  mobile: "(44) 123 1234 123",
                  email: "alecthompson@mail.com",
                  location: "USA",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: handleClickOpenProfil, tooltip: "Profil bearbeiten" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <ProfilesList title="Abos (10)" profiles={profilesListData} shadow={false} />
            </Grid>
          </Grid>
        </Box>

        <Box>
        {/* <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab value="0" label="Tipps"   {...a11yProps(0)}/>
            <Tab value="1" label="Wettscheine"  {...a11yProps(0)}/>
          </Tabs> */}
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Tipps" value='0'/>
          <Tab label="Wettscheine" value='1'/>
        </Tabs>
        </Box>
      </Header>
      

      <Box
        sx={{
          mt: 0,
          mx: 3,
          py: 2,
          px: 2,
          pb: 0
        }}
      >
        
        <Grid container spacing={1} sx={{display: (value == '1') ? 'none' : '' }}>
          <Grid item xs={12} md={6} lg={4}>
            <UserTippsCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <UserTippsCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <UserTippsCard />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{display: (value == '0') ? 'none' : '' }}>
          <Grid item xs={12} md={6} lg={4}>
          <WettscheinComponent title='Wettschein' type='user' bgSchein={blue[900]} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <WettscheinComponent title='Wettschein' type='user' bgSchein={blue[900]} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <WettscheinComponent title='Wettschein' type='user' bgSchein={blue[900]} />
          </Grid>
        </Grid>
        </Box>


        <ScrollTop {...props}>
        <Fab sx={{bgcolor: grey[900], color: "white", opacity: 0.5}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

    </>
  );
}

export default Overview;
