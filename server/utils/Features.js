import mongoose from "mongoose"
import JWT from "jsonwebtoken"

export const CookieOption={
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite:"none",
    secure:true,
    httpOnly:true,
}

export const ConnectDB=(url)=>{
    mongoose.connect(url, {
        dbName:"Chat_App"
    }).then((data)=>console.log(`MongoDB is connected ${data.connection.host}`)).catch((err)=>console.log(err))
}

export const SendToken=(user,statusCode,res, message)=>{
    const Token= JWT.sign({_id:user._id},process.env.JWT_SECRET,)

    return res.status(statusCode).cookie("Chatapp", Token, CookieOption ).json({
success:true,
        message  
    })
}