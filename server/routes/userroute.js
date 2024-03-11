import express from "express";
import { GetMyprofile, Logout, Register, SearchUser, login } from "../controllers/user.js";
import { MulterUpload } from "../middlewares/Multer.js";
import { IsAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/register", MulterUpload.single("avatar"), Register)
router.post("/login", login)


router.get("/me",IsAuthenticated,GetMyprofile)
router.get("/logout", IsAuthenticated,Logout)
router.get ("/search", IsAuthenticated,SearchUser)

export default router;