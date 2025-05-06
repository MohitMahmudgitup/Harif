import mongoose from "mongoose";


 const conectBD = async () =>{
    mongoose.connection.on("connected",()=>{
        console.log("MongoDB Connected");
    })
    try {
        await mongoose.connect(process.env.MONGO_URI);

    } catch (error) {
        console.log(error)
    }
}

export default conectBD;