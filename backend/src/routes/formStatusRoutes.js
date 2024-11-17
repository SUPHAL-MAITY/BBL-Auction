import { Router } from "express";
import { createSettingController, settingGetController, settingToggleController } from "../controller/formController.js" ;



const router=Router()


router.route("/get-status").get(settingGetController)
router.route("/create-status").post(createSettingController)
router.route("/toggle-status").post(settingToggleController)


export default router;