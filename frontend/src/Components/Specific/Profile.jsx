import { AlternateEmail, CalendarViewMonth, Face } from '@mui/icons-material'
import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import moment from 'moment'

const Profile = () => {
  return (
 <Stack direction={"column"} spacing={"2rem"} alignItems={"center"} >
    <Avatar sx={{
        height: 150,
        width: 150,
        marginBottom:"1rem",
        border:"4px solid white",
        objectFit:"contain"

    }}  src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg' />
    <Profilecard heading={"BIO"} text={"sahfjhfkjha"} />
    <Profilecard heading={"Username"} text={"Moazzambaig23"} Icon={<AlternateEmail/>} />
    <Profilecard heading={"Name"} text={"Moazzam Baig"}  Icon={<Face/>} />
    <Profilecard heading={"Joined On"} text={moment("Tue Feb 27 2024 15:40:42").fromNow()}  Icon={<CalendarViewMonth/>} />
 </Stack>
  )
}

const Profilecard=({text,heading,Icon})=>{
  return(
<Stack direction={"row"} alignItems={"center"} spacing={".5rem"} textAlign={"center"} color={"white"}>
{Icon && Icon}
<Stack>
    <Typography variant='body1' >{text}</Typography>
    <Typography  color={"grey"} variant='caption' >{heading}</Typography>
</Stack>
</Stack>
  )
}

export default Profile