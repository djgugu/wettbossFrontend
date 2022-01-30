import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Alert, Backdrop, Box, Button, CircularProgress, Collapse, Container, CssBaseline, TextField, Typography } from '@mui/material';

function PasswortResetPage(props) {
    const { key } = useParams();
    const [open, setOpen] = React.useState(false);
    const [collapse, setcollapse] =  React.useState(false);

    const [password, setpassword] = React.useState("");

    let navigate = useNavigate();

    useEffect(() => {
        setOpen(true)
        axios
        .get(`http://localhost/wordpress/wp-json/wettboss-api/v1/password-reset?key=`+key)
        .then((res) => {
        setOpen(false)
            if(res.data.status == "false") {
                navigate('/');
            }
            console.log(res.data)
        }).catch(function (error) {
    
            console.log(error);
        });
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setOpen(true)
        console.log(data.get('oldpass'))
        console.log(data.get('newpass'))
        if(data.get('oldpass') == "" || data.get('newpass') == "") {
        setOpen(false)
        setpassword("Passwörter sind nicht gleich!")
        } else {
            axios.post(`http://localhost/wordpress/wp-json/wettboss-api/v1/password-reset/create-password`,{
                oldpass: data.get('oldpass'),
                newpass: data.get('newpass'),
                key: key
            })
            .then((res) => {
                setOpen(false)
                console.log(res.data)
                if(res.data.status == "false") {
                    setpassword("Passwörter sind nicht gleich!")
                }else {
                setcollapse(true)

                    // navigate('/');
                }
            }).catch(function (error) {
        
                console.log(error);
            });
        }


        
        
    }
  return (
    <>
    
    <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
>
  <CircularProgress color="inherit" />
</Backdrop>
<Collapse in={collapse}>
              <Alert severity="success">Dein Passwort wurde zurückgesetzt.</Alert>
              <Alert severity="info">Melde dich <Link to="/sign-in">hier</Link> nochmal an.</Alert>

           </Collapse>

<Container component="main" maxWidth="md" sx={{bgcolor: "white", boxShadow: 2}}>
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
           Passwort zurücksetzen
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              type="password"
              margin="normal"
              required
              fullWidth
              id="oldpass"
              label="Neues Passwort"
              name="oldpass"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="newpass"
              label="Neues Passwort wiederholen"
              type="password"
              id="newpass"
              autoComplete="current-password"
            />    
            <Typography color="error">
            {password}
            </Typography>     
            <Button
              type="submit"
              fullWidth
              color='error'
              variant="contained"
              disabled={collapse}
              sx={{ mt: 3, mb: 2 }}
            >
              Passwort zurücksetzen
            </Button>
          </Box>
        </Box>
      
      
      </Container>
    </>
  );
}

PasswortResetPage.propTypes = {};

export default PasswortResetPage;
