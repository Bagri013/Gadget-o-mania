// AddToCartForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../header/index'
import Footer from '../Footer/index'

const AddToCartForm = () => {
  const [itemId, setItemId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
      let url = "http://localhost:3000/cart/add"
      const response = await axios.post(url, { itemId, quantity });

      if (response.data.success) {
        setMessage('Item added to cart');
      }
    } catch (error) {
      setMessage('Error adding item to cart');
    }
  };

  return (
    <div>
      <Header/>
      <h2>Add to Cart</h2>
      <form onSubmit={handleAddToCart}>
        <label>
          Item ID:
          <input
            type="text"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add to Cart</button>
      </form>
      <p>{message}</p>
      <Footer/>
    </div>
  );
};

export default AddToCartForm;
