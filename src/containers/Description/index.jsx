import { Stack, Typography } from "@mui/material";
import React from "react";
import LocationInformation from "../../components/LocationInformation";
import PaperInformation from "../../components/PaperInformation";
const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
      <Stack>
        {bio ? (
          <Typography> {bio} </Typography>
        ) : (
          <Typography> Sin datos </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};

export default Description;
