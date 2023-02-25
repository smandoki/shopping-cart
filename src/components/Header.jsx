import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

function Header({ numItemsInCart }) {
  return (
    <header className={styles.header}>
      <h1>Fake Shop</h1>

      <nav className={styles.nav}>
        <Link className={styles.link} to='/'>
          Home
        </Link>
        <Link className={styles.link} to='/shop'>
          Shop
        </Link>
        <Link className={styles.link} to='/cart'>
          Cart ({numItemsInCart})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
