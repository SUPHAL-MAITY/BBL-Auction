import { Router } from "express";
import {  loginController } from "../controller/authController.js";


const router=Router()


router.route("/login").post(loginController)


export default router;