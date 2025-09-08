
import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the API using the native fetch API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        // fetch doesn't automatically throw an error for bad responses (like 404 or 500)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    if (cart.find((item) => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Functions to handle modal visibility
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar cartCount={cart.length} openModal={openModal} />
      <main className="container mx-auto px-4 py-8">
        {loading && <p className="text-center text-xl">Loading products...</p>}
        {error && <p className="text-center text-xl text-red-500">{error}</p>}
        {!loading && !error && <ProductList products={products} addToCart={addToCart} />}
      </main>
      {isModalOpen && (
        <CartModal cartItems={cart} closeModal={closeModal} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

export default App;