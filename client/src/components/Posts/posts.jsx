import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/post";
import useStyles from "./styles";
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((p) => (
        <Grid key={p._id} xs={12} sm={6} item>
          <Post post={p} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
