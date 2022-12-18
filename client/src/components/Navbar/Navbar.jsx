import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import memories from "../../images/memories.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        memories
      </Typography>
      <img src={memories} className={classes.image} alt="icon" height="60" />
    </AppBar>
  );
};

export default Navbar;
