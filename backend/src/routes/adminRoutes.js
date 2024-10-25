import { Router } from "express";
import { deleteController, getAllSl, getSinglePlayer, playerCount } from "../controller/adminController.js";



const router=Router()

router.route("/count").get(playerCount)
router.route("/random").get(getAllSl)
router.route("/:id").get(getSinglePlayer)
router.route("/:id").delete(deleteController)



export default router;