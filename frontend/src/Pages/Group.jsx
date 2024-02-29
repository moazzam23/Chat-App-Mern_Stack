import {
  Add,
  Delete,
  Done,
  Edit,
  KeyboardBackspaceRounded,
  Menu,
  VerifiedOutlined,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, memo, useEffect, useState } from "react";
import { Grey, Orange, pink } from "../Components/Constant/Colors";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../Style/Stylecomponent";
import Avatarcard from "../Components/Shared/Avatarcard";
import { sampledata } from "../Components/Constant/Sampledata";
import MemberDialog from "../Components/Specific/MemberDialog";
import Searchlistitem from "../Components/Shared/Searchlistitem";

const DeleteDialogue = lazy(() =>
  import("../Components/Specific/DeleteDialogue")
);

const Group = () => {
  const navigate = useNavigate();
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const chatId = useSearchParams()[0].get("group");

  const [isEdit, setIsEdit] = useState(false);
  const [groupname, setGroupname] = useState("gjwhsjsa");
  const [groupnameupdate, setGroupnameupdate] = useState("");
  const [deletedialogue, setDeletedialogue] = useState(false);
  const isMember = false;

  const opendeletehandler = () => {
    setDeletedialogue(true);
  };

  const closedeletehandler = () => {
    setDeletedialogue("");
  };

  const deletegrouphandler = () => {
    console.log("deleted");
  };
  const addmemberhandler = () => {};

  const ButtonGroup = (
    <Stack
      direction={{ xs: "column-reverse", sm: "row" }}
      spacing={"2rem"}
      p={{ sm: "1rem", xs: "0", md: "1rem 4rem" }}
    >
      <Button variant="contained" size="large" onClick={addmemberhandler}>
        {" "}
        <Add /> Add Member
      </Button>
      <Button
        variant="contained"
        color="error"
        size="large"
        onClick={opendeletehandler}
      >
        {" "}
        <Delete /> Delete Group
      </Button>
    </Stack>
  );

  useEffect(() => {
   if(chatId){
    setGroupname(`group name ${chatId}`);
    setGroupnameupdate(`group name ${chatId}`);
   }

    return () => {
      setGroupname("");
      setGroupnameupdate("");
      setIsEdit(false)
    };
  }, [chatId]);

  function handleBack() {
    navigate("/");
  }

  const handleMobile = () => {
    setIsMobileMenu((prev) => !prev);
  };
  const hanldemenuclose = () => {
    setIsMobileMenu(false);
  };

  const handleupdatename = () => {
    setIsEdit(false);
  };

  const RemoveMemberhandler = ()=>{}

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"2rem"}
      spacing={"1rem"}
    >
      {isEdit ? (
        <>
          <TextField
            label={"Edit Group Name"}
            value={groupnameupdate}
            onChange={(e) => setGroupnameupdate(e.target.value)}
          />
          <IconButton
            sx={{
              bgcolor: Grey,
              "&:hover": {
                bgcolor: Orange,
                color: "white",
              },
            }}
            onClick={handleupdatename}
          >
            <Done />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h5">{groupname}</Typography>
          <IconButton
            sx={{
              bgcolor: Grey,
              "&:hover": {
                bgcolor: Orange,
                color: "white",
              },
            }}
            onClick={() => setIsEdit(true)}
          >
            {" "}
            <Edit />{" "}
          </IconButton>
        </>
      )}
    </Stack>
  );

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
        <GroupList chatId={chatId} myGroups={sampledata} />
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
        {Iconbtn}
          {groupname &&( 
        <>
            {GroupName}
          <Typography
            sx={{
              alignSelf: "flex-start",
              margin: "1rem",
            }}
            variant="h4"
          >
            {" "}
            <VerifiedOutlined /> Members{" "}
          </Typography>

          <Stack
            sx={{
              maxWidth: "45rem",
              width: "100%",
              boxSizing: "border-box",
              padding: {
                sm: "1rem",
                xs: "0",
                md: "1rem 2rem",
              },
              spacing: "2rem",
              // bgcolor: pink,
              height: "50vh",
              overflow: "auto",
            }}
          >
            {sampledata.map((item) => (
              <Searchlistitem
                user={item}
                key={item._id}
                isAdded
                styling={{
                  boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                  padding: "1rem 2rem",
                  borderRadius: "2rem",
                }}
                handler={RemoveMemberhandler}
              />
            ))}
          </Stack>
          {ButtonGroup}
        </>
          )}
      </Grid>

      {isMember && (
        <Suspense fallback={<Backdrop open />}>
          <MemberDialog />
        </Suspense>
      )}

      {deletedialogue && (
        <>
          {" "}
          <Suspense fallback={<Backdrop open />}>
            <DeleteDialogue
              open={true}
              handleclose={closedeletehandler}
              Deletehandler={deletegrouphandler}
            />
          </Suspense>
        </>
      )}

      <Drawer
        sx={{ display: { xs: "block", sm: "none" } }}
        open={isMobileMenu}
        onClose={hanldemenuclose}
      >
        <GroupList w="50vw" chatId={chatId} myGroups={sampledata} />
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w} height={"100vh"} sx={{overflow:"auto"}} >
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>
        No Groups
      </Typography>
    )}
  </Stack>
);

const GroupItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}  >
        <Avatarcard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Group;
