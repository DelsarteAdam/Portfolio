import styles from "./MainSection.module.scss";

function MainSection() {
  return (
    <div className="main">
      <section className={styles.text}>
        <p>text</p>
      </section>
      <section className={styles.card}>
        <p>card</p>
      </section>
    </div>
  );
}

export default MainSection;
