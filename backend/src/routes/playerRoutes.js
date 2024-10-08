import { Router } from "express";
import { getAllPlayers, getImagesByTeam, getPlayersByTeam } from "../controller/playerController.js";
import { createPlayer, getSinglePlayer } from "../controller/adminController.js";

// backend\src\controller\playerController.js

const router=Router()


router.route("/players").get(getAllPlayers)
router.route("/add").post(createPlayer)
router.route("/:teamName").get(getPlayersByTeam)
router.route("/:teamName").get(getImagesByTeam)
router.route("/:id").get(getSinglePlayer)


export default router;