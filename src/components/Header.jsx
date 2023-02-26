import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

function Header({ numItemsInCart }) {
  return (
    <header className={styles.header}>
      <h1>Fake Shop</h1>

      <nav className={styles.nav}>
        <Link className={styles.link} to='/shopping-cart'>
          Home
        </Link>
        <Link className={styles.link} to='/shopping-cart/shop'>
          Shop
        </Link>
        <Link className={styles.link} to='/shopping-cart/cart'>
          Cart ({numItemsInCart})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
