import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem('orkidoz-cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('orkidoz-cart', JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product, size = 'One Size', qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id && i.size === size);
      if (existing) {
        return prev.map(i =>
          i.id === product.id && i.size === size
            ? { ...i, qty: i.qty + qty }
            : i
        );
      }
      return [...prev, { 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        original: product.original,
        cat: product.cat,
        image: product.images?.[0] || '',
        size, 
        qty 
      }];
    });
  }, []);

  const removeItem = useCallback((id, size) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.size === size)));
  }, []);

  const updateQty = useCallback((id, size, qty) => {
    if (qty < 1) return;
    setItems(prev =>
      prev.map(i =>
        i.id === id && i.size === size ? { ...i, qty } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, cartCount, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
