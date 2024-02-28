import React from 'react'
import { ImageTransformation } from '../../Lib/Feature';
import { FileOpen } from '@mui/icons-material';

const RenderAttachments = (file, url) => {
    switch (file) {
        case "vedio":
        return  <vedio src={url} preload={"none"} width={"200px"} controls />
            
        case "image":
            return  <img src={ImageTransformation(url,200)}  alt='attachments' height={"150px"} width={"200px"}  style={{objectFit:"contain"}}/>
        
        case "audio":
            return  <audio src={url} preload={"none"} controls ></audio>
           
        
    
        default:
            return <FileOpen/>
           
    }
  
}

export default RenderAttachments