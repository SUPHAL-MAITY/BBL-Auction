import { Router } from "express";
import { getAllPlayers, getImagesByTeam, getPlayersByTeam } from "../controller/playerController.js";

// backend\src\controller\playerController.js

const router=Router()


router.route("/players").get(getAllPlayers)
router.route("/:teamName").get(getPlayersByTeam)
router.route("/:teamName").get(getImagesByTeam)


export default router;