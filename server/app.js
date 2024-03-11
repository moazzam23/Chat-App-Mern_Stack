import express from "express";
import UserRoute from "./routes/userroute.js"

const app=express();


app.use("/user", UserRoute)

app.get("/",(req,res)=>{
 res.send("hello world")  
})


app.listen(3000,()=>{
    console.log("Server is running at port 3000");
})