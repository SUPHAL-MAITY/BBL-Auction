import { Router } from "express";
import {  getImagesByTeam} from "../controller/playerController.js";



const router=Router()




router.route("/:teamName").get(getImagesByTeam)


export default router;
