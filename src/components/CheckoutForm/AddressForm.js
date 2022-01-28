import React, { useState, useEffect } from "react";
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
import { commerce } from "../../lib/commerce";
const AddressForm = ({ checkoutToken }) => {
  const methods = useForm();
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  //
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  //
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  // Functions to fecth using Commerce api

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivicions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  const options = shippingOptions.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
  }));

  console.log(shippingOptions);

  console.log(subdivicions);
  // Functions to fecth Countries data

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log(countries);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchShippingSubdivision = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };
  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };
  // Handling fetch for Countries data

  // 1 Needs to happend First
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  // 2 Need to happend after I get my country to get subdivision
  useEffect(() => {
    if (shippingCountry) fetchShippingSubdivision(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

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
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {subdivicions.map((subdivicions) => (
                  <MenuItem key={subdivicions.id} value={subdivicions.id}>
                    {subdivicions.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                value={shippingOption}
                fullWidth
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {options.map((options) => (
                  <MenuItem key={options.id} value={options.id}>
                    {options.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
