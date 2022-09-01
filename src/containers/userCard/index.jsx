import { CardMedia, Grid } from "@mui/material";
import React from "react";
import PrincipalInformation from "../../components/Searcher/PrincipalInformation";
import Description from "../Description";

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
      <Grid item xs={9}>
        <PrincipalInformation userState={userState} />
        <Description userState={userState} />
      </Grid>
    </Grid>
  );
};

export default UserCard;
