import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';
import useFetchProducts from './hooks/useFetchProducts';
import { useState } from 'react';

function App() {
  const [products, isLoading] = useFetchProducts();
  const [cart, setCart] = useState([]);

  const numItemsInCart = cart.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);

  function addItemToCart(id) {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === id);

      //if product in cart, increment quanity by 1, else add item to cart
      if (item) {
        return prevCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return { ...item };
        });
      } else {
        return [...prevCart, { id, quantity: 1 }];
      }
    });
  }

  return (
    <>
      <Header numItemsInCart={numItemsInCart} />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/shop'
          element={
            <Shop
              products={products}
              isLoading={isLoading}
              handleAddItem={addItemToCart}
            />
          }
        />

        <Route path='/cart' element={<Cart products={products} />} />
      </Routes>
    </>
  );
}

export default App;
