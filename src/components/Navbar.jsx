import '../App.css';
import React from 'react';
import CartIcon from './CartIcon';
import CartIcon2 from './CartIcon2';

const Navbar = ({ cartCount, openModal }) => {
  return (
  <nav className="bg-gradient-to-r from-[#2874f0] to-[#174ea6] shadow-lg sticky top-0 z-20 font-roboto">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg animate-fade-in">Store</h1>
        <div
          onClick={openModal}
          className="relative flex items-center gap-2 bg-white text-[#2874f0] px-5 py-2 rounded-full shadow-lg hover:bg-[#2874f0] hover:text-white transition-all duration-300 border-2 border-[#2874f0] focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
          style={{ cursor: 'pointer' }}
        >
          {cartCount > 0 ? <CartIcon2 size={28} /> : <CartIcon size={28} />}
          <span className="font-semibold">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#ff6161] text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold shadow-md animate-pop">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;