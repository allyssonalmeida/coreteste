import React from 'react';

export interface CartItemType {
  id: number
  name: string
  img: string
  price: number
  listprice: number | null
  quantity: number
}

export interface CartContextType{
  cartItems: CartItemType[]
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
}

export const CartContext = React.createContext<CartContextType | null>(null);

export const CartStorage: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [cartItems, setCartItems] = React.useState<CartItemType[]>([])

  React.useEffect(() => {
    const storeCart = JSON.parse(localStorage.getItem('cart') || '{}');

    if(cartItems.length === 0 && storeCart.length > 0){
      setCartItems(storeCart);
    }
  }, [])

  React.useEffect(() => {
    if(cartItems.length > 0){
      window.localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems])

  const addToCart = (item: CartItemType) => {
      setCartItems([...cartItems, item]);
  }

  const removeFromCart = () => {
    console.log("Remover Item do carrinho")
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}
