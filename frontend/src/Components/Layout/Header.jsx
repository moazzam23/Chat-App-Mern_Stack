import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add,
  Group,
  Logout,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
import React, { Suspense, lazy } from "react";
import { Orange } from "../Constant/Colors";
import { useNavigate } from "react-router-dom";

const SearchDialogue = lazy(() => import("../Specific/SearchDialogue"));
const Notificationdialogue = lazy(() =>
  import("../Specific/Notificationdialogue")
);
const NewGroup = lazy(() => import("../Specific/NewGroup"));

const Header = () => {
  const [isSearch, setIsSearch] = React.useState(false);
  const [isNotification, setIsNotification] = React.useState(false);
  const [isGroup, setIsGroup] = React.useState(false);

  const navigate = useNavigate();

  const handlemobile = () => {
    console.log("mobile");
  };
  const handlesearch = () => {
    setIsSearch((pre) => !pre);
  };
  const handleAdd = () => {
    setIsGroup((pre) => !pre);
  };
  const handlenotificatio = () => {
    setIsNotification((pre) => !pre);
  };
  const handlegroup = () => {
    navigate("/group");
  };
  const handlelogout = () => {
    navigate("/login");
  };
  return (
    <>
      <Box height={"4rem"} sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: Orange }} position="static">
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chat App
            </Typography>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handlemobile}>
                <Menu />
              </IconButton>
            </Box>

            <Box flexGrow={1} />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<Search />}
                onclick={handlesearch}
              />
              <IconBtn title={"New Group"} icon={<Add />} onclick={handleAdd} />
              <IconBtn
                title={"Manage Group"}
                icon={<Group />}
                onclick={handlegroup}
              />
              <IconBtn
                title={"Notification"}
                icon={<Notifications />}
                onclick={handlenotificatio}
              />
              <IconBtn
                title={"Logout"}
                icon={<Logout />}
                onclick={handlelogout}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialogue />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <Notificationdialogue />
        </Suspense>
      )}
      {isGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroup />
        </Suspense>
      )}
    </>
  );
};

export const IconBtn = ({ icon, title, onclick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onclick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
