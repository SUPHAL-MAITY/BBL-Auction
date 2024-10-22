import { Router } from "express";
import { deleteController, getSinglePlayer } from "../controller/adminController.js";



const router=Router()



router.route("/:id").get(getSinglePlayer)
router.route("/:id").delete(deleteController)


export default router;