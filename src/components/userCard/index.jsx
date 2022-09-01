import React from "react";
import { Grid, CardMedia } from "@mui/material";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;
  return (
    <Grid container>
      <Grid item xs={3}>
        <CardMedia
          alt="GitHub User"
          component="img"
          title="asd"
          image={avatar_url}
        />
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
};

export default UserCard;
