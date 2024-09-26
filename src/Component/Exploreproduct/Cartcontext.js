// CartContext.js
import { createContext, useState, useContext } from 'react';
import {  ToastContainer,toast } from 'react-toastify';



const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };
  
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        // Update quantity for existing item
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item to cart with initial quantity
        return [...prevItems, { ...product, quantity: +1 }];
      }
    });

    // Show success message
    toast.success(`${product.title} has been added to the cart!`);
  };
  

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
