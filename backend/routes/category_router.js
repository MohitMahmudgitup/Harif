import express from "express"
import { getCetagoryModel, postCetagoryModel } from "../controller/category_conroller.js"

const router = express.Router()

router.get("/getCetagory", getCetagoryModel);
router.post("/postCetagory", postCetagoryModel);

export default router;