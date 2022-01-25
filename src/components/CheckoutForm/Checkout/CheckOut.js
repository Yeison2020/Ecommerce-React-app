import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useStyle from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

const CheckOut = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Shipping address", "Payment details"];
  const classes = useStyle();

  const Confirmation = () => {
    return <div>Confimation</div>;
  };

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Check out
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => {
              return (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default CheckOut;
