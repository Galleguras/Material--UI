import React from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
const App = () => {
  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadious: "13px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher />
    </Container>
  );
};

export default App;
