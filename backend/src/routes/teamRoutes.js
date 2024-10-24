import { Router } from "express";
import {   getImagesByTeam} from "../controller/playerController.js";
import { deleteController, editPlayer } from "../controller/adminController.js";
import { getAllTeams } from "../controller/teamController.js";







const router=Router()



router.route("/all").get(getAllTeams)
router.route("/:teamName").get(getImagesByTeam)
router.route("/:id").post(editPlayer)
// router.route("/:id").delete(deleteController)





export default router;
