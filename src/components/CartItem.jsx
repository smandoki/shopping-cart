import styles from '../styles/CartItem.module.css';

function CartItem({ product, quantity, handleAddItem, handleRemoveItem }) {
  return (
    <div className={styles.cartItem}>
      <img className={styles.image} src={product.image} alt={product.title} />
      <h3 className={styles.title}>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <span className={styles.quantity}>
        <button
          className={styles.button}
          onClick={() => handleRemoveItem(product.id)}
        >
          -
        </button>
        <p>Qty: {quantity}</p>
        <button
          className={styles.button}
          onClick={() => handleAddItem(product.id)}
        >
          +
        </button>
      </span>
      <p>Subtotal: ${product.price * quantity}</p>
    </div>
  );
}

export default CartItem;
