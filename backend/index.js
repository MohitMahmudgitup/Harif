import express from 'express'
import fs from 'fs/promises';
import cors from "cors"
import "dotenv/config";
import  conectBD  from './config/db.js';
import userRouter from './routes/user_router.js';
import productRouter from './routes/product_router.js';
import subCetagoryRouter from './routes/subCategory_router.js';
import cetagoryRouter from './routes/category_router.js';


// app setup
const app = express()
const PORT = process.env.PORT || 3000;


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}))
app.use('/uploads', express.static('uploads'));
app.use('/productUploads', express.static('uploads'));


//Routers
app.use("/api/user", userRouter);
app.use("/api", productRouter);
app.use("/api", subCetagoryRouter)
app.use("/api", cetagoryRouter)

// upload and productUploads image files 
fs.readdir("uploads") 
  .then((files) => console.log( "Upload files : " + files.length) ) 
  .catch((err) => console.error(err));
  
fs.readdir("productUploads") 
  .then((files) => console.log( "productUploads files : " + files.length) ) 
  .catch((err) => console.error(err)); 


conectBD()
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
