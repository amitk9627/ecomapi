const mongoose = require('mongoose');

const productSchema = ({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    id: {
        type:String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },
    discountPercentage: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: false
    }

});
const Products=mongoose.model("products",productSchema);
module.exports=Products;