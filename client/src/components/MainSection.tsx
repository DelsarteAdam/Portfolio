import styles from "./MainSection.module.scss";

function MainSection() {
  return (
    <div className="main">
      <section className={styles.text}>
        <p translate="no">DELSARTE</p>
        <p translate="no">ADAM</p>
        <div className={styles.textLabel}>
          <p>Web Dev</p>
          <p>Graphist</p>
          <p>Photographer</p>
        </div>
      </section>
      <section className={styles.card}>
        <img src="/images/Auto_portrait_cut.webp" alt="portrait" />
      </section>
    </div>
  );
}

export default MainSection;
