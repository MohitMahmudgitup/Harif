import Product from '../model/product_model.js';

export const uploadingProduct = async (req, res) =>{
    const { productName, description, price, category } = req.body
    const image = req.files ? req.files.map(file => file.filename) : [];

    if( !productName || !description || !price || !category){
       return res.status(400).json({ 
                success: false,
                message: "Please fill in all required fields" 
            });
    }


    
    const products = new Product({ productName, description, price, category, image : [image] })
    const savedProduct = await products.save();

      res.status(201).json({
            success: true,
            message: "Product uploaded successfully",
            data: savedProduct,
        });
}