import React from "react";
import Grid from "@material-ui/core";
import Product from "../Product/Product";
const product = [
  {
    id: 1,
    name: "shoes",
    description: "Running Shoes",
    price: "$50",
  },
  { id: 2, name: "macbook", description: "Apple macbook", price: "$1000" },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {product.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;