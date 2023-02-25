import styles from '../styles/Header.module.css';

function Header(props) {
  return (
    <header className={styles.header}>
      <h1>Fake Shop</h1>

      <nav className={styles.nav}>
        <a className={styles.link} href='/'>
          Home
        </a>
        <a className={styles.link} href='/shop'>
          Shop
        </a>
        <a className={styles.link} href='/cart'>
          Cart ({props.numItemsInCart})
        </a>
      </nav>
    </header>
  );
}

export default Header;
