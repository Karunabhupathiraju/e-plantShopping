import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './path_to_CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the subtotal for a particular plant type
  const calculateTotalCost = (item) => item.price * item.quantity;

  // Calculate the total cost of all items in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + calculateTotalCost(item), 0);
  };

  // Handle continue shopping
  const handleContinueShopping = () => {
    // Logic to navigate back to the plant listing page
  };

  // Handle incrementing quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle decrementing quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      handleRemove(item.name);
    }
  };

  // Handle removing an item from the cart
  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.name} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Subtotal: ${calculateTotalCost(item)}</p>
          <div>
            <button onClick={() => handleDecrement(item)}>-</button>
            <button onClick={() => handleIncrement(item)}>+</button>
            <button onClick={() => handleRemove(item.name)}>Remove</button>
          </div>
        </div>
      ))}
      <h2>Total: ${calculateTotalAmount()}</h2>
      <button onClick={handleContinueShopping}>Continue Shopping</button>
      <button onClick={() => alert('Functionality to be added for future reference')}>
        Checkout
      </button>
    </div>
  );
};

export default CartItem;
