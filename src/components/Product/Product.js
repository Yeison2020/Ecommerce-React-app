import React from "react";

// Imported From Material UI
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconBotton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product }) => {
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image=""
        title={product.name}
      ></CardMedia>
      <CardContent>
        <div className={classes.content}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="h2" color="textSecondary">
          {product.description}
        </Typography>
        <CardActions disableSpacing className={classes.CardActions}>
          <IconBotton arial-label="Add to cart">
            <AddShoppingCart />
          </IconBotton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Product;
