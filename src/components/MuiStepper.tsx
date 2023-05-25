import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Grid, withStyles, StepConnector } from '@material-ui/core';

const steps = [
  { label: 'Add leads', icon: '1' },
  { label: 'Create a sequence', icon: '2' },
  { label: 'Summarize and launch', icon: '3' }
];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex:number) => {
    setActiveStep(stepIndex);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Custom styles for StepConnector
  const StyledStepConnector = withStyles({
    line: {
      display: 'none', // Hide the line connecting the steps
    },
  })(StepConnector);

  // Custom styles for StepLabel
  const StyledStepLabel = withStyles({
    label: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })(StepLabel);

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel connector={<StyledStepConnector />}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StyledStepLabel
              onClick={() => handleStepClick(index)}
              style={{ cursor: 'pointer' }}
              StepIconProps={{ icon: step.icon }}
            >
              {step.label}
            </StyledStepLabel>
          </Step>
        ))}
      </Stepper>

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepperComponent;
