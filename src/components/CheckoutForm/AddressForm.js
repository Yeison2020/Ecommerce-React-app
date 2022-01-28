import React from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import CustomTextField from "./CustomTextField";
import { useForm, FormProvider } from "react-hook-form";
const AddressForm = () => {
  const methods = useForm();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={() => {}}>
          <Grid container spacing={3}>
            <CustomTextField required name="firstname" label="firstname" />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
