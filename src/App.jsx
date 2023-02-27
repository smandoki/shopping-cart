import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';
import useFetchProducts from './hooks/useFetchProducts';
import { useReducer } from 'react';
import cartReducer from './reducers/cartReducer';

function App() {
  const [products, isLoading] = useFetchProducts();
  const [cart, dispatch] = useReducer(cartReducer, {});

  //using reduce on an object rather than array
  const numItemsInCart = Object.keys(cart).reduce((total, key) => {
    return total + cart[key];
  }, 0);

  function addCartItem(id) {
    dispatch({
      type: 'add',
      id,
    });
  }

  function removeCartItem(id) {
    dispatch({
      type: 'remove',
      id,
    });
  }

  function deleteCartItem(id) {
    dispatch({
      type: 'delete',
      id,
    });
  }

  return (
    <>
      <Header numItemsInCart={numItemsInCart} />

      <Routes>
        <Route index path='/shopping-cart' element={<Home />} />

        <Route
          path='/shopping-cart/shop'
          element={
            <Shop
              products={products}
              isLoading={isLoading}
              handleAddItem={addCartItem}
            />
          }
        />

        <Route
          path='/shopping-cart/cart'
          element={
            <Cart
              products={products}
              cart={cart}
              handleAddItem={addCartItem}
              handleRemoveItem={removeCartItem}
              handleDeleteItem={deleteCartItem}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
