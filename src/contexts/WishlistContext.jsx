import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem('orkidoz-wishlist');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('orkidoz-wishlist', JSON.stringify(items));
  }, [items]);

  const toggle = useCallback((product) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) {
        return prev.filter(i => i.id !== product.id);
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        original: product.original,
        cat: product.cat,
        images: product.images,
        sizes: product.sizes,
        description: product.description,
      }];
    });
  }, []);

  const isWishlisted = useCallback((id) => {
    return items.some(i => i.id === id);
  }, [items]);

  const wishlistCount = items.length;

  return (
    <WishlistContext.Provider value={{ items, toggle, isWishlisted, wishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
}
