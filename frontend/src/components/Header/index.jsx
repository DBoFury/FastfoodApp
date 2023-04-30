import styles from "./header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrappLogo}>
        <div className={styles.logo}>
          <img src="/img/Logo.svg" alt="Logo" />
        </div>
        <Link to="/">
          <div className={styles.wrappTitle}>
            <h1>SIZZLE SNACK</h1>
            <h3>Швидко та смачно!</h3>
          </div>
        </Link>
      </div>
      <div className={styles.avatar}>
        <img src="/img/toggleLang.svg" alt="toggle Languages" />
        <img src="/img/avatar.svg" alt="Log In" />
      </div>
      <Link to="/cart">
        <button className={styles.cart}>
          <p className={styles.price}>1000 &#8372;</p>
          <img src="/img/cartIcon.svg" alt="" />
        </button>
      </Link>
    </header>
  );
}

export default Header;
