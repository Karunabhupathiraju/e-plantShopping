import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Adjust the path if necessary
import './ProductList.css'; // Adjust the path if necessary

const ProductList = () => {
  const products = useSelector(state => state.products); // Assuming products are stored in the state
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list-container">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product-item" key={product.id}>
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-cost">${product.cost}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
