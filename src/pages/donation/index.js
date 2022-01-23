import React from 'react'
import PropTypes from 'prop-types'
import { Alert, AlertTitle, Box, Button, Container, Typography } from '@mui/material'

function Donation(props) {
    return (
        <Box>
        <Container disableGutters maxWidth="sm" component="main" sx={{ p: 1, background: "white", boxShadow: 1 }}>
        <Alert severity="info"  color="error">
        <AlertTitle><strong>Du möchtest uns unterstützen?</strong></AlertTitle>
        </Alert>
        {/* <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Du möchtest uns unterstützen?
        </Typography> */}
        <Typography variant="h5" align="center" color="text.secondary" sx={{pt: 3}} component="p">
        Wir opfern sehr viel unserer Freizeit um euch die besten Tipps und Prognosen geben zu können. wettboss ist zu 100% kostenlos und wird es auch immer bleiben. Wenn du mit unserer Arbeit zufrieden bist und uns unterstützen möchtest, kannst du dies gerne hier tun. Wir sind über jede Spende dankbar, egal ob kleine oder große Beträge.
        </Typography>
        <Box sx={{pt: 3, pb: 6, textAlign: "center"}}>
        <Button variant="contained" size="large" color="error">
          Jetzt Spenden
        </Button>
        </Box>
      </Container>
        </Box>
    )
}

Donation.propTypes = {

}

export default Donation

