import styles from "../CustomPage.module.css";

const BackgroundColor = ({ setBackgroundColor }) => {
  return (
    <div>
      <img
        src="https://iili.io/HIOr6hb.jpg"
        alt=""
        className={styles.background1}
        onClick={() => setBackgroundColor("https://iili.io/HIOr6hb.jpg")}
      />

      <img
        src="https://iili.io/HIOrgpe.jpg"
        alt=""
        className={styles.background2}
        onClick={() => setBackgroundColor("https://iili.io/HIOrgpe.jpg")}
      />

      <img
        src="https://iili.io/HIOrPQj.jpg"
        alt=""
        className={styles.background3}
        onClick={() => setBackgroundColor("https://iili.io/HIOrPQj.jpg")}
      />

      <img
        src="https://iili.io/HIOr4Tu.jpg"
        alt=""
        className={styles.background4}
        onClick={() => setBackgroundColor("https://iili.io/HIOr4Tu.jpg")}
      />
    </div>
  );
};

export default BackgroundColor;
