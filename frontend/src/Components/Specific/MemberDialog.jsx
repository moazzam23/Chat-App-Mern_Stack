import { Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React from 'react'
import { userdata } from '../Constant/Sampledata'
import Searchlistitem from '../Shared/Searchlistitem'
import { VerifiedUserTwoTone } from '@mui/icons-material'

const MemberDialog = ({addmember, islaodingmember,chatId}) => {
    const handleaddfriend=(_id)=>{
        console.log(_id)
    }
  return (
    <Dialog open >
        <Stack p={"1rem"} width={"20rem"} spacing={"1rem"}>
            <DialogTitle textAlign={"center"} > <VerifiedUserTwoTone/> Add Members</DialogTitle>
            <Stack>
                { userdata.length > 0 ?
                    userdata.map((item)=>(
                        <Searchlistitem key={item._id} user={item} handler={handleaddfriend} />
                    )):<Typography>No Members</Typography>
                }
            </Stack>
        </Stack>
    </Dialog>
  )
}

export default MemberDialog