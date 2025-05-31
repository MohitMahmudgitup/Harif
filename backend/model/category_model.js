import mongoose from "mongoose";

const cetagorySchema = new mongoose.Schema({
    name : {
        type : String,
        default : true
    },
    description : {
        type : String,
        default : true
    },

},{
    timestamps : true 
})

const cetagoryModel = mongoose.models.cetagory || mongoose.model("cetagory", cetagorySchema)
export default cetagoryModel;