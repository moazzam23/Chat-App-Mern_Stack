import jwt from "jsonwebtoken";
import { ErrorHandler } from "../utils/utility.js";
import { TryCatch } from "./Error.js";

export const IsAuthenticated= TryCatch(async (req,res,next)=>{
const Token =req.cookies["Chatapp"];

if(!Token) return next( new ErrorHandler("Please Login First", 404))

const decodeddata = jwt.verify(Token, process.env.JWT_SECRET);
req.user = decodeddata._id;

next();

})