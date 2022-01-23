import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, Typography, Grid, Divider, Skeleton } from '@mui/material'

function Preloader(props) {
    return (
        <Card>
        <Box display="flex" justifyContent="space-between" pt={1} px={2}>
          <Box  width={110}>
            <Skeleton />
          </Box>
          <Box textAlign="right" lineHeight={1.25}>
            <Typography variant="button" fontWeight="light" color="text">
              
            </Typography>
            <Typography variant="h5" fontWeight="bold"></Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" pt={4} px={2}>
          <Box width="100%" height="4rem" mt={-3}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Skeleton variant="rectangular" height={30} />
              </Grid>
              <Grid item xs={10}>
                <Skeleton />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Skeleton variant="rectangular" height={30} />
              </Grid>
              <Grid item xs={10}>
                <Skeleton />
              </Grid>
            </Grid>
          </Box>
          <Box textAlign="right" lineHeight={1.25}>
            <Typography variant="button" fontWeight="light" color="text">
              
            </Typography>
            <Typography variant="h5" fontWeight="bold"></Typography>
          </Box>
        </Box>
        <Divider />
        <Box pb={2} pt={2} px={2}>
            <Skeleton />
        </Box>
      </Card>
    )
}

Preloader.propTypes = {

}

export default Preloader

