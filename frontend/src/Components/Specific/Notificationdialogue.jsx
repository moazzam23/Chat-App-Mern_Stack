import { Add, NotificationsOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { Samplenotifications } from "../Constant/Sampledata";

const Notificationdialogue = () => {
  const friendrequesthandler = ({ _id, accept }) => {
    console.log("requestsend");
  };

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"35rem"}>
        <DialogTitle textAlign={"center"}>
          {" "}
          <NotificationsOutlined /> Notifications
        </DialogTitle>
        {Samplenotifications.length > 0 ? (
          Samplenotifications.map((item) => (
            <Notificationitem
              key={item._id}
              sender={item.sender}
              _id={item._id}
              handler={friendrequesthandler}
            />
          ))
        ) : (
          <Typography>0 Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const Notificationitem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction={{ xs: "column", sm: "row" }}
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
          }}
        >
          {`${name}  send you a Friend Request`}
        </Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Button
            size="small"
            variant="contained"
            onClick={() => handler({ _id, accept: true })}
          >
            Accept
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => handler({ _id, accept: false })}
          >
            {" "}
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notificationdialogue;
