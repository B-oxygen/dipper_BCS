import styles from "../CustomPage.module.css";

const Clothes = ({ setClothesSort }) => {
  return (
    <div>
      <img
        src="https://iili.io/HIOr6hb.jpg"
        alt=""
        className={styles.background1}
        onClick={() => setClothesSort("https://iili.io/HIOr6hb.jpg")}
      />

      <img
        src="https://iili.io/HIOrgpe.jpg"
        alt=""
        className={styles.background2}
        onClick={() => setClothesSort("https://iili.io/HIOrgpe.jpg")}
      />

      <img
        src="https://iili.io/HIOrPQj.jpg"
        alt=""
        className={styles.background3}
        onClick={() => setClothesSort("https://iili.io/HIOrPQj.jpg")}
      />

      <img
        src="https://iili.io/HIOr4Tu.jpg"
        alt=""
        className={styles.background4}
        onClick={() => setClothesSort("https://iili.io/HIOr4Tu.jpg")}
      />
    </div>
  );
};

export default Clothes;
