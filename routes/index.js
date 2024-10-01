import { Router } from "express";
import userRouter from "../User/user.router";

const router = Router();

router.use("/users", userRouter);

export default router;
