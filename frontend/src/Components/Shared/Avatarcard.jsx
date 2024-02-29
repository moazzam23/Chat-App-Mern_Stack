import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";
import { ImageTransformation } from "../../Lib/Feature";

const Avatarcard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack position={"row"} spacing={0.5} >
      <AvatarGroup max={max} sx={{position:"relative"}} >
        <Box width={"5rem"} height={"3rem"}>
          {avatar.map((item, index) => (
            <Avatar
            key={Math.random() * 100}
              src={ImageTransformation(item)}
              alt={`avatar ${index}`}
              style={{ width: "3rem", height: "3rem",position:'absolute',
            left:{
              xs:`${0.5 + index}rem`,
              sm:`${index}rem`,
            }
            }}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default Avatarcard;
