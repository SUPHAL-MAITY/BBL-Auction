import { Router } from "express";
import { getAllTeamDetails } from "../controller/teamController.js";






const router=Router()



// router.route("/all").get(getAllTeams)
router.route("/teams").get(getAllTeamDetails)






export default router;


