import { Add, Remove } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import React, { memo } from "react";

const Searchlistitem = ({ user, handler, isLoading ,isAdded=false }) => {
  const { name, avatar, _id } = user;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        width={"100%"}
        spacing={"1rem"}
        alignItems={"center"}
      >
        <Avatar src={avatar} alt="pic" />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width:"100%"
          }}
        >
          {name}
        </Typography>
        <IconButton
          size="small"
          sx={{
            bgcolor:isAdded ? "error.main" : "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
          onClick={() => handler(_id)}
          disabled={isLoading}
        >
          {
            isAdded ? <Remove  /> : <Add/>
          }
        
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(Searchlistitem);
