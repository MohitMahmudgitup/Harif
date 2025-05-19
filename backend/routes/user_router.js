import express from 'express'
import { regisiter, login, getuser } from "../controller/user_conroller.js"
import { imageUpload } from '../config/imageupload.js';

const router = express.Router();



router.post('/register',imageUpload, regisiter)
router.post('/login', login)
router.get('/alluser', getuser)

export default router;