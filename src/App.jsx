import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import cartReducer from './reducers/cartReducer';
import { useQuery } from 'react-query';

function App() {
  const [cart, dispatch] = useReducer(cartReducer, {});
  const { isLoading, error, data } = useQuery('fetchProducts', () =>
    fetch('https://fakestoreapi.com/products/category/electronics').then(
      (res) => res.json()
    )
  );

  if (error) return <h1>{'Error has occurred: ' + error.message}</h1>;

  //using reduce on an object rather than array hence Object.keys()
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
              products={data}
              isLoading={isLoading}
              handleAddItem={addCartItem}
            />
          }
        />

        <Route
          path='/shopping-cart/cart'
          element={
            <Cart
              products={data}
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
