import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "tailwindcss/tailwind.css"
import { CartProvider } from "./context/CartContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

