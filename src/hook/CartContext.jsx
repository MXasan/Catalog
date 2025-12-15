// src/hook/CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const STORAGE_KEY = "my_app_cart_v1"; // можно поменять название (версионирование)

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Ошибка чтения cart из localStorage:", e);
      return [];
    }
  });

  // Синхронизируем localStorage при изменении cart
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error("Ошибка записи cart в localStorage:", e);
    }
  }, [cart]);

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function decreaseQuantity(productId) {
    setCart(prev =>
      prev
        .map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  function removeFromCart(productId) {
    setCart(prev => prev.filter(item => item.id !== productId));
  }

//   // Установить конкретное количество (используем, например, в input)
//   function setQuantityForProduct(productId, newQty) {
//     const qty = Math.max(0, Math.floor(newQty)); // безопасно
//     setCart(prev => {
//       if (qty === 0) return prev.filter(item => item.id !== productId);
//       const exists = prev.find(i => i.id === productId);
//       if (exists) {
//         return prev.map(i => (i.id === productId ? { ...i, quantity: qty } : i));
//       }
//       // если продукта нет и newQty > 0 — добавить его (нужен объект продукта; тут не добавляем)
//       return prev;
//     });
//   }

//   console.log(cart)
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        // setQuantityForProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
