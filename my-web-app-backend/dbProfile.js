import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    location: String,
    tel: String,
})

export default mongoose.model('profile', productSchema)