import subCetagoryModel from "../model/subCategory_model.js"

export const getSubCetagoryModel = (req, res) =>{
    subCetagoryModel.find()
    .then((data)=>{ res.json({data, message : "subCetagory get success" })})
    .catch((error) => { res.status(500).json({ message: "Failed to get subCetagory", error: error.message }); });
}


export const postSubCetagoryModel = async ( req, res ) =>{
    const { category } = req.params
    const { name, description } = req.body;
    
    if ( !name || !description ) res.json({ message : "Please fill up all name or description" });

    const subCetagory = new subCetagoryModel({ name, description, category });

    await subCetagory.save();

    res.json({
        subCetagory,
        message : "subCetagory post success"
    })
}

