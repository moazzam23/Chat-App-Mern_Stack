import styled from "@emotion/styled";
import { Link as LinkComponent } from "react-router-dom";


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

export const Link = styled(LinkComponent)`
  textDecoration:"none";
  color:"black";
  padding:"1rem";
  &:hover{
    background-color:#F0F0F0;
  }`

