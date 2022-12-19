import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import memories from "../../images/memories.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align="center">
          memories
        </Typography>
        <img src={memories} className={classes.image} alt="icon" height="60" />
      </div>
      <Toolbar>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              LogOut
            </Button>
          </div>
        ) : (
          // component={Link}
          <Button to="/auth" variant="contained" color="primary">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;