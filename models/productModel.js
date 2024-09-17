import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    size: {
        type: Array,
        required: true
    },
    bestseller: {
        type: Boolean
    },
    date: {
        type: Number,
        default: Date.now
    }

})

const productModel =mongoose.model.Product ||  mongoose.model('product', productSchema);

export default productModel;