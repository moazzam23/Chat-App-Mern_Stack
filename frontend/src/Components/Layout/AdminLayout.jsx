import { Box, Drawer, Grid, IconButton, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { pink } from "../Constant/Colors";
import { Close, Dashboard, ExitToApp, Group, Menu, Message, VerifiedUserRounded } from "@mui/icons-material";
import { useLocation, Link as LinkComponent } from "react-router-dom";


export const Link = styled(LinkComponent)({
    textDecoration: "none",
    color: "black",
    padding: "1rem",
    borderRadius:"15px",
    '&:hover': {
      backgroundColor: "rgb(0,0,0,0.1)",
    }
  });

 const Adminsidebar=[{
    name:'Dashboard',
    path:'/admin/dashboard',
    icon:<Dashboard/>
},
{
    name:'User',
    path:'/admin/user',
    icon:<VerifiedUserRounded/>
},
{
    name:'Group',
    path:'/admin/group',
    icon:<Group/>
},
{
    name:'Message',
    path:'/admin/message',
    icon:<Message/>
}
]

const Sidebar = ({w="100%"}) => {

    const location = useLocation();

    const LogoutHandler=()=>{

    }


  return(
    <Stack width={w} direction={"column"} spacing={"1rem"} padding={"2rem"} >
      <Stack direction={"row"} spacing={"1rem"} justifyContent={"center"}  alignItems={"center"}>
         <img style={{height:"50px", width:"50px", borderRadius:"10px"}}  src="/vite.jpg" alt="icon" />
        <Typography textTransform={"uppercase"} variant="h4" textAlign={"center"} >   Chat App </Typography>
        </Stack> 
        <Stack spacing={"1rem"}>
{
    Adminsidebar.map((i)=>(
        <Link key={i.path} to={i.path} sx={
            location.pathname === i.path && {
                bgcolor:"black", color:"white",
                "&:hover":{
                    color:"black"
                }
            }
        }  >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} >
{i.icon}
<Typography>{i.name}</Typography>
            </Stack>
        </Link>

    ))
}
<Link onClick={LogoutHandler} >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} >
<ExitToApp/>
<Typography>Logout</Typography>
            </Stack>
        </Link>
        </Stack>
         </Stack>
  );
};

const AdminLayout = ({ children }) => {

    const [isMobile, setIsMobile] = useState(false)

    const HandleMobile=()=> setIsMobile(!isMobile);

  return (
    <Grid container minHeight={"100vh"}>
    
    <Box sx={{ display: { xs: "block", md: "none" },position:"fixed",right:"1rem",top:"0.5rem" }}>
              <IconButton onClick={HandleMobile} >
                { isMobile ? <Close/> : <Menu/>  }
              </IconButton>
            </Box>
      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar />
      </Grid>

      <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: pink }}>
        {" "}
        {children}{" "}
      </Grid>

<Drawer  open={isMobile} onClose={()=>setIsMobile(false)} >
<Sidebar w="50vw" />
</Drawer>


    </Grid>
  );
};

export default AdminLayout;
