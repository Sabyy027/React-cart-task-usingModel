

# Add to Cart Task Using Modal

## Project Overview
This ReactJS application fetches product data from the Fake Store API and allows users to add products to a cart using a modal interface. The UI is responsive and inspired by modern e-commerce sites.

## Features & Requirements
- Fetches products from the [Fake Store API](https://fakestoreapi.com/products).
- Displays products in a user-friendly, responsive grid layout.
- Each product card shows image, title, price, and an "Add to Cart" button.
- Clicking "Add to Cart" adds the product to the cart. If already added, an alert appears: **"Item already added to the cart"**.
- The Navbar displays the current cart item count.
- Clicking the "Cart" button opens a modal showing all cart items.
- The modal lists all products in the cart, each with a "Remove from Cart" button.
- Removing a product updates the cart count and contents instantly.
- All data (product details, cart state, etc.) is passed via props to child components.
- Cart value updates correctly when products are added or removed.
- Clean, readable, and well-documented code.
- Responsive design for desktop and mobile devices.

## Getting Started

### Installation
1. Clone the repository or download the source code.
2. Install dependencies:
	 npm install
3. Start the development server:
	 npm run dev
4. Open your browser at `http://localhost:5173` (or the port shown in your terminal).

## Folder Structure
```
src/
	components/
		Navbar.jsx
		ProductList.jsx
		ProductCard.jsx
		CartModal.jsx
		CartIcon.jsx
	App.jsx
public/
	vite.svg
index.html
vite.config.js
tailwind.config.js
```

