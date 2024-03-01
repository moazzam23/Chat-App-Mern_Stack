import React, { useState, useEffect } from "react";
import AdminLayout from "../../Components/Layout/AdminLayout";
import Table from "../../Components/Shared/Table";
import { Avatar, Box, Stack } from "@mui/material";
import { samplechat } from "../../Components/Constant/Sampledata";
import { FileFormat, ImageTransformation } from "../../Lib/Feature";
import moment from "moment";
import RenderAttachments from "../../Components/Shared/RenderAttachments";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => {

const {attachments } = params.row;

return attachments?.length > 0 ? attachments.map((i)=> {
  const url = i.url;
  const file = FileFormat(url);
  return( <Box>
    <a href="url" download target="_blank" style={{
      color:"black"
    }} > {RenderAttachments(file,url)} </a>
  </Box>)

} ) :"No Attachment";

    }
  },
  {
    field: "content",
    headerName: "Content",
    headerClassName: "table-header",
    width: 300,
  },
  {
    field: "sender",
    headerName: "Send By",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} >
          <Avatar src={params.row.sender.avatar} alt={params.row.sender.name} />
          <span>{params.row.sender.name}</span>
      </Stack>
      ),
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "groupchat",
    headerName: "Group Chat",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    headerClassName: "table-header",
    width: 250,
  }
];

const GroupsManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      samplechat.message.map((item) => ({
        ...item,
        id: item._id,
        sender:{
          name:item.sender.name,
          avatar: ImageTransformation(item.sender.avatar, 50),
          createdAt:moment(item.createdAt).format("MMM DD YYYY"),
        }
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"ALL Groups"} columns={columns} rows={rows}  rowHeight={140}/>
    </AdminLayout>
  );
};


export default GroupsManagement