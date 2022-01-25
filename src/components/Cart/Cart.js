import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Cart = ({ cart }) => {
  console.log(cart);

  // Here If the cart is not empty meaing the value is not falsy The cart will be false, because is not empty base on the Boolean
  const isEmpty = !cart.line_items?.length;
  console.log(isEmpty);
  const classes = useStyles();
  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have not Items in yoour shopping cart start adding some!
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}></Grid>
      </>
    );
  };
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
