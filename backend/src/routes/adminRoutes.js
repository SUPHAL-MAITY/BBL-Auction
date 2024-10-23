import { Router } from "express";
import { deleteController, getAllSl, getSinglePlayer } from "../controller/adminController.js";



const router=Router()


router.route("/random").get(getAllSl)
router.route("/:id").get(getSinglePlayer)
router.route("/:id").delete(deleteController)



export default router;