import React from "react";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Usernamevalidator } from "../../utils/Validator";
import { Navigate } from "react-router-dom";

const isAdmin = true;

const AdminLogin = () => {

    const username = useInputValidation("", Usernamevalidator);

    const handlesubmit=()=>{

    }
if(isAdmin) return <Navigate to={"/admin/dashboard"}/>

    return (
    <Container
    component={"main"}
    maxWidth="xs"
    sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
          <Typography textAlign={"center"} variant="h5">
            Admin Login
          </Typography>
          <form
            onSubmit={handlesubmit}
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <TextField
              required
              label="Secret Key"
              fullWidth
              margin="normal"
              variant="outlined"
              value={username.value}
              onChange={username.changeHandler}
            />

            <Button
              variant="contained"
              fullWidth
              color="primary"
              sx={{ marginTop: "1rem" }}
              type="submit"
            >
              Login
            </Button>
          </form>
        
    </Paper>
  </Container>
  )
}

export default AdminLogin