import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem('cart'));

    if (cartProducts) {
      setCart(cartProducts);
    } else {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) localStorage.setItem('cart', JSON.stringify(cart));

    const totalPrice = cart.reduce((acum, product) => {
      const totalUntPrice = product.quantity * product.price;
      return totalUntPrice + acum;
    }, 0);

    setTotal(totalPrice);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const productIndex = prev.findIndex(({ id }) => id === product.id);
      if (productIndex === -1) {
        return [...prev, { ...product, quantity: 1 }];
      } else {
        const updatedProducts = [...prev];
        updatedProducts[productIndex] = {
          ...updatedProducts[productIndex],
          quantity: updatedProducts[productIndex].quantity + 1,
        };

        return updatedProducts;
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updatedProducts = prev.filter((product) => product.id !== id);

      if (updatedProducts.length === 0)
        localStorage.setItem('cart', JSON.stringify([]));

      return updatedProducts;
    });
  };

  const resetCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, resetCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
