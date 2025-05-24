import Product from '../model/product_model.js';


export const getProduct = async (req, res)=>{
    console.log(req.body)
    try {
        const allProduct = await Product.find();
         res.status(200).json(allProduct);
        
    } catch (error) {
        console.error('getProduct error:', error);
        res.status(500).json({ 
            success: false,
            message: "Internal server error",
            error: error.message 
        });
    }
}

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

export const editProduct = async (req, res)=>{
    try{

    const { id } = req.params;
    const { productName, description, price, category } = req.body
    const image = req.files ? req.files.map(file => file.filename) : [];


    const product = await Product.findById(id);
    console.log(product)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        // Update fields if provided
        if (productName) product.productName = productName;
        if (description) product.description = description;
        if (price) product.price = price;
        if (category) product.category = category;
        if (image.length > 0) product.image = image;

        const updatedProduct = await product.save();

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct
        })

    }catch (error) {
        console.error('editProduct error:', error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
    
}


export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        await product.deleteOne(); // or await Product.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    } catch (error) {
        console.error('deleteProduct error:', error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
