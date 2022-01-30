// @ts-nocheck
import { useState, useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

import { Avatar, Box, Typography } from '@mui/material';


// Images

import React from "react";

function Header({ children, userdata }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  let profileImg = "";

  if(userdata.profile_img == "") {
     profileImg = "";
  }else {
     profileImg = "http://localhost/wordpress/wp-content/plugins/extend-RESTAPI/users_img/profile_img.jpg";
  }
  let bgg = "";
  if(userdata.background_img == "") {
     bgg = "linear-gradient(216deg, rgba(77, 77, 77,0.05) 0%, rgba(77, 77, 77,0.05) 25%,rgba(42, 42, 42,0.05) 25%, rgba(42, 42, 42,0.05) 38%,rgba(223, 223, 223,0.05) 38%, rgba(223, 223, 223,0.05) 75%,rgba(36, 36, 36,0.05) 75%, rgba(36, 36, 36,0.05) 100%),linear-gradient(44deg, rgba(128, 128, 128,0.05) 0%, rgba(128, 128, 128,0.05) 34%,rgba(212, 212, 212,0.05) 34%, rgba(212, 212, 212,0.05) 57%,rgba(25, 25, 25,0.05) 57%, rgba(25, 25, 25,0.05) 89%,rgba(135, 135, 135,0.05) 89%, rgba(135, 135, 135,0.05) 100%),linear-gradient(241deg, rgba(55, 55, 55,0.05) 0%, rgba(55, 55, 55,0.05) 14%,rgba(209, 209, 209,0.05) 14%, rgba(209, 209, 209,0.05) 60%,rgba(245, 245, 245,0.05) 60%, rgba(245, 245, 245,0.05) 69%,rgba(164, 164, 164,0.05) 69%, rgba(164, 164, 164,0.05) 100%),linear-gradient(249deg, rgba(248, 248, 248,0.05) 0%, rgba(248, 248, 248,0.05) 32%,rgba(148, 148, 148,0.05) 32%, rgba(148, 148, 148,0.05) 35%,rgba(202, 202, 202,0.05) 35%, rgba(202, 202, 202,0.05) 51%,rgba(181, 181, 181,0.05) 51%, rgba(181, 181, 181,0.05) 100%),linear-gradient(92deg, hsl(214,0%,11%),hsl(214,0%,11%));";
  }else {
     bgg = "url('http://localhost/wordpress/wp-content/plugins/extend-RESTAPI/users_img/profile_bg.jpg')";
  }
  const trefferquote_color = userdata.trefferquote_color
  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < 576
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <Box position="relative" mb={0}>
      <Box
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          background: `${bgg}`, 
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 2,
          py: 2,
          px: 2,
          pb: 0
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar src={`${profileImg}`} alt="profile-image" sx={{width: '4.625rem', height: '4.625rem', boxShadow: 3}} />
          </Grid>
          <Grid item>
            <Box height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium">
              {userdata.nickname}
              </Typography>
              <Typography>
              Trefferquote: <strong style={{color: `${trefferquote_color}`}}>{userdata.trefferquote}%</strong>
              </Typography>
            </Box>
          </Grid>
        
        </Grid>
        {children}
      </Card>
    </Box>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
