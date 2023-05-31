import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Grid, withStyles, StepConnector, Divider, Card,CardContent,Typography } from '@material-ui/core';

import Campaign from './Campaign'
import MuiPage from "./MuiPages"
import  MuiPage2  from './MuiPage2';
import { MuiButton } from './MuiButton';
import { MuiAutoComplite } from './MuiAutoComplete';
const steps = [
  { label: 'Add leads', icon: '1' },
  { label: 'Create a sequence', icon: '2' },
  { label: 'Summarize and launch', icon: '3' }
];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <MuiPage  />
      case 1:
        return <MuiPage2  />
      case 2:
        return <MuiButton/>
      case 3:
        return <MuiAutoComplite />
      default:
        return null
    }
  }
  const renderContent = () => {
    return getStepContent(activeStep)
  }
  const StyledStepConnector = withStyles({
    line: {
      display: 'none', 
    },
  })(StepConnector);

 
  const StyledStepLabel = withStyles({
    label: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })(StepLabel);

  return (
    <Card>
      <Stepper activeStep={activeStep} alternativeLabel connector={<StyledStepConnector />}>
        {steps.map((step, index) => (
          
          <Step key={index} onClick={() => handleStepClick(index)}>
            <StyledStepLabel
              style={{ cursor: 'pointer' }}
              StepIconProps={{ icon: step.icon }} 
            >
               <Typography className='step-label'>{step.label}</Typography>
            </StyledStepLabel>
          </Step>
        ))}
      </Stepper>
      <Divider />
      <Grid >
        <Grid item>
         
          <CardContent>{renderContent()}</CardContent>
          <Grid container justifyContent="center">
          {/* <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            style={{ marginTop: '2rem' }}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button> */}
          </Grid>
        </Grid>
       
      </Grid>
    </Card>
  );
};

export default StepperComponent;
