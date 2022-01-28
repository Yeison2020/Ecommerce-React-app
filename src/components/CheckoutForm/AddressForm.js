import React , {useState}from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import FormInput from "./ FormInput";
import { useForm, FormProvider } from "react-hook-form";
const AddressForm = () => {
  const methods = useForm();
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
//
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');


  //
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOptions, setShippingOptions] = useState('');
 
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput required name="firstname" label="first name" />
            <FormInput required name="lastname" label="Last name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={0} fullWidth onChange={}>
              <MenuItem key={} value={}>
              Select Me
              </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Country</InputLabel>
            <Select value={0} fullWidth onChange={}>
            <MenuItem key={} value={}>
            Select Me
            </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputLabel>Shipping Subdivision</InputLabel>
          <Select value={0} fullWidth onChange={}>
          <MenuItem key={} value={}>
          Select Me
          </MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputLabel>Shipping Options</InputLabel>
        <Select value={0} fullWidth onChange={}>
        <MenuItem key={} value={}>
        Select Me
        </MenuItem>
        </Select>
      </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
