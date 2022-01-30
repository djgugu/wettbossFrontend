import React, { useContext } from "react";
import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import { AppBar, Avatar, Badge, Box, Button, Container, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Paper, Toolbar, Tooltip, Typography } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
// @ts-ignore
import logo from './img/logo.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout'
import FeedbackIcon from '@mui/icons-material/Feedback';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {  red } from '@mui/material/colors';
import UserContext from "./context";

const drawerWidth = 240;
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function App(props) {
  const user = useContext(UserContext);
  // const [context, setContext] = useContext(UserContext);

  // const user = {login: true};

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar style={{background: "black", paddingLeft: 5}}>
        <img src={logo} height={64} />
      </Toolbar>
      <Divider />
      <List>
        <ListItemButton component={NavLink} to="bonus" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Bonus" />
        </ListItemButton>
      
          <ListItemButton component={NavLink} to="/" onClick={handleDrawerToggle}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Sportwetten Tipps" />
          </ListItemButton> 
          <ListItemButton component={NavLink} to="wettschein/wettschein" onClick={handleDrawerToggle}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Wettscheine" />
          </ListItemButton> 
   
        <ListItemButton component={NavLink} to="wettschein/verdoppler" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Verdoppler" />
        </ListItemButton> 
        
        <ListItemButton component={NavLink} to="wettschein/risiko" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Risiko Tipps" />
        </ListItemButton> 

        <ListItemButton component={NavLink} to="spiel-des-tages" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <CelebrationIcon />
            </ListItemIcon>
            <ListItemText primary="Spiel des Tages" />
        </ListItemButton> 

      </List>
      <Divider />
      <List>
       <ListItemButton component={NavLink} to="donation" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <CardGiftcardIcon />
            </ListItemIcon>
            <ListItemText primary="Ünterstütze Uns" />
        </ListItemButton> 
        <ListItemButton component={NavLink} to="user-tipps" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <InsertEmoticonIcon />
            </ListItemIcon>
            <ListItemText primary="User Tipps" />
        </ListItemButton> 
      </List>
      <Divider />
      <List>
        <ListItemButton component={NavLink} to="impressum" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Impressum" />
        </ListItemButton> 
      </List>  

      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '240px'  }} p={1}>
      {/* <Grid container>
        <Grid item xs={2}>
        <FacebookIcon />
        </Grid>
        <Grid item xs={2}>
        <InstagramIcon />
        </Grid>
        <Grid item xs={2}>
        <EmailIcon />
        </Grid>
      </Grid> */}
      <Divider />

        <Typography variant="subtitle2"> © 2022 wettboss.com</Typography>


      </Box>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        // @ts-ignore
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

    return (
        <>
        {/* <Link to="/">Home</Link>
        <br />
        <Link to="/wettschein">Wettscheine</Link>
        <br />
        <Link to="/bonus">Bonus</Link>
        <br /> */}
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{background: "black"}}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        elevation={1}
      >
        <Toolbar>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={logo} height={56} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              {user.login ? (
                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                   <Avatar src="" />
                  </IconButton>
              ) : (
                <Button variant="contained" component={NavLink} to="sign-in" color="error">Anmelden</Button>

              )}
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
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
                <MenuItem component={NavLink} to="/profile" onClick={handleCloseUserMenu}>
                  <Avatar src=""/> Profile
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                  <Badge color="error" badgeContent={1} max={10}>
                    <NotificationsIcon fontSize="small" />
                  </Badge>
                  </ListItemIcon>
                 Benachrichtigungen
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <FeedbackIcon fontSize="small" />
                  </ListItemIcon>
                 Feedback senden
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Einstellungen
                </MenuItem>
                <MenuItem component={NavLink} to="/sign-in" onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Abmelden
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          <Routes>
              {getRoutes(routes)}
              <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </Typography>
      </Box>
    </Box>

        </>
    );
}

export default App;
