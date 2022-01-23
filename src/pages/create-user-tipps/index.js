import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Container, Divider, Grid, IconButton, Tooltip, TextField } from '@mui/material';
import Step1 from './components/Step1';
import SendIcon from '@mui/icons-material/Send';
// @ts-ignore
import bg from '../../img/bg.jpg';
import InfoIcon from '@mui/icons-material/Info';

const steps = ['Wähle ein Spiel', 'Wähle einen Tipp', 'Tipp erstellen'];

export default function CreateUserTipps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%',bgcolor: "white" }}>
      <Stepper activeStep={activeStep} sx={{padding: "10px"}}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Divider />
      <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Zurück
            </Button>

            <Button
              color="inherit"
              sx={{ mr: 1 }}
            >
              Abbrechen
            </Button>
      <Divider />

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}

          {activeStep == 0 ? (
            <>
            <Box p={1}>
            <Grid container spacing={1}>
                <Grid item xs={7} sx={{textAlign: "left"}}>
                <Typography variant='body2'>Santos Laguna</Typography>
                <Typography variant='body2'>Tigres UANL</Typography>
                <Typography variant='caption'>17:00</Typography> 
                </Grid>
                <Grid item xs={5} sx={{textAlign: "center"}}>
                <Button onClick={handleNext} color="inherit" variant="contained">
                    Auswählen
                    </Button>
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1}>
                <Grid item xs={7} sx={{textAlign: "left"}}>
                <Typography variant='body2'>Santos Laguna</Typography>
                <Typography variant='body2'>Tigres UANL</Typography>
                <Typography variant='caption'>17:00</Typography>  
                </Grid>
                <Grid item xs={5} sx={{textAlign: "center"}}>
                <Button onClick={handleNext} sx={{marginTop: "5px"}} color="inherit" variant="contained">
                    Auswählen
                    </Button>
                </Grid>
            </Grid>
            <Divider />
            </Box>
            </>

          ) : ''}

        {activeStep == 1 ? (
            <>
            <Box sx={{background: `url(${bg}) center center`, backgroundSize: "cover",color: "white", boxShadow: 1}} p={1}>
                <Grid container spacing={2} style={{textAlign: "center"}}>


                        <Grid item xs={4}>
                        <img 
// @ts-ignore
                        src={'https://media.api-sports.io/football/teams/7763.png'} style={{maxWidth: "100%", height: "auto" }}/>
                       
                        </Grid>
                        <Grid item xs={4} style={{textAlign: "center"}}>
                            
                        </Grid>
                        <Grid item xs={4} style={{textAlign: "center"}}>
                        <img 
// @ts-ignore
                        src={'https://media.api-sports.io/football/teams/3476.png'} style={{maxWidth: "100%", height: "auto" }} />
    
                        </Grid>
                        <Grid item xs={4}>
                    {'Hyderabad'}
                    </Grid>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                    {'16:00'}

                    </Grid>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                    {'Jamshedpur'}

                    </Grid>
                </Grid> 
            </Box>
          <Container sx={{paddingTop: "8px", backgroundColor: "#f8f9fa"}}>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={6} md={6}>
                <Box sx={{boxShadow: 1, backgroundColor: "white"}}>
                  <Grid container sx={{borderBottom: "1px solid rgb(33, 37, 41)"}}>
                    <Grid item xs={11} sx={{padding: "12px 0px 0px 16px"}}>
                      Match Winner
                    </Grid>
                    <Grid item xs={1} sx={{padding: "12px 16px 12px 0px"}}>
                      <Tooltip title="Delete">
                        <InfoIcon />
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid container sx={{fontSize: "14px"}}>
                    <Grid item xs={6}  onClick={handleNext} sx={{backgroundColor: "#e9ecef", color: "#212529", borderRight: "1px solid rgb(33, 37, 41)", padding: "12px 16px 12px 16px"}}>
                    <Grid container>
                        <Grid item xs={8} sx={{textAlign: "left"}}>
                      2
                      </Grid>
                      <Grid item xs={4} sx={{textAlign: "right"}}>
                      <strong>1,50</strong>
                      </Grid>
                      </Grid>
                      
                    </Grid>
                    
                    <Grid item xs={6}  sx={{backgroundColor: "#e9ecef", color: "#212529",  padding: "12px 16px 12px 16px"}}>
                    <Grid container>
                        <Grid item xs={8} sx={{textAlign: "left"}}>
                      2
                      </Grid>
                      <Grid item xs={4} sx={{textAlign: "right"}}>
                      <strong>1,50</strong>
                      </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>  
              </Grid>

              <Grid item xs={12} lg={6} md={6}>
                <Box sx={{boxShadow: 1, backgroundColor: "white"}}>
                  <Grid container sx={{borderBottom: "1px solid rgb(33, 37, 41)"}}>
                    <Grid item xs={11} sx={{padding: "12px 0px 0px 16px"}}>
                      Match Winner
                    </Grid>
                    <Grid item xs={1} sx={{padding: "12px 16px 12px 0px"}}>
                      <Tooltip title="Delete">
                        <InfoIcon />
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid container sx={{fontSize: "14px"}}>
                    <Grid item xs={6}  sx={{backgroundColor: "#e9ecef", color: "#212529", borderRight: "1px solid rgb(33, 37, 41)", padding: "12px 16px 12px 16px"}}>
                    <Grid container>
                        <Grid item xs={8} sx={{textAlign: "left"}}>
                      2
                      </Grid>
                      <Grid item xs={4} sx={{textAlign: "right"}}>
                      <strong>1,50</strong>
                      </Grid>
                      </Grid>
                      
                    </Grid>
                    
                    <Grid item xs={6}  sx={{backgroundColor: "#e9ecef", color: "#212529",  padding: "12px 16px 12px 16px"}}>
                    <Grid container>
                        <Grid item xs={8} sx={{textAlign: "left"}}>
                      2
                      </Grid>
                      <Grid item xs={4} sx={{textAlign: "right"}}>
                      <strong>1,50</strong>
                      </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>  
              </Grid>

            </Grid>
          </Container>

            </>

        ) : ''}

