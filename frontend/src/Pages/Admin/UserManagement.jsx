import React, { useState, useEffect } from "react";
import AdminLayout from "../../Components/Layout/AdminLayout";
import Table from "../../Components/Shared/Table";
import { Avatar } from "@mui/material";
import { samplechat } from "../../Components/Constant/Sampledata";
import { ImageTransformation } from "../../Lib/Feature";

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
      <Avatar src={params.row.avatar} alt={params.row.name || ""} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "username",
    headerName: "UserName",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "groups",
    headerName: "Groups",
    headerClassName: "table-header",
    width: 150,
  },
];

const UserManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      samplechat.user.map((item) => ({
        ...item,
        id: item._id,
        avatar: ImageTransformation(item.avatar, 50),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"ALL USER'S"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default UserManagement;
