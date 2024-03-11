import express from "express";
import { ConnectDB } from "./utils/Features.js";
import dotenv from "dotenv";
import { ErrorHandler } from "./middlewares/Error.js";
import cookieParser from "cookie-parser";

import UserRoute from "./routes/userroute.js"
import ChatRoute from "./routes/Chat.js"

dotenv.config({
    path:"./.env"
});
ConnectDB(process.env.MONGO_URL)


const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use("/user", UserRoute)
app.use("/chat", ChatRoute)

app.get("/",(req,res)=>{
 res.send("hello world")  
})

app.use(ErrorHandler)

app.listen(3000,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})