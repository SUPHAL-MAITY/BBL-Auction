import { Router } from "express";
import { getAllPlayers } from "../controller/playerController.js";

// backend\src\controller\playerController.js

const router=Router()


router.route("/players").get(getAllPlayers)


export default router;