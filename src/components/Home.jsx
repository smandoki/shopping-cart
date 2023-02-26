import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.info}>
        <h3>Highest quality fake electronics for the lowest prices!</h3>
        <Link className={styles.link} to='/shopping-cart/shop'>
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
