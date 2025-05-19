import express from 'express'
import { register, login, getUsers, deleteAccount } from "../controller/user_conroller.js"
import { imageUpload } from '../config/imageupload.js';
import { auth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', imageUpload, register)
router.post('/login', login)
router.get('/alluser', getUsers)
router.delete('/deleteaccount', auth, deleteAccount)

export default router;