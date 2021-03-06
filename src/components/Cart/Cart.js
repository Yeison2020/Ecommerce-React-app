import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { NavLink } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateCartQuantity,
  handleEmptyCart,
  handleRemoveFromCart,
}) => {
  // Here If the cart is not empty meaing the value is not falsy The cart will be false, because is not empty base on the Boolean

  const classes = useStyles();
  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have not Items in yoour shopping cart start adding some!, &nbsp;
        <NavLink to="/" exact="true" end={true} className={classes.link}>
          Start adding some Items
        </NavLink>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items?.map((item) => {
            return (
              <Grid item xs={12} sm={4} key={item.id}>
                <CartItem
                  item={item}
                  handleUpdateCartQuantity={handleUpdateCartQuantity}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              </Grid>
            );
          })}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4" gutterBottom>
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
              component={NavLink}
              to="/checkout"
            >
              Check Out
            </Button>
          </div>
        </div>
      </>
    );
  };

  if (!cart.line_items) return "Loading...";
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
