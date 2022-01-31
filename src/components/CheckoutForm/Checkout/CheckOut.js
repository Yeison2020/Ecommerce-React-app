import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";
import useStyle from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../lib/commerce";
import { Link } from "react-router-dom";

const CheckOut = ({ cart, order, onCaptureCheckout, error }) => {
  const [shippingData, setShippingData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Shipping address", "Payment details"];
  const classes = useStyle();
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
        console.log(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  const firstname = "Yeison";
  const lastname = "Casado";

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank your for your purchase, `${order.customer.firstname} $
            {order.customer.lastname}`
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref: `${order.customer.reference}`
          </Typography>
        </div>
        <br />
        <Button variant="outlined" type="button" componet={Link} to="/">
          Back to Home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );
  if (error) {
    <>
      <Typography variant="h5">`Error ${error}`</Typography>
      <br />
      <Button variant="outlined" type="button" componet={Link} to="/">
        Back to Home
      </Button>
    </>;
  }
  const nextStep = () => setActiveStep((before) => before + 1);
  const backStep = () => setActiveStep((before) => before - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm
        checkoutToken={checkoutToken}
        next={next}
        nextStep={nextStep}
        backStep={backStep}
      />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
      />
    );
  return (
    <>
      <CssBaseline />
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
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default CheckOut;
