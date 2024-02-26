import React from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { Visuallyhidden } from "../Style/Stylecomponent";
import { useFileHandler, useInputValidation } from "6pp";
import { Usernamevalidator } from "../utils/Validator";

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", Usernamevalidator);
  const password = useInputValidation("");
  const avatar = useFileHandler("single");

  const handlelogin = (e) => {
    e.preventDefault();
  };

  const handleregister = (e) => {
    e.preventDefault();
  };

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
        {isLogin ? (
          <>
            <Typography textAlign={"center"} variant="h5">
              Login
            </Typography>
            <form
              onSubmit={handlelogin}
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                required
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                required
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
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
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button
                variant="text"
                fullWidth
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography textAlign={"center"} variant="h5">
              Register
            </Typography>
            <form
              onSubmit={handleregister}
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    height: "10rem",
                    width: "10rem",
                    objectFit: "cover",
                  }}
                  src={avatar.preview}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    right: "0",
                    bottom: "0",
                    backgroundColor: "white",
                  }}
                  component="label"
                >
                  <>
                    <CameraAlt />
                    <Visuallyhidden
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>
              {avatar.error && (
                <Typography
                  color={"error"}
                  variant="caption"
                  width={"fit-content"}
                  display={"block"}
                >
                  {" "}
                  {avatar.error}{" "}
                </Typography>
              )}
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                required
                value={name.value}
                onChange={name.changeHandler}
                variant="outlined"
              />
              <TextField
                label="Bio"
                fullWidth
                margin="normal"
                required
                value={bio.value}
                onChange={bio.changeHandler}
                variant="outlined"
              />
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                required
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color={"error"} variant="caption">
                  {" "}
                  {username.error}{" "}
                </Typography>
              )}

              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                required
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                sx={{ marginTop: "1rem" }}
                type="submit"
              >
                Register
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button variant="text" fullWidth onClick={() => setIsLogin(true)}>
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;