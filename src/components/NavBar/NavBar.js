import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "../../assets/Pinpoint-Color.svg";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = ({ totalItems }) => {
  const location = useLocation();

  const classes = useStyles();
  return (
    <div>
      <AppBar postion="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            color="inherit"
            component={NavLink}
            to="/"
          >
            <img
              src={logo}
              alt="ecommerce.js"
              height="25px"
              className={classes.image}
            />
            Ecommerce DR
          </Typography>
          <div className={classes.grow} />

          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                aria-label="Show Cart items"
                color="inherit"
                component={NavLink}
                to="/cart"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
