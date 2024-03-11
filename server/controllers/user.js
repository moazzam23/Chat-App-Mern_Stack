import { User } from "../models/user.js";
import { SendToken } from "../utils/Features.js";

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

export const login = (req, res,next) => {
    console.log("hello world");
}