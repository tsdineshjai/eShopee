import express from "express";
import {
	adminUser,
	loginUser,
	registerUser,
} from "../controllers/userController";

//creates a  mini exprss app within a express applicaiton
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/adminLogin", adminUser);

export default userRouter;
