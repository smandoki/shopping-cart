import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.info}>
        <h3>Highest quality fake electronics for the lowest prices!</h3>
        <a className={styles.link} href='/shop'>
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default Home;
