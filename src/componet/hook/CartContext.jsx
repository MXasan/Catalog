import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartProduct, setCartProduct] = useState()

    
    //   const [cart, setCart] = useState(() => {
    //     const saved = localStorage.getItem("cart");
    //     return saved ? JSON.parse(saved) : [];
    //   });

    //   useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart));
    //   }, [cart]);

    //   function addToCart(product) {
    //     setCart(prev => {
    //       const existing = prev.find(item => item.id === product.id);

    //       if (existing) {
    //         return prev.map(item =>
    //           item.id === product.id
    //             ? { ...item, qty: item.qty + 1 }
    //             : item
    //         );
    //       }

    //       return [...prev, { ...product, qty: 1 }];
    //     });
    //   }

    //   function clearCart() {
    //     setCart([]);
    //     localStorage.removeItem("cart");
    //   }

    return (
        <CartContext.Provider value={{ cartProduct, setCartProduct /* addToCart, clearCart*/ }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
