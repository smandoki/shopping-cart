import styles from '../styles/Cart.module.css';
import CartItem from './CartItem';

function Cart({ products, cart, handleAddItem, handleRemoveItem }) {
  return (
    <div className={styles.cart}>
      {Object.keys(cart).length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        Object.keys(cart).map((key) => {
          const product = products.find(
            (product) => product.id === Number(key)
          );

          return (
            <CartItem
              key={product.id}
              product={product}
              quantity={cart[key]}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
            />
          );
        })
      )}
      {Object.keys(cart).length > 0 ? (
        <h3 className={styles.total}>
          Total: $
          {Object.keys(cart).reduce((total, key) => {
            const product = products.find(
              (product) => product.id === Number(key)
            );
            return total + cart[key] * product.price;
          }, 0)}
        </h3>
      ) : null}
    </div>
  );
}

export default Cart;
