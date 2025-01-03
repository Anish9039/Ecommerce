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

  // const addToCart = (product) => {
  //   setCartItems((prevItems) => {
  //     const existingItem = prevItems.find((item) => item.id === product.id);
  //     if (existingItem) {
  //       return prevItems.map((item) =>
  //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //       );
  //     }
  //     return [...prevItems, { ...product, quantity: 1 }];
  //   });
  
  //   toast.success(`${product.name} added to the cart!`);
  // };
  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
  
      if (existingItem) {
        console.log("Updating existing product:", existingItem);
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        console.log("Adding new product:", product);
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    toast.success(`${product.name} added to the cart!`);

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
