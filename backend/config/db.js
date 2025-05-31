import mongoose from "mongoose";

 const conectBD = () =>{
    mongoose.connect(process.env.MONGO_URI); 
    mongoose.connection.on("connected",()=>{
        console.log("mongoose Connect")
    })
}

export default conectBD;