import '../App.css';
import React from 'react';

const CartIcon = ({ size = 24, color = '#2874f0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.16 14l.94-2h7.72l.94 2H7.16zM6.16 12l-1.72-4H20v2H7.16z" fill={color}/>
    <path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default CartIcon;
