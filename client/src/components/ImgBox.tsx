import styles from "./ImgBox.module.scss";

function ImgBox({ filePath }: { filePath: string }) {
  return (
    <div className={styles.container}>
      <img src={filePath} alt="portfolio image" />
    </div>
  );
}

export default ImgBox;
