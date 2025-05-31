import cetagoryModel from "../model/category_model.js"

export const getCetagoryModel =  (req,res)=>{
    cetagoryModel.find()
    .then((data)=>{res.json({ data })})
    .catch((error) => { res.status(500).json({ message: "Failed to get subCetagory", error: error.message }); });
}

export const postCetagoryModel = ( req, res ) =>{
    
    const { name, description } = req.body;
    
    if ( !name || !description ) res.json({ message : "Please fill up all name or description" });

    const cetagory = new cetagoryModel({ name, description });

    cetagory.save();

    res.json({ cetagory, message : "subCetagory post success" })

}