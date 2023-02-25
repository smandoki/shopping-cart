import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';
import useFetchProducts from './hooks/useFetchProducts';
import { useState } from 'react';

function App() {
  const { products, isLoading } = useFetchProducts();
  // const { cart, setCart } = useState([]);

  // const numItemsInCart = cart.reduce((total, cartItem) => {
  //   return total + cartItem.quantity;
  // }, 0);

  return (
    <>
      <Header numItemsInCart={0} />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/shop'
          element={<Shop products={products} isLoading={isLoading} />}
        />

        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
