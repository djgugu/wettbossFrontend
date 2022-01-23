import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Backdrop, CircularProgress, Divider, InputAdornment } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Siehe '}
      <Link color="inherit" component={NavLink} to="/impressum">
         Allgemeinen Nutzungsbedingungen und Datenschutzrichtlinien
      </Link>
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setOpen(!open);

    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      username: data.get('username'),
      checkbox: data.get('checkbox')
    });
  };
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop>

      <Container component="main" maxWidth="xs" sx={{backgroundColor: "white"}}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: "20px"
          }}
        >
         
          <Typography component="h1" variant="h5">
          Du möchtest an unserer Wett-Community teilnehmen?
          </Typography>
          <Typography component="p">
          Dann registriere Dich jetzt kostenlos!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  color="info"
                  id="username"
                  label="Benutzername"
                  helperText="Benutzername darf max. 20 zeichen lang sein"
                  autoFocus
                  type="text"
                  error={false}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-Mail Adresse"
                  name="email"
                  autoComplete="family-name"
                  type="email"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                  }}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Passwort"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  name="checkbox"
                  control={<Checkbox value="acceptAGB" color="info" />}
                  label="Indem du dich registrierst, stimmst du den Allgemeinen Nutzungsbedingungen und Datenschutzrichtlinien zu."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 3, mb: 2 }}
              disabled={false}
            >
              Regestrieren
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={NavLink} to="/sign-in" variant="body2">
                Du hast bereits einen Account? Meld dich an
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Divider sx={{marginTop: 2, marginBottom: 2 }}>Oder</Divider>
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <Button variant="outlined" startIcon={<GoogleIcon />}>
                Google
            </Button>
            </Grid>
            <Grid item xs={6} sx={{textAlign: "right"}}>
            <Button variant="outlined"  startIcon={<FacebookIcon />}>
                facebook
            </Button>                
            </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}