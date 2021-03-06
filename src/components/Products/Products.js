import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import useStyles from "./styles";

// Need to review how Each classes affect my layout
const Products = ({ product, handleAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={3}>
        {product.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} handleAddToCart={handleAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
