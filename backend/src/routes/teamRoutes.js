import { Router } from "express";
import {   getImagesByTeam} from "../controller/playerController.js";
import { editPlayer } from "../controller/adminController.js";






const router=Router()




router.route("/:teamName").get(getImagesByTeam)
router.route("/:id").post(editPlayer)




export default router;
