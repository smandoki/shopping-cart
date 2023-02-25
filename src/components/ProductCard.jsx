import styles from '../styles/ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p className={styles.price}>Price: ${product.price}</p>
      <button className={styles.button}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
