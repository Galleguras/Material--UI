import React from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Searcher = () => {
  return (
    <Stack direction="row" sx={{ marginTop: "30px", width: "80%" }}>
      <TextField
        id="outlined-basic"
        label="Github User"
        variant="outlined"
        placeholder="Octocat"
        sx={{ width: "90%" }}
        size="small"
      />
      <IconButton size="small" sx={{ left: "-45px" }}>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;
