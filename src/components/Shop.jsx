import styles from '../styles/Shop.module.css';
import ProductCard from './ProductCard';

function Shop({ products, isLoading, handleAddItem }) {
  return (
    <div className={styles.shop}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddItem={handleAddItem}
          />
        ))
      )}
    </div>
  );
}

export default Shop;
