import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Searchlistitem from "../Shared/Searchlistitem";
import { userdata } from "../Constant/Sampledata";
import { GroupAddOutlined } from "@mui/icons-material";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const groupname = useInputValidation("");

  const [user, setUser] = useState(userdata);
  const [selectedmembers, setSelectedmembers] = useState([]);

  let isloadingaddfriend = false;

  const handleaddfriend = async (_id) => {
   setSelectedmembers( (prev) => prev.includes(_id)? prev.filter(id => id !== _id) : [...prev, _id]);
  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          <GroupAddOutlined /> New Group
        </DialogTitle>
        <TextField
          label={"Group Name"}
          value={groupname.value}
          onChange={groupname.changeHandler}
          size="small"
        />
        <Typography
          p={"10px 0"}
          variant="h5"
          sx={{ textDecoration: "underline" }}
        >
          {" "}
          Members{" "}
        </Typography>

        <Stack>
          {user.map((item) => (
            <Searchlistitem
              key={item._id}
              user={item}
              handler={handleaddfriend}
              isLoading={isloadingaddfriend}
              isAdded={selectedmembers.includes(item._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"} >
          <Button variant="contained" >Create</Button>
          <Button variant="outlined" color="error">
            Cancel{" "}
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
