import express from 'express'
import cors from "cors"
import "dotenv/config";
import  conectBD  from './config/db.js';
// app setup
const app = express()
const PORT = process.env.PORT || 3000;


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}))

conectBD()
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
