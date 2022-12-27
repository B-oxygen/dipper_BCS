import {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CustomPage.module.css";

const CustomPage: FunctionComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [clothesSort, setClothesSort] = useState("");
  const [pantsSort, setPantsSort] = useState("");
  const [isOpenBGC, setIsOpenBGC] = useState(true);
  const [isOpenClothes, setIsOpenClothes] = useState(true);
  const [isOpenPants, setIsOpenPants] = useState(true);

  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/route-following-page");
  }, [navigate]);

  const onStartGameClick = useCallback(() => {
    navigate("/route-following-page");
  }, [navigate]);

  const onShopButtonClick = useCallback(() => {
    navigate("/custom-page-background");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.customPageBackground}>
      <div className={styles.wrapper} />
      <button className={styles.button} autoFocus onClick={onButtonClick}>
        <img className={styles.logoExIcon} alt="" src="../logo-ex1@2x.png" />
        <div className={styles.logoText}>Dipper</div>
      </button>
      <button className={styles.startGame} autoFocus onClick={onStartGameClick}>
        <button
          className={styles.startGameChild}
          autoFocus
          onClick={onRectangleButtonClick}
        />
        <div className={styles.startGame1}>START GAME</div>
      </button>
      <div className={styles.icon}>
        <button
          className={styles.shopButton}
          autoFocus
          onClick={onShopButtonClick}
        >
          <button className={styles.shopButtonChild} autoFocus />
          <div className={styles.shop}>SHOP</div>
        </button>
        <button
          className={styles.rectangleParent}
          autoFocus
          onClick={onRectangleButton2Click}
        >
          <button
            className={styles.instanceChild}
            autoFocus
            data-animate-on-scroll
          />
          <div className={styles.myPage}>MY PAGE</div>
        </button>
      </div>

      <div>
        <img
          className={styles.pants}
          data-animate-on-scroll
          src=""
          alt="pants"
        />
        <img
          className={styles.clothes}
          data-animate-on-scroll
          src=""
          alt="top"
        />
        {/* <img className={styles.icon1} alt="" src="../-2@2x.png"></img> */}
        <img
          className={styles.icon1}
          data-animate-on-scroll
          src={pantsSort}
          alt="icon1"
        ></img>
      </div>

      <button
        className={styles.navBackground}
        autoFocus
        data-animate-on-scroll
      />
      {/* {isOpenBGC && <BGC setIdOpen={setIsOpenBGC} */}
      <button className={styles.navClothes} autoFocus data-animate-on-scroll />
      {/* {isOpenClothes && <BGC setIdOpen={setIsOpenClothes}/>} */}
      <button className={styles.navPants} autoFocus data-animate-on-scroll />
      {/* {isOpenPants && <BGC setIdOpen={setIsOpenPants}/>} */}

      <img
        src="https://iili.io/HIOr6hb.jpg"
        alt=""
        className={styles.background1}
        onClick={() => setPantsSort("https://iili.io/HIOr6hb.jpg")}
      />

      <img
        src="https://iili.io/HIOrgpe.jpg"
        alt=""
        className={styles.background2}
        onClick={() => setPantsSort("https://iili.io/HIOrgpe.jpg")}
      />

      <img
        src="https://iili.io/HIOrPQj.jpg"
        alt=""
        className={styles.background3}
        onClick={() => setPantsSort("https://iili.io/HIOrPQj.jpg")}
      />

      <img
        src="https://iili.io/HIOr4Tu.jpg"
        alt=""
        className={styles.background4}
        onClick={() => setPantsSort("https://iili.io/HIOr4Tu.jpg")}
      />
      <div className={styles.container} />
    </div>
  );
};

export default CustomPage;
