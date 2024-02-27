import React from "react";
import Header from "./Header";
import Title from "../Shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../Specific/ChatList";
import { sampledata } from "../Constant/Sampledata";

const Applayout = () => (Wrappercomponent) => {
  return (props) => {
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
<ChatList chats={sampledata} chatId={"1"} />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}  >
            <Wrappercomponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{ display: { xs: "none", sm: "block" } ,
              padding: "2rem",
              bgcolor: "rgb(0,0,0,0.85)",
            }}
            
          >
            {" "}
            three
          </Grid>
        </Grid>
      </>
    );
  };
};

export default Applayout;
