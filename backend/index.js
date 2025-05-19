import express from 'express'
import cors from "cors"
import "dotenv/config";
import  conectBD  from './config/db.js';
import userRouter from './routes/user_router.js';



// app setup
const app = express()
const PORT = process.env.PORT || 3000;


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}))
app.use('/uploads', express.static('uploads'));


//Routers
app.use("/api/user", userRouter);


conectBD()
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
