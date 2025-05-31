import express from "express"
import { getSubCetagoryModel, postSubCetagoryModel } from "../controller/subCategory_conroller.js"

const router = express.Router()

router.get("/getSubCetagory", getSubCetagoryModel);
router.post("/postSubCetagory/:category", postSubCetagoryModel);

export default router;