import { Router } from "express";
import { getSinglePlayer } from "../controller/adminController.js";



const router=Router()



router.route("/:id").get(getSinglePlayer)


export default router;