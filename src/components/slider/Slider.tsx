import { useState } from "react";
import styles from "./Slider.module.css";

interface SlideData {
  id: number;
  img: string;
  title: string;
  body: string;
}

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: SlideData[] = [
    {
      id: 0,
      img: "./src/assets/slider-1.png",
      title: "Grow your practice at LVMH",
      body: "Turnkey office suites with complimentary concierge amenities for medical mental health and wellness practitioners.",
    },
    {
      id: 1,
      img: "./src/assets/slider-2.png",
      title: "South LA - Now Open!",
      body: "Space is limited. Book your tour today to learn how LVMH can support your practice.",
    },
    {
      id: 2,
      img: "./src/assets/slider-3.png",
      title:
        "Built to support the private practice and empower independent health practitioners to thrive",
      body: "LVMH. Practice here for good.",
    },
  ];

  const handleClick = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {slides.map((slide) => (
          <div
            className={
              currentSlide === slide.id
                ? `${styles.container} ${styles.isActive}`
                : styles.container
            }
            key={slide.id}
          >
            <div className={styles.slideDescription}>
              <h2>{slide.title}</h2>
              <p>{slide.body}</p>
            </div>
            <div className={styles.slideImg}>
              <img src={slide.img} alt="slider image" />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.rightSlider}>
        <div className={styles.rightButton}>
          <img
            src="./src/assets/arrow-right.svg"
            className={`${styles.arrow} ${styles.right}`}
            alt="arrow"
            onClick={() => handleClick()}
          />
        </div>
      </div>
      <span className={styles.indicators}>
        {slides.map((_, idx) => (
          <button
            onClick={() => setCurrentSlide(idx)}
            className={
              currentSlide === idx
                ? `${styles.indicator} ${styles.active}`
                : styles.indicator
            }
            key={idx}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default Slider;
