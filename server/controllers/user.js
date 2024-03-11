import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { CookieOption, SendToken } from "../utils/Features.js";
import { TryCatch } from "../middlewares/Error.js";
import { ErrorHandler } from "../utils/utility.js";

export const Register = async(req, res ,next)=>{
    const {name , username, password ,bio}= req.body;

    const avatar={
public_id:"123456789",
        url:"https://res.cloudinary.com/dvxvvgvjb/image/upload/v1675539448/avatar/avatar_1_qvkvj.png"
    }

const user = await User.create({
  name,
  username,
  bio,
  password,
  avatar, 
})

SendToken(user,201,res,"User Created")

}

export const login =TryCatch( async(req, res,next) => {
const {username, password} = req.body;

const user = await User.findOne({username}).select("+password");
if(!user) return next(new ErrorHandler("Invalid username or password",404))

const IsMatch= await compare(password,user.password);

if(!IsMatch) return next(new ErrorHandler("Invalid username or password",404))
SendToken(user,200,res,`Welcome ${user.name}`)
})

export const GetMyprofile =TryCatch( async(req, res,next) => {
    const user = await User.findById(req.user);

    return res.status(200).json({
      success:true,
      user  
    })
})

export const Logout = TryCatch(async(req,res,next)=>{

    return res.status(200).cookie("Chatapp","",{ ...CookieOption, maxAge:0}).json({
        success:true,
        message:"Logout Successfully",
    })
})

export const SearchUser=TryCatch(async(req,res,next)=>{
  
    const {name} = req.query;

    return res.status(200).json({
      success:true,

    })
})