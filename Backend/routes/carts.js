// cartRoutes.js
const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// Add item to cart
router.post('/add', async (req, res) => {
  try {
    const { itemId, quantity } = req.body;

    // Check if item already exists in the cart
    let cartItem = await CartItem.findOne({ itemId });

    if (cartItem) {
      // Update the quantity of existing item
      cartItem.quantity += quantity;
    } else {
      // Create a new cart item
      cartItem = new CartItem({ itemId, quantity });
    }

    // Save the cart item
    await cartItem.save();

    res.json({ success: true, message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
