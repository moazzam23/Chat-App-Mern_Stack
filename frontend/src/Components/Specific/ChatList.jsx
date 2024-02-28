import { Stack } from "@mui/material";
import React from "react";
import ChstItem from "../Shared/ChstItem";

const ChatList = ({
  w = "100%",
  chatId,
  chats = [],
  onlineUser = [],
  messagealert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeletechat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((chat, index) => {
        const { _id, name, avator, members, groupchat } = chat;

        const newmessage = messagealert.find(({chatId}) => chatId === _id);

        const isonline = members?.some((member) => onlineUser.includes(_id));
        // const sameSender = chatId === _id;
        return (
          <ChstItem
          index={index}
            newmessage={newmessage}
            isonline={isonline}
            avator={avator}
            name={name}
            key={_id}
            groupchat={groupchat}
            _id={_id}
            sameSender={chatId === _id}
            handledeletechat={handleDeletechat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
