const mongoose = require('mongoose');

const cartSchema = ({
   
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }

})
const Cart = mongoose.model('cart', cartSchema);
module.exports = Cart;