import { Delete } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import React from 'react'

const DeleteDialogue = ({open, handleclose,Deletehandler}) => {
  return (
    <Dialog open={open} onClose={handleclose}>
        <IconButton >
            <Delete color='error' />
        </IconButton>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
            <DialogContentText>Are you sure you want to delete?</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleclose}  variant='outlined' > No</Button>
            <Button onClick={Deletehandler} variant='outlined' color='error' > Yes</Button>
        </DialogActions>
    </Dialog>
  )
}

export default DeleteDialogue