import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const Searcher = (prop) => {
  const { inputUser, setInputUser } = prop;
  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };
  // console.log("valueInput", valueInput);
  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <Stack direction="row" sx={{ marginTop: "30px", width: "80%" }}>
      <TextField
        id="outlined-basic"
        label="Github User"
        variant="outlined"
        placeholder="Octocat"
        sx={{ width: "90%" }}
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
      />
      <IconButton onClick={handleSubmit} size="small" sx={{ left: "-45px" }}>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;
