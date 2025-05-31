import mongoose from "mongoose";

const subCetagorySchema = new mongoose.Schema({
    name : {
        type : String,
        default : true
    },
    description : {
        type : String,
        default : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category",
        require : true
    }

},{
    timestamps : true 
})

const subCetagoryModel = mongoose.models.subCetagory || mongoose.model("subCetagory", subCetagorySchema)
export default subCetagoryModel;