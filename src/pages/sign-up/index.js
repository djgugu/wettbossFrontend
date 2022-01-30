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
import { NavLink, useNavigate  } from 'react-router-dom';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Backdrop, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, InputAdornment } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

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
  const responseFacebook = (response) => {
    // setFbOpen(true)
    console.log(response);
  }

  const fbReg = () => {
    
  }
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setOpen(true);

    axios
    .post(`http://localhost/wordpress/wp-json/wettboss-api/v1/users`,{
      username: data.get('username'),
      password: data.get('password'),
      email: data.get('email'),
      check: data.get('checkbox')
    })
    .then((res) => {
      setOpen(false);
      // setdata(res.data);
      let data = res.data;
      console.log(data)
      console.log(data.user.length)
        setUser({error: data.user.error, errorMsg: data.user.errorMsg});
        setEmail({error: data.email.error, errorMsg: data.email.errorMsg});
        setPassword({error: data.password.error, errorMsg: data.password.errorMsg});
      if(data.check == true && data.user.error == false &&  data.password.error == false &&  data.email.error == false) {
        navigate('/profile');
      }

      // setIsLoaded(false)
    }).catch(function (error) {
      setOpen(false);
      console.log(error);
    });

  };
  const theme = useTheme();


  const [user, setUser] = React.useState({error: false, errorMsg: ""});
  const [email, setEmail] = React.useState({error: false, errorMsg: ""});
  const [password, setPassword] = React.useState({error: false, errorMsg: ""});

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [fbopen, setFbOpen] = React.useState(false);
  const handleCloseFB = () => {
    setFbOpen(false);
  };


  return (
    <ThemeProvider theme={theme}>

<Dialog open={fbopen} onClose={handleCloseFB}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bitte einen Benutzernamen eingeben und die AGBs akzeptieren!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
            <FormControlLabel
              name="checkbox"
              control={<Checkbox value="acceptAGB" color="info" />}
              label="Indem du dich registrierst, stimmst du den Allgemeinen Nutzungsbedingungen und Datenschutzrichtlinien zu."
            />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFB}>Abbrechen</Button>
          <Button onClick={fbReg}>Regestrieren</Button>
        </DialogActions>
      </Dialog>
      

      <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
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
                  helperText={user.error ? user.errorMsg : ""}
                  autoFocus
                  type="text"
                  error={user.error}
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
                  helperText={email.error ? email.errorMsg : ""}
                  error={email.error}
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
                  helperText={password.error ? password.errorMsg : ""}
                  error={password.error}
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
        {/* <Divider sx={{marginTop: 2, marginBottom: 2 }}>Oder</Divider>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Button variant="outlined" startIcon={<GoogleIcon />}>
                Google
            </Button>
            </Grid>
            <Grid item xs={12} sx={{textAlign: "right"}}>

            <FacebookLogin
    appId="3486670654772781"
    autoLoad={false}
    fields="name,email,picture"
    onClick={() => setOpen(true)}
    callback={responseFacebook} 
    icon={<FacebookIcon />}
/>

            </Grid>
        </Grid> */}
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}