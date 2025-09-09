import '../App.css';
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4 animate-fade-in">
      {products.map((product, idx) => (
        <div key={product.id} className="transition-transform duration-500" style={{ transitionDelay: `${idx * 50}ms` }}>
          <ProductCard product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
