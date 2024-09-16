import styles from "./Header.module.scss";

function Header() {
  return (
    <header className="header">
      <img src="#" alt="Logo" className={styles.logo} />
      <ul className={styles.list}>
        <li className={styles.orange}>Galery</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
