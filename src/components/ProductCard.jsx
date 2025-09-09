import '../App.css';
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white/80 rounded-2xl shadow-xl overflow-hidden flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-[#2874f0]/20 animate-fade-in">
      <div className="h-48 w-full flex items-center justify-center p-4 bg-gradient-to-t from-[#e3f0ff] to-white">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-[#2874f0] truncate" title={product.title}>
          {product.title}
        </h2>
        <p className="text-[#174ea6] mt-2 mb-4 flex-grow font-semibold">{`$${product.price}`}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-gradient-to-r from-[#2874f0] to-[#174ea6] text-white py-2 rounded-full font-bold shadow-lg hover:from-[#174ea6] hover:to-[#2874f0] transition-all duration-300 mt-auto focus:outline-none focus:ring-2 focus:ring-[#2874f0] animate-shadow-pulse"
          style={{ cursor: 'pointer' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
