import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({ heading, rows, columns, rowHeight = 52 }) => {
  return (
    <Container sx={{ height: "100vh" }}>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          margin: "auto",
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{ textTransform: "uppercase", margin: "2rem" }}
          variant="h4"
        >
          {heading}
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          style={{
            height: "80%",
        }}
        sx={{
            border:"none",
            ".table-header":{
                backgroundColor:"black",
                color:"white",
                textAlign:"center",
                fontWeight:"800"
            }
        }}
        />
      </Paper>
    </Container>
  );
};

export default Table;
