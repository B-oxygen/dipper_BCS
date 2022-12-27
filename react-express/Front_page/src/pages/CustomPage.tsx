import {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CustomPage.module.css";
import BackgroundColor from "./custompages/1.BackgroundColor";
import Skin from "./custompages/2.Skin";
import Clothes from "./custompages/7.Clothes";

const CustomPage: FunctionComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    "https://iili.io/HIOr6hb.jpg"
  );
  const [skinSort, setSkinSort] = useState("");
  const [clothesSort, setClothesSort] = useState("");

  const [isOpenBGC, setIsOpenBGC] = useState(true);
  const [isOpenSkin, setIsOpenSkin] = useState(false);
  const [isOpenClothes, setIsOpenClothes] = useState(false);

  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/route-page");
  }, [navigate]);

  const onStartGameClick = useCallback(() => {
    navigate("/route-page");
  }, [navigate]);

  const onShopButtonClick = useCallback(() => {
    navigate("/custom-page");
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
          className={styles.backgroundColor}
          data-animate-on-scroll
          src={backgroundColor}
          alt="backgroundColor"
        ></img>

        <img
          className={styles.skin}
          data-animate-on-scroll
          src={skinSort}
          alt="skin"
        />
      </div>

      <img
        className={styles.clothes}
        data-animate-on-scroll
        src={clothesSort}
        alt="clothes"
      />

      <button
        className={styles.navBackground}
        autoFocus
        data-animate-on-scroll
        onClick={() => {
          setIsOpenBGC(true);
          setIsOpenSkin(false);
          setIsOpenClothes(false);
        }}
      >
        background Color
      </button>
      <button
        className={styles.navSkin}
        autoFocus
        data-animate-on-scroll
        onClick={() => {
          setIsOpenBGC(false);
          setIsOpenSkin(true);
          setIsOpenClothes(false);
        }}
      >
        Skin
      </button>
      <button
        className={styles.navClothes}
        autoFocus
        data-animate-on-scroll
        onClick={() => {
          setIsOpenBGC(false);
          setIsOpenSkin(false);
          setIsOpenClothes(true);
        }}
      >
        Clothes
      </button>

      <div className={styles.container}>
        {isOpenBGC && (
          <BackgroundColor setBackgroundColor={setBackgroundColor} />
        )}
        {isOpenSkin && <Skin setSkinSort={setSkinSort} />}
        {isOpenClothes && <Clothes setClothesSort={setClothesSort} />}
      </div>
    </div>
  );
};

export default CustomPage;