{activeStep == 2 ? (
           <>
           <Box sx={{background: `url(${bg}) center center`, backgroundSize: "cover",color: "white", boxShadow: 1}} p={1}>
            <Grid container spacing={2} style={{textAlign: "center"}}>


                    <Grid item xs={4}>
                    <img 
// @ts-ignore
                    src={'https://media.api-sports.io/football/teams/7763.png'} style={{maxWidth: "100%", height: "auto" }}/>
                   
                    </Grid>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                        
                    </Grid>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                    <img 
// @ts-ignore
                    src={'https://media.api-sports.io/football/teams/3476.png'} style={{maxWidth: "100%", height: "auto" }} />

                    </Grid>
                    <Grid item xs={4}>
                {'Hyderabad'}
                </Grid>
                <Grid item xs={4} style={{textAlign: "center"}}>
                {'16:00'}

                </Grid>
                <Grid item xs={4} style={{textAlign: "center"}}>
                {'Jamshedpur'}

                </Grid>
            </Grid> 
        </Box>
    <Container sx={{paddingTop: "8px"}}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
        <strong>Tipp: </strong>
        </Grid>
        <Grid item xs={9}>
        <Chip
          label="Match Winner | 1"
          variant="outlined"
          onDelete={handleBack}
        />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={3}>
        <strong>Quote: </strong>
        </Grid>
        <Grid item xs={9}>
        <Chip
          label="1,23"
          variant="outlined"
          onDelete={handleBack}
        />
        </Grid>
      </Grid>
      <TextField
          id="outlined-multiline-flexible"
          label="Schreib deine Meinung"
          multiline
          maxRows={10}
          placeholder="Schreib deine Meinung"
          sx={{marginTop: "20px"}}
          helperText="Optional"
          fullWidth 
          inputProps={{ maxLength: 300 }}
        />



        <Button  sx={{margin: "20px 0px 20px 0px", width: "100%"}} variant="contained" disableElevation>
        Posten
      </Button>
    </Container>
    </>
) : ''

}
          {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Zurück
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Weiter'}
            </Button>
          </Box> */}
        </React.Fragment>
      )}
    </Box>
  );
}