import React from "react";
import AdminLayout from "../../Components/Layout/AdminLayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  AdminPanelSettings,
  ChatBubble,
  Group,
  Message,
  Notifications,
  Person,
} from "@mui/icons-material";
import moment from "moment";
import { Button, SearchField } from "../../Style/Stylecomponent";
import { DoughnutChart, LineChart } from "../../Components/Specific/Chart";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{ padding: "1rem", margin: "0.5rem 0", borderRadius: "1rem" }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AdminPanelSettings sx={{ fontSize: "2.5rem" }} />
        <SearchField placeholder="Search" />
        <Button>Add</Button>
        <Box flexGrow={"1"} />
        <Typography
          display={{
            xs: "none",
            md: "block",
          }}
          textAlign={"center"}
        >
          {moment().format("MMMM DD YYYY")}
        </Typography>
        <Notifications />
      </Stack>
    </Paper>
  );

  const Weigdets = (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Wigets title={"Users"} value={23} icon={<Person />} />
      <Wigets title={"Chats"} value={3} icon={<ChatBubble />} />
      <Wigets title={"Messages"} value={2323} icon={<Message />} />
    </Stack>
  );

  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}

        <Stack
          justifyContent={"center"}
          alignItems={{ xs: "center", lg: "stretch" }}
          flexWrap={"wrap"}
          sx={{ gap: "2rem" }}
          direction={{
            xs: "column",
            lg: "row",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "1rem 2rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "35rem",
            }}
          >
            <Typography variant="h5" margin={"1rem 0"}>
              Last Message
            </Typography>
            <LineChart value={[12, 0, 56, 23, 56, 576, 67, 5]} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              width: { xs: "100%", sm: "50%" },
              maxWidth: "20rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: "100%",
            }}
          >
            <DoughnutChart
              value={[21, 76]}
              labels={["Single Chat", "Group Chat"]}
            />
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"100%"}
              spacing={"1rem"}
              position={"absolute"}
            >
              <Group /> <Typography>OR</Typography> <Person />
            </Stack>
          </Paper>
        </Stack>
        {Weigdets}
      </Container>
    </AdminLayout>
  );
};

const Wigets = ({ title, value, icon }) => (
  <Paper
    elevation={3}
    sx={{
      padding: "1rem",
      margin: "1rem 0",
      borderRadius: "15px",
      width: "13rem",
    }}
  >
    {" "}
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          height: "4rem",
          width: "4rem",
          borderRadius: "50%",
          border: "3px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        {icon}
        <Typography fontWeight={"600"}>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
