import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Searcher from "./components/Searcher";
import { getGitHubUser } from "./services/users";
const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [notFound, setNotFounf] = useState(false);
  //console.log("inputUser", inputUser);
  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user);
    //console.log(userResponse);
    if (userState === "octocat") {
      localStorage.setItem("octocat", userResponse);
    }
    if (userResponse.message === "Not Found") {
      const { octocat } = localStorage;
      setInputUser(octocat);
      notFound(true);
    } else {
      setUserState(userResponse);
    }
  };
  console.log("userState", userState);
  useEffect(() => {
    gettinUser(inputUser);
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadious: "15px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  );
};

export default App;
