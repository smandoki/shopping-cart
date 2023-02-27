import styles from '../styles/Cart.module.css';

function Cart({ products, cart, handleAddItem, handleRemoveItem }) {
  const cartIsEmpty = Object.keys(cart).length === 0;

  return (
    <div className={styles.cart}>
      {cartIsEmpty && <h3>Cart is empty</h3>}

      {/* Render cart items into table */}
      {!cartIsEmpty && (
        <table className={styles.table}>
          <tbody>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            {Object.keys(cart).map((key) => {
              const product = products.find(
                (product) => product.id === Number(key)
              );
              return (
                <tr key={product.id}>
                  <td>
                    <img
                      className={styles.image}
                      src={product.image}
                      alt={product.title}
                    />
                  </td>
                  <td>
                    <h3 className={styles.title}>{product.title}</h3>
                  </td>
                  <td>
                    <p>${product.price}</p>
                  </td>
                  <td>
                    <span className={styles.quantity}>
                      <button
                        className={styles.button}
                        onClick={() => handleRemoveItem(product.id)}
                      >
                        -
                      </button>
                      <p>{cart[key]}</p>
                      <button
                        className={styles.button}
                        onClick={() => handleAddItem(product.id)}
                      >
                        +
                      </button>
                    </span>
                  </td>
                  <td>
                    <p>${product.price * cart[key]}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {/* Render cart total price */}
      {!cartIsEmpty && (
        <h3 className={styles.total}>
          Total: $
          {Object.keys(cart).reduce((total, key) => {
            const product = products.find(
              (product) => product.id === Number(key)
            );
            return total + cart[key] * product.price;
          }, 0)}
        </h3>
      )}
    </div>
  );
}

export default Cart;
