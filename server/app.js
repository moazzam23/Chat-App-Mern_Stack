import express from "express";
import UserRoute from "./routes/userroute.js"
import { ConnectDB } from "./utils/Features.js";
import dotenv from "dotenv";


dotenv.config({
    path:"./.env"
});
ConnectDB(process.env.MONGO_URL)


const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/user", UserRoute)

app.get("/",(req,res)=>{
 res.send("hello world")  
})


app.listen(3000,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})