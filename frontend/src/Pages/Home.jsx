import React from 'react'
import Applayout from '../Components/Layout/Applayout'
import { Box, Typography } from '@mui/material';
import { Chat } from '@mui/icons-material';

const Home = () => {
  return (

    <Box
    display={"flex"} alignItems={"center"} justifyContent={"center"}
      sx={{
        backgroundImage: `url('/patternpad.png')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "calc(100vh - 4rem)",
      }}
    >
      <Typography p={"2rem"} variant='h3' textAlign={"center"}  >Select A Friend To Chat <Chat fontSize='6rem' /> </Typography>

    </Box>

  )
}

export default Applayout()(Home);