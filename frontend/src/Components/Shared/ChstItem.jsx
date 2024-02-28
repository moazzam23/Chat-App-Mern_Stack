import React, { memo } from "react";
import { Link } from "../../Style/Stylecomponent";
import { Box, Stack, Typography } from "@mui/material";
import Avatarcard from "./Avatarcard";

const ChstItem = ({
  avator = [],
  name,
  _id,
  sameSender,
  groupchat = false,
  isonline,
  newmessage,
  index = 0,
  handledeletechat,
}) => {
  return (
    <Link
      style={{
        padding:"0",
      }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handledeletechat(e, _id, groupchat)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          padding: "1rem",
          position: "relative",
        }}
      >
        <Avatarcard avatar={avator} />
        <Stack>
          <Typography>{name}</Typography>
          {newmessage && (
            <Typography
             sx={{
                fontSize:"12px",
                backgroundColor:"red",
                color:"white",
                padding:"0 .2rem",
                borderRadius:"20%",
             }}
            >
              {newmessage.count} New Message
            </Typography>
          )}
        </Stack>
        {isonline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChstItem);
