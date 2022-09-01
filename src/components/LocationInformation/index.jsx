import React from "react";
import { Grid, Stack } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Stack>
          <FmdGoodIcon />
          <Typography>{blog ? "No disponible" : blog}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          <Typography>
            {twitter_username ? "No disponible" : twitter_username}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          <Typography> {location ? "No disponible" : location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          <Typography> {company ? "No disponible" : company}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
