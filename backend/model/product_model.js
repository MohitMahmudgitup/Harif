import mongoose, { mongo } from 'mongoose';

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Product name is required'],
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative']
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "subCategory",
        required: true
    },
    image:{type: Array, required: true},

}, {
    timestamps: true
});

const Product = mongoose.models.product || mongoose.model('product', productSchema);

export default Product;
