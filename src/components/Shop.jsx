import styles from '../styles/Shop.module.css';
import ProductCard from './ProductCard';

function Shop({ products, isLoading }) {
  console.log(products);
  return (
    <div className={styles.shop}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default Shop;
