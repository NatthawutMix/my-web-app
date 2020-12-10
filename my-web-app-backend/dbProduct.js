import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    price: Number,
    stock: Number,
    gender: String,
    image: String,
    size: String,
    date: String,
   
})

export default mongoose.model('product', productSchema)