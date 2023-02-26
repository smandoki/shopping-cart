import styles from '../styles/Cart.module.css';
import CartItem from './CartItem';

function Cart({ products, cart, handleAddItem, handleRemoveItem }) {
  return (
    <div className={styles.cart}>
      {cart.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        cart.map((cartItem) => {
          const product = products.find(
            (product) => product.id === cartItem.id
          );

          return (
            <CartItem
              key={product.id}
              product={product}
              quantity={cartItem.quantity}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
            />
          );
        })
      )}
      {cart.length > 0 ? (
        <h3 className={styles.total}>
          Total: $
          {cart.reduce((total, cartItem) => {
            const product = products.find(
              (product) => product.id === cartItem.id
            );
            return total + cartItem.quantity * product.price;
          }, 0)}
        </h3>
      ) : null}
    </div>
  );
}

export default Cart;
