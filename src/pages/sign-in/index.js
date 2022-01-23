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
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { NavLink } from 'react-router-dom';

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

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme} >
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
          <Typography component="h1" variant="h5">
           Anmelden
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Benutzername"
              name="email"
              autoComplete="email"
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
              autoComplete="current-password"
              InputProps={{
                startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
              }}
            />
            <FormControlLabel
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
          Gib deine E-Mail-Adresse.
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Senden</Button>
        </DialogActions>
      </Dialog>

    </ThemeProvider>
  );
}