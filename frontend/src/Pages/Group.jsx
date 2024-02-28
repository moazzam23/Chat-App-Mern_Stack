import { KeyboardBackspaceRounded, Menu } from "@mui/icons-material";
import { Box, Drawer, Grid, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Orange, pink } from "../Components/Constant/Colors";
import { useNavigate } from "react-router-dom";

const Group = () => {
  const navigate = useNavigate();
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  function handleBack() {
    navigate("/");
  }

  const handleMobile = () => {
    setIsMobileMenu((prev) => !prev);
  };
  const hanldemenuclose = () => {
    setIsMobileMenu(false);
  };

  const Iconbtn = (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          <Menu />
        </IconButton>
      </Box>

      <Tooltip title={"Back"}>
        <IconButton
          sx={{
            position: "absolute",
            top: "1rem",
            left: "2rem",
            "&:hover": {
              backgroundColor: Orange,
            },
          }}
          onClick={handleBack}
        >
          <KeyboardBackspaceRounded />
        </IconButton>
      </Tooltip>
    </>
  );
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={4}
        sx={{ display: { xs: "none", sm: "block" } }}
        bgcolor={pink}
      >
        {" "}
        Group List
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem 3rem",
          position: "relative",
          backgroundColor: "#f0f0f0",
        }}
      >
        {" "}
        {Iconbtn} Group Chat
      </Grid>
<Drawer open={isMobileMenu} onClose={hanldemenuclose}  >
jsfhkjsdkfjk
</Drawer>

    </Grid>
  );
};

export default Group;
