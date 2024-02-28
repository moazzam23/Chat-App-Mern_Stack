import { useInputValidation } from "6pp";
import { Search } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Searchlistitem from "../Shared/Searchlistitem";
import { userdata } from "../Constant/Sampledata";

const SearchDialogue = () => {
  const [user,setUser] = useState(userdata);

  let isloadingaddfriend=false;

  const handleaddfriend = async (_id) => {
    console.log(_id);
  }

  const search = useInputValidation("");

  return (
    <Dialog open>
      <Stack padding={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label={"Search"}
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {user.map((item) => (
          <Searchlistitem key={item._id} user={item} handler={handleaddfriend} isLoading={isloadingaddfriend} />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default SearchDialogue;
