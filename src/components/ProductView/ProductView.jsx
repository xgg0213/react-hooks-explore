import React from 'react';
import { useEffect, useState } from 'react';
import ProductListItem from '../ProductListItem';
import ProductDetails from '../ProductDetails';
import './ProductView.css';

function ProductView({ products }) {

  // TODO: Replace with state variable
  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState('');

  // Automatically open side panel when a product is selected
  useEffect(() => {
    if (selectedProduct) {
      setSideOpen(true);  // Auto-open the side panel
    }
  }, [selectedProduct]);

  // Function to handle panel toggle
  useEffect(() => {
    if (!sideOpen) {
      setSelectedProduct('');
    }
  }, [sideOpen]);
  
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={selectedProduct.id === item.id}
              onClick={() => setSelectedProduct(item)}//console.log('SELECT PRODUCT', item)}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        {/* Conditionally rendering ProductDetails based on sideOpen */}
        <ProductDetails visible={sideOpen} product={selectedProduct}/>
      </div>
    </div>
  );
}

export default ProductView;
