import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className="footer">
      <section className={styles.link}>
        <a href="#">github</a>
        <a href="#">instagram</a>
        <a href="#">linkedin</a>
      </section>
    </footer>
  );
}

export default Footer;
