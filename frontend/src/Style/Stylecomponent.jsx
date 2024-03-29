import styled from "@emotion/styled";
import { Link as LinkComponent } from "react-router-dom";
import { Grey } from "../Components/Constant/Colors";


export const Visuallyhidden = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
    padding: 0, 
    width: 1,
})

export const Link = styled(LinkComponent)({
    textDecoration: "none",
    color: "black",
    padding: "1rem",
    '&:hover': {
      backgroundColor: "rgb(0,0,0,0.1)",
    }
  });

  export const InputBox= styled("input")({
width:"100%",
height:"100%",
border:"none",
outline:"none",
borderRadius:"1.5rem",
padding:"0 3rem",
backgroundColor:Grey,
  })

export const SearchField = styled("input")({
  padding:" 0.5rem 1rem",
  width:"20vmax",
  border:"none",
outline:"none",
borderRadius:"1.5rem",
backgroundColor:Grey,
fontSize:"1.1rem",
})

  export const Button = styled("button")({
    padding:" 0.5rem 2rem",
    border:"none",
  outline:"none",
  borderRadius:"1rem",
  fontSize:"1.1rem",
  cursor:"pointer",
  backgroundColor:"black",
  color:"white" 
  } )
  