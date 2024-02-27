import React, { memo } from 'react'
import { Link } from '../../Style/Stylecomponent'
import { Box, Stack, Typography } from '@mui/material'

const ChstItem = ({
    avator=[],
    name,
    _id,
    samesender,
    groupchat=false,
    isonline,
    newmessage,
    index=0,
    handledeletechatopen,
}) => {
    console.log(samesender)
  return (
    <Link  sx={{
        padding:"0"
    }} to={`/chat/${_id}`} onContextMenu={(e)=> handledeletechatopen(e, _id ,groupchat)}>
        <div style={{
            display:"flex",
            alignItems:"center",
            gap:"1rem",
            backgroundColor: samesender ? "black" : 'unset',
            color: samesender ? "white":"unset",
            padding:"1rem",
            position:"relative",
        }} >
        
            <Stack>
                <Typography>{name}</Typography>
                {newmessage && <Typography sx={{position:"absolute",top:"0",right:"0",backgroundColor:"red",color:"white",padding:"0.2rem 0.5rem",borderRadius:"50%"}}>{newmessage.count} New Message</Typography>}

</Stack>
{
    isonline && <Box 
    sx={{
        width:"10px",
        height:"10px",
        borderRadius:"50%",
        backgroundColor:"green",
        position:"absolute",
        top:"50%",
        right:"1rem",
        transform:"translateY(-50%)",


    }}
    
    />
}
        </div>
    </Link>
  )
}

export default memo(ChstItem)