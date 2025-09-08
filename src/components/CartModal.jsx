import '../App.css';
import React from 'react';

const CartModal = ({ cartItems, closeModal, removeFromCart }) => {
  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-40 flex justify-center items-center animate-fade-in"
      style={{
        background: 'linear-gradient(120deg, rgba(40,116,240,0.25) 0%, rgba(255,255,255,0.15) 100%)',
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      }}
      onClick={closeModal}
    >
      {/* Modal Content */}
      <div
  className="bg-white/70 rounded-2xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] flex flex-col border border-[#2874f0]/30 backdrop-blur-xl animate-slide-up font-roboto"
  style={{ boxShadow: '0 8px 32px 0 rgba(40,116,240,0.2)', border: '1px solid rgba(40,116,240,0.18)' }}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#2874f0]/20">
          <h2 className="text-2xl font-extrabold text-[#2874f0] tracking-wide">Your Cart</h2>
          <button onClick={closeModal} className="text-2xl font-bold text-[#2874f0] hover:text-[#ff6161] transition-colors duration-200">&times;</button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-lg text-[#174ea6]">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-[#2874f0]/10 pb-2 animate-fade-in">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded-lg shadow" />
                    <div>
                      <h3 className="font-semibold text-[#2874f0]">{item.title}</h3>
                      <p className="text-[#174ea6] font-bold">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-[#ff6161] text-white px-4 py-1 rounded-full shadow hover:bg-[#d32f2f] transition-all duration-200 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#2874f0]/20 mt-auto">
            <h3 className="text-xl font-extrabold text-right text-[#2874f0]">
              Total: ${totalCost.toFixed(2)}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
