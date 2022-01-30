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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PersonIcon from '@mui/icons-material/Person';
import { Alert, Backdrop, CircularProgress, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

const theme = createTheme();
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
export default function SignIn() {
    const [open, setOpen] = React.useState(false);
  const [backdrop, setbackdrop] = React.useState(false);
  const [user, setUser] = React.useState({error: false, errorMsg: ""});
  const [password, setPassword] = React.useState({error: false, errorMsg: ""});  
  const [loadingBtn, setloadingBtn] = React.useState(false);
  const [lostpassword, setlostpassword] = React.useState({error: false, errorMsg: ""});  
  const [collapse, setcollapse] =  React.useState(false);
  let navigate = useNavigate();

  const handleClickOpen = () => {
      setOpen(true);
      setloadingBtn(false)
      setcollapse(false)
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  const findEmail = () => {

    // @ts-ignore
    let email = document.getElementById("lostemail").value;
    console.log(email)
    setloadingBtn(true)
    axios
    .post(`http://localhost/wordpress/wp-json/wettboss-api/v1/password-reset/send-mail`,{
      email: email,
    })
    .then((res) => {
      console.log(res)
      setloadingBtn(false)
      setlostpassword({error: res.data.email.error, errorMsg: res.data.email.errorMsg});
      if(res.data.email.error == false) {
        setOpen(false);
        setcollapse(true);
      }
    }).catch(function (error) {

        console.log(error);
    });

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setbackdrop(true)
    axios
    .post(`http://localhost/wordpress/wp-json/wettboss-api/v1/login`,{
      username: data.get('username'),
      password: data.get('password'),
      remember: data.get('remember')
    })
    .then((res) => {
    setbackdrop(false)
    console.log(res.data)

    
    setUser({error: res.data.user.error, errorMsg: res.data.user.errorMsg});
    setPassword({error: res.data.password.error, errorMsg: res.data.password.errorMsg});
    if(res.data.user.error == false &&  res.data.password.error == false) {
      navigate('/profile');
    }


      // setdata(res.data);
      // setIsLoaded(false)
    }).catch(function (error) {
    setbackdrop(false)

      console.log(error);
    });

    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      remember: data.get('remember')
    });
  };

  return (
    <ThemeProvider theme={theme} >
      <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backdrop}
        >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Container component="main" maxWidth="md" sx={{bgcolor: "white"}}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: "20px"
          }}
        >
          {/* <Avatar sx={{ m: 1, backgroundColor: theme.palette.grey[900] }}>
            <ConnectWithoutContactIcon />
          </Avatar> */}
           <Collapse in={collapse}>
              <Alert severity="success">Bitte überprüfe deine E-Mails!</Alert>
           </Collapse>

          <Typography component="h1" variant="h5">
           Anmelden
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              type="text"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Benutzername"
              name="username"
              autoComplete="username"
              helperText={user.error ? user.errorMsg : ""}
              error={user.error}
              autoFocus
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Passwort"
              type="password"
              id="password"
              helperText={password.error ? password.errorMsg : ""}
              error={password.error}
              autoComplete="current-password"
              InputProps={{
                startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
              }}
            />
            <FormControlLabel
              name="remember"
              control={<Checkbox value="remember" color="primary" />}
              label="Angemeldet bleiben"
            />
         
            <Button
              type="submit"
              fullWidth
              color='error'
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Anmelden
            </Button>
            <Grid container spacing={2}>
              <Grid item>
                <Link href="#" onClick={handleClickOpen} variant="body2">
                  Passwort vergessen?
                </Link>
              </Grid>
              <Grid item>
                <Link component={NavLink} to="/sign-up" variant="body2">
                  {"Sie haben keinen Account? Melden Sie sich an"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Finde Deinen Wettboss Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Gib deine E-Mail-Adresse ein.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="lostemail"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            helperText={lostpassword.error ? lostpassword.errorMsg : ""}
            error={lostpassword.error}
          />
        </DialogContent>
        <DialogActions>

        <LoadingButton
        onClick={findEmail}
        endIcon={<SendIcon />}
        loading={loadingBtn}
        loadingPosition="end"
        variant="outlined"
      >
    Senden
      </LoadingButton>
          {/* <Button onClick={findEmail}>Senden</Button> */}
        </DialogActions>
      </Dialog>

    </ThemeProvider>
  );
}