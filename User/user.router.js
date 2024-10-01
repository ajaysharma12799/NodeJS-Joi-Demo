import { Router } from "express";
import { loginUser, registerUser } from "./user.controller.js";
import {
    loginUserValidationPolicy,
    registerUserValidationPolicy,
} from "./user.schema.js";

const userRouter = Router();

userRouter
    .post("/register", registerUserValidationPolicy, registerUser)
    .post("/login", loginUserValidationPolicy, loginUser);

export default userRouter;
