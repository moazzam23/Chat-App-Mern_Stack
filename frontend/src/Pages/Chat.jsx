import React, { useRef } from "react";
import Applayout from "../Components/Layout/Applayout";
import { IconButton, Stack } from "@mui/material";
import { Grey, Orange } from "../Components/Constant/Colors";
import { AttachFile, Send } from "@mui/icons-material";
import { InputBox } from "../Style/Stylecomponent";
import FileMenu from "../Components/Specific/FileMenu";

const Chat = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        spacing={"1rem"}
        height={"90%"}
        p={"1rem"}
        bgcolor={Grey}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      ></Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          p={"0.5rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton 
          sx={{
            position:"absolute",
            left:"1.5rem",
            rotate:"30deg"

          }}>
            <AttachFile />
          </IconButton>
          <InputBox placeholder="Type Message Here..." />

          <IconButton  
          type="submit"
sx={{
  bgcolor:Orange,
  color:"white",
  padding:"0.5rem",
  marginLeft:"0.7rem",
  "&:hover":{
    bgcolor:"error.dark",
    rotate:"-60deg"
  }
}}
          >
            <Send />
          </IconButton>
        </Stack>

      </form>
<FileMenu anchor={""}/>
    </>
  );
};

export default Applayout()(Chat);
