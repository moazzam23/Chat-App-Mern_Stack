import React from "react";
import Header from "./Header";
import Title from "../Shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../Specific/ChatList";
import { sampledata } from "../Constant/Sampledata";
import { useParams } from "react-router-dom";
import Profile from "../Specific/Profile";

const Applayout = () => (Wrappercomponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.id;

    const handleDeletechat = (e, _id, groupchat) => {
      e.preventDefault();
      console.log("Chat deleted", _id, groupchat);
    };

    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={sampledata}
              chatId={chatId}
              onlineUser={["1", "2"]}
              handleDeletechat={handleDeletechat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <Wrappercomponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", sm: "block" },
              padding: "2rem",
              bgcolor: "rgb(0,0,0,0.85)",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default Applayout;
