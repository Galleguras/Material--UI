import React from "react";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
      <Stack>
        {bio ? (
          <Typography> {bio} </Typography>
        ) : (
          <Typography> xxxxxxxxx </Typography>
        )}
      </Stack>
      {/*   <PaperInformation/>
      <LocationInformation/> */}
    </>
  );
};

export default Description;
