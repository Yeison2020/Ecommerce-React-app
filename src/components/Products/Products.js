import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
const product = [
  {
    id: 1,
    name: "shoes",
    description: "Running Shoes",
    price: "$50",
    image:
      "https://cdn.vox-cdn.com/thumbor/pjcUw1kyqVQA8sbGFd1mz2g9pog=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg",
  },
  {
    id: 2,
    name: "macbook",
    description: "Apple macbook",
    price: "$1000",
    image: "https://www.notebookcheck.net/uploads/tx_nbc2/air13teaser.jpg",
  },
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
