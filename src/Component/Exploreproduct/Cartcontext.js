// CartContext.js
import { createContext, useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

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
      console.log("Previous Cart State:", prevItems); // Log current state
      const existingItem = prevItems.find((item) => item.id === product.id);
  
      if (existingItem) {
        const updatedCart = prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        console.log("Updated Cart State (Existing):", updatedCart); // Log after update
        return updatedCart;
      } else {
        const newCart = [...prevItems, { ...product, quantity: 1 }];
        console.log("Updated Cart State (New Item):", newCart); // Log after adding
        return newCart;
      }
    });
  
    toast.success(`${product.name} has been added to the cart!`);
  };
  

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
