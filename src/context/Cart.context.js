import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const incrementCartCount = (product) => {
    console.log("Increment", cartCount);
    setCartCount(cartCount++);
    setCart([...cart, product]);
  };
  const decrementCartCount = (product) => {
    if (cartCount > 0) setCartCount(cartCount--);
    const newItem = cart.filter((item) => item !== product);
    setCart(newItem);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        cartCount: cartCount,
        increment: incrementCartCount,
        decrement: decrementCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
