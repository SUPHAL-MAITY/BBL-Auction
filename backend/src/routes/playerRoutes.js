import { Router } from "express";
import { getAllPlayers, getPlayersByTeam } from "../controller/playerController.js";
import { createPlayer } from "../controller/adminController.js";

// backend\src\controller\playerController.js

const router=Router()


router.route("/players").get(getAllPlayers)
router.route("/add").post(createPlayer)
router.route("/:teamName").get(getPlayersByTeam)




export default router;