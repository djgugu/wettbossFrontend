import { Box, Button, Card, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

function Tipps({
    tippProp
  }) {
    let boxGradient = 'black-gradient'
    if(tippProp.getroffen == "green") {
      boxGradient = 'green-gradient'
    }else if(tippProp.getroffen == "red") {
      boxGradient = 'red-gradient'
    }
    return (
  <Card>
      <Box display="flex" justifyContent="space-between" pt={1} px={2}>
        <Box className={boxGradient} width={110}>
          {tippProp.time}
        </Box>
        <Box textAlign="right" lineHeight={1.25}>
          <Typography variant="button" fontWeight="light" color="text">
            Tipp
          </Typography>
          <Typography variant="h5" fontWeight="bold">{tippProp.tipp}</Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" pt={4} px={2}>
        <Box width="100%" height="4rem" mt={-3}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <img src={tippProp.homeTeamLogo} height={30} style={{ marginRight: "5px" }} alt="homeTeam" />
            </Grid>
            <Grid item xs={10}>
              {tippProp.homeTeam}
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <img src={tippProp.awayTeamLogo} height={30} style={{ marginRight: "5px" }} alt="homeTeam" />
            </Grid>
            <Grid item xs={10}>
              {tippProp.awayTeam}
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="right" lineHeight={1.25}>
          <Typography variant="button" fontWeight="light" color="text">
            Quote
          </Typography>
          <Typography variant="h5" fontWeight="bold">{tippProp.quote}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box pb={2} pt={2} px={2}>
        <Button color="error" variant="contained" fullWidth>
          Jetzt Wetten!
        </Button>
      </Box>
    </Card>
    )
}

Tipps.propTypes = {

}

export default Tipps

