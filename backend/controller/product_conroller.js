import Product from '../model/product_model.js';

export const uploadingProduct = async (req, res) =>{
    const { productName, description, price, category } = req.body
    const image = req.file ? req.file.filename : null;

    if( !productName || !description || !price || !category){
       return res.status(400).json({ 
                success: false,
                message: "Please fill in all required fields" 
            });
    }

    if( !image){
       return res.status(400).json({ 
                success: false,
                message: "All almost 1 product picture" 
            });
    }
    
    const products = new Product({ productName, description, price, category, image })
    const savedProduct = await products.save();

      res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: savedProduct,
        });
}