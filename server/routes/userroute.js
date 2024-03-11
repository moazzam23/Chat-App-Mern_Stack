import express from "express";
import { Register, login } from "../controllers/user.js";
import { MulterUpload } from "../middlewares/Multer.js";

const router = express.Router();

router.post("/register", MulterUpload.single("avatar"), Register)
router.post("/login", login)

export default router;