// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import PropTypes from 'prop-types';
import { Avatar, Box, Button, Card, DialogTitle, Fab, ListItemIcon, Menu, MenuItem, Popover, Skeleton, styled, Tab, Tabs, TextField, Typography } from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Overview page components
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import ProfileInfoCard from "./components/ProfileInfoCard";
import ProfilesList from "./components/ProfilesList";

// @ts-ignore
// import burceMars from "img/profile_img.jpg";
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
import axios from 'axios';
import { useParams } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

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
  const [valueText, setvalueText] = React.useState('Controlled');

  const handleChange2 = (event) => {
    setvalueText(event.target.value);
  };
  let profileImg = "";

  const Input = styled('input')({
    display: 'none',
  });
  const [titleBG, settitleBG] = useState('');
  const [titleBGImgLoader, settitleBGImgLoader] = React.useState(false);


  const { id } = useParams();
  const [userdata, setuserdata] = useState({
    background_img: "",
    capital: "",
    loses: "",
    nickname: "",
    profile_img: "",
    short_description: "",
    wins: ""
  });
  useEffect(() => {    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
 
    axios
      .get(`http://localhost/wordpress/wp-json/wettboss-api/v1/users?userid=`+id)
      .then((res) => {
        
        setuserdata(res.data[0])
        if(userdata.background_img != "") settitleBG(userdata.background_img)
        console.log(userdata)
        console.log(res.data[0])

      });
  }, []);

  let profilesListData = [
    {
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
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
      image:'',
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
  const [profilImg, seprofilImg] = React.useState('');
  const [profilImgLoader, seprofilImgLoader] = React.useState(false);

  const handleCapture = ({ target }) => {
    seprofilImgLoader(true)
    const fileReader = new FileReader();
    console.log(target)
    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      seprofilImg(e.target.result)
      seprofilImgLoader(false)

    //     this.setState((prevState) => ({
    //         [name]: [...prevState[name], e.target.result]
    //     }));
    };
};

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const open2 = Boolean(anchorEl2);

  return (
      <>
            
            <Box id="back-to-top-anchor"> </Box>

            <BootstrapDialog
        onClose={handleCloseProfil}
        aria-labelledby="customized-dialog-title"
        open={openeditprofil}
        fullWidth={true}
      >
        <BootstrapDialogTitle onClose={handleCloseProfil}>
        Profil bearbeiten
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={8}>
             <Typography variant="h6"> Profilbild</Typography>
            </Grid>
            <Grid item xs={2}>
            {/* <IconButton aria-label="delete">
              <AddIcon />
            </IconButton> */}
              <label htmlFor="icon-button-file">
                <Input accept=".jpg,.jpeg" onChange={handleCapture} id="icon-button-file" type="file" />
                <IconButton aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </Grid>
            <Grid item xs={2}>
            <IconButton aria-label="delete" onClick={handleClick}>
              <DeleteIcon />
            </IconButton>


            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorEl2}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open2}
              onClose={handleClose2}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
            >
                
                <MenuItem>
                  <ListItemIcon>
                    <FeedbackIcon fontSize="small" />
                  </ListItemIcon>
                 Titelbild wirklich löschen?
                </MenuItem>
                {/* <Divider /> */}
            </Menu>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
            >
                
                <MenuItem onClick={() => {seprofilImg('');handleClose()}}>
                  <ListItemIcon>
                    <FeedbackIcon fontSize="small" />
                  </ListItemIcon>
                 Profilbild wirklich löschen?
                </MenuItem>
                {/* <Divider /> */}
            </Menu>

 

            </Grid>
          </Grid>
          <Typography sx={{display: "flex", justifyContent: "center"}}>

            {profilImgLoader ? (
              <>
              <Skeleton variant="circular" width={168} height={168}   />
              </>
            ) : (
              <>
              <Avatar src={profilImg} sx={{ width: 168, height: 168 }}>
               </Avatar>

              </>
            )}

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
            <IconButton aria-label="delete" onClick={handleClick2}>
              <DeleteIcon />
            </IconButton>
            </Grid>
          </Grid>
          <Typography sx={{display: "flex", justifyContent: "center"}}>
            <img src={titleBG} height={168} width={'100%'}/>
          </Typography>
          <Grid container sx={{marginTop: "30px"}}>
            <Grid item xs={12}>
             <Typography variant="h6">Beschreibe dich</Typography>
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="description"
                multiline
                fullWidth 
                maxRows={4}
                helperText="200 Zeichen verbleiben"
                inputProps={{ maxLength: 200 }}
              />
            </Grid>
          </Grid>
          <Typography sx={{display: "flex", justifyContent: "center"}}>
            
          </Typography>
          
        </DialogContent>
        <DialogActions>

        <LoadingButton
        onClick={handleCloseProfil}
        loading={false}
        loadingPosition="end"
        variant="outlined"
      >
     Deine Infos speichern
      </LoadingButton>

          {/* <Button autoFocus onClick={handleCloseProfil}>
            Deine Infos speichern
          </Button> */}
        </DialogActions>
      </BootstrapDialog>

      <Box mb={0} />
      <Header userdata={userdata}>
        <Box mt={5} mb={3}>
          <Grid container spacing={1}>
            {/* <Grid item xs={12} md={6} xl={4}>
                Einstellungen
            </Grid> */}
            <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="Info"
                description={userdata.short_description}
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
                userdata={userdata}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <ProfilesList title={'Abos (' +userdata.abos + ')'} profiles={profilesListData} shadow={false} />
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
