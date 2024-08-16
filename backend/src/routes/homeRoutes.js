import { Router } from "express";
import { getAllTeams } from "../controller/teamController.js";






const router=Router()



router.route("/all").get(getAllTeams)





export default router;


