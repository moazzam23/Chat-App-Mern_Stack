import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { userdata } from '../Constant/Sampledata'
import Searchlistitem from '../Shared/Searchlistitem'
import { VerifiedUserTwoTone } from '@mui/icons-material'

const MemberDialog = ({addmember, islaodingmember,chatId}) => {
 
    const [user, setUser] = useState(userdata);
    const [selectedmembers, setSelectedmembers] = useState([]);
  
    let isloadingaddfriend = false;
  
    const handleaddfriend = async (_id) => {
     setSelectedmembers( (prev) => prev.includes(_id)? prev.filter(id => id !== _id) : [...prev, _id]);
    };
 
    

    const AddMemberhandler=(e)=>{}
    const CloseHandler=()=>{
setSelectedmembers([])
setUser([])
    }
  return (
    <Dialog open onClose={CloseHandler} >
        <Stack p={"1rem"} width={"20rem"} spacing={"1rem"}>
            <DialogTitle textAlign={"center"} > <VerifiedUserTwoTone/> Add Members</DialogTitle>
            <Stack>
                { user.length > 0 ?
                    user.map((item)=>(
                        <Searchlistitem key={item._id} user={item} handler={handleaddfriend}  isAdded={selectedmembers.includes(item._id)} />
                    )):<Typography>No Members</Typography>
                }
            </Stack>

<Stack direction={"row"} justifyContent={"space-around"} >
    <Button variant='contained' onClick={AddMemberhandler}  disabled={islaodingmember} >Add</Button>
    <Button variant='outlined' color='error' onClick={CloseHandler}  > Cancel</Button>
</Stack>

        </Stack>
    </Dialog>
  )
}

export default MemberDialog