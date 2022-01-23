// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

import { Box, Grid, Typography, Button } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import React from "react";

function ProfileInfoCard({ title, description, info, social, action, shadow }) {
  const labels = [];
  const values = [];

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <Grid container key={label}>
        <Grid item xs={6}>
        <Typography sx={{textTransform: 'capitalize'}}>
        <strong>  {label}: &nbsp;</strong>
      </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </Typography>
        </Grid>
    </Grid>
    // <Box key={label} display="flex" py={1} pr={2}>
    //   <Typography sx={{textTransform: 'capitalize'}}>
    //     <strong>  {label}: &nbsp;</strong>
    //   </Typography>
    //   <Typography variant="button" fontWeight="regular" color="text">
    //     &nbsp;{values[key]}
    //   </Typography>
    // </Box>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <Box
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize='18rm'
      color='#3b5998'
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </Box>
  ));

  return (
    <Card sx={{ height: "100%", width: '100%', boxShadow: !shadow && "none" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <Typography variant="h6" sx={{fontWeight: 'medium', textTransform: 'capitalize'}}>
          {title}
        </Typography>
        <Typography component={Button} onClick={action.route} variant="body2" color="gray">
          <Tooltip title={action.tooltip} placement="top">
            <EditIcon fontSize="small" />
          </Tooltip>
        </Typography>
      </Box>
      <Box p={2}>
        <Box mb={2} lineHeight={1}>
          <Typography color="text" fontWeight="light">
            {description}
          </Typography>
        </Box>
        <Box sx={{opacity: 0.3}}>
          <Divider />
        </Box>
        <Box>
        <Grid container>
            <Grid item xs={6}>
                <Typography sx={{textTransform: 'capitalize'}}>
                <strong> Beigetreten &nbsp;</strong>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="button" fontWeight="regular" color="text">
                &nbsp;September 2021
                </Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <Typography sx={{textTransform: 'capitalize'}}>
                <strong> Abgegebene Tipps &nbsp;</strong>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="button" fontWeight="regular" color="text">
                &nbsp;12.000
                </Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <Typography sx={{textTransform: 'capitalize'}}>
                <strong> Gewonnene Tipps &nbsp;</strong>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="button" fontWeight="regular" color="text">
                &nbsp;12.000
                </Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <Typography sx={{textTransform: 'capitalize'}}>
                <strong> Verlorene Tipps &nbsp;</strong>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="button" fontWeight="regular" color="text">
                &nbsp;0
                </Typography>
            </Grid>
        </Grid>
          {/* <Box display="flex" py={1} pr={2}>
            <Typography variant="button" sx={{fontWeight: 'bold', textTransform: 'capitalize'}}>
              social: &nbsp;
            </Typography>
            {renderSocial}
          </Box> */}
        </Box>
      </Box>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

export default ProfileInfoCard;
