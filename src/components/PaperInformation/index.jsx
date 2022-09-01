import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
const PaperInformation = (props) => {
  const { userState } = props;
  const { followers, following, public_repos } = userState;
  return (
    <>
      <Paper>
        <Stack>
          <Stack>
            <Typography>Repos</Typography>
            <Typography>{public_repos}</Typography>
          </Stack>
          <Stack>
            <Typography>Followers</Typography>
            <Typography>{followers}</Typography>
          </Stack>
          <Stack>
            <Typography>Following</Typography>
            <Typography>{following}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default PaperInformation;
