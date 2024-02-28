import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { blue } from "../Constant/Colors";
import moment from "moment";
import { FileFormat } from "../../Lib/Feature";
import RenderAttachments from "./RenderAttachments";

const MessageCpmponent = ({ message, user }) => {
  const { content, sender, attachments = [], createdAt } = message;

  const sameSender = sender?._id === user?._id;

  const TimeAgo = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: sameSender ? "#BEE3FD" : "white",
        color: "black",
        padding: "0.5rem",
        borderRadius: "5px",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={blue} fontWeight={"600"} variant="caption">
          {" "}
          {sender.name}{" "}
        </Typography>
      )}

      {content && <Typography> {content} </Typography>}

      {/* {Attactments} */}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const File = FileFormat(url);
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{ color: "black" }}
              >
                {RenderAttachments(File, url)}
              </a>
            </Box>
          );
        })}

      {
        <Typography variant="caption" color={"text.secondary"}>
          {TimeAgo}
        </Typography>
      }
    </div>
  );
};

export default memo(MessageCpmponent);
