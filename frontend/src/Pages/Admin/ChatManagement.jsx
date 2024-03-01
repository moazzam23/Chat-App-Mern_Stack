import React, { useState, useEffect } from "react";
import AdminLayout from "../../Components/Layout/AdminLayout";
import Table from "../../Components/Shared/Table";
import { Avatar, Stack } from "@mui/material";
import { SampleChatManagement, samplechat } from "../../Components/Constant/Sampledata";
import { ImageTransformation } from "../../Lib/Feature";
import Avatarcard from "../../Components/Shared/Avatarcard";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 100,
    renderCell: (params) => (
      <Avatarcard avatar={params.row.avatar} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "totalmembers",
    headerName: "Total Members",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    width: 200,
    renderCell:(params)=>(
      <Avatarcard max={100} avatar={params.row.members} />
    )
  },
  {
    field: "totalmessages",
    headerName: "Total Messages",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} >
          <Avatar src={params.row.creator.avatar} alt={params.row.creator.name} />
          <span>{params.row.creator.name}</span>
      </Stack>
      ),
  },
];

const ChatManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      SampleChatManagement.map((item) => ({
        ...item,
        id: item._id,
        avatar: item.avatar.map((i)=>ImageTransformation(i, 50)) ,
        members:item.members.map((i)=>ImageTransformation(i.avatar, 50)),
        creator:{
          name:item.creator.name,
          avatar:ImageTransformation(item.creator.avatar, 50),
        },
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"ALL Chat Details"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};



export default ChatManagement