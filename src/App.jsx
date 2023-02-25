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
      const index = prevCart.findIndex((item) => item.id === id);

      //if product in cart, increment quanity by 1, else add item to cart
      //deep cloning new state at the same time
      if (index) {
        return prevCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return { ...item };
        });
      } else {
        return [...prevCart.map((item) => ({ ...item })), { id, quantity: 1 }];
      }
    });
  }

  function removeItemFromCart(id) {
    setCart((prevCart) => {
      //deep clone state then modify new state
      const newCart = prevCart.map((item) => ({ ...item }));
      const index = newCart.findIndex((item) => item.id === id);

      if (index) {
        newCart[index].quantity -= 1;

        if (newCart[index].quantity === 0) {
          newCart.splice(index, 1);
        }
      }

      return newCart;
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

        <Route
          path='/cart'
          element={
            <Cart
              products={products}
              cart={cart}
              handleAddItem={addItemToCart}
              handleRemoveItem={removeItemFromCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
