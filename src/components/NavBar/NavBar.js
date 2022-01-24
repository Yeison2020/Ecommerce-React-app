import React from "react";
import {
  AppBar,
  ToolBar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { CallMissedSharp, ShoppingCart } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/styles";

const NavBar = () => {
  return (
    <div>
      <AppBar postion="fixed" className={classes.appBar} color="inherit">
        <ToolBar>
          <Typography></Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default NavBar;
