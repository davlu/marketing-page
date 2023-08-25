import { useState, useRef } from "react";
import styles from "./Slider.module.css";

export default function Slider() {
  const slides = [
    {
      id: 0,
      url: "./src/assets/slider-1.png",
      title: "Grow your practice at LVMH",
      body: "Turnkey office suites with complimentary concierge amenities for medical mental health and wellness practitioners.",
    },
    {
      id: 1,
      url: "./src/assets/slider-2.png",
      title: "South LA Office - Now Open!",
      body: "Space is limited. Book your tour today to learn how LVMH can support your practice.",
    },
    {
      id: 2,
      url: "./src/assets/slider-3.png",
      title:
        "Built to support the private practice and empower independent health practitioners to thrive",
      body: "LVMH. Practice here for good.",
    },
  ];

  // we transition from first slide -> second slide
  // hasScrolled is so that we dont do scrolling on the first render of the component
  const hasScrolled = useRef(false);
  const [secondSlideIndex, setSecondSlideIndex] = useState(0);
  const [firstSlideIndex, setFirstSlideIndex] = useState(slides.length - 1);

  const currentSlides = [slides[firstSlideIndex], slides[secondSlideIndex]];

  const nextSlide = () => {
    hasScrolled.current = true;
    const nextSlideIndex =
      secondSlideIndex === slides.length - 1 ? 0 : secondSlideIndex + 1;
    setFirstSlideIndex(secondSlideIndex);
    setSecondSlideIndex(nextSlideIndex);
  };

  const indicatorClick = (indicatorIdx: number) => {
    hasScrolled.current = true;
    setFirstSlideIndex(secondSlideIndex);
    setSecondSlideIndex(indicatorIdx);
  };

  return (
    <div className={styles.slider}>
      {!hasScrolled.current ? (
        <div
          className={`${styles.slide} ${styles.noAnimate}`}
          key={slides[0].id}
        >
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{slides[0].title}</h1>
            <h2 className={styles.body}>{slides[0].body}</h2>
          </div>
          <picture>
            <img
              className={styles.sliderImg}
              src={slides[0].url}
              alt="slide img"
            />
          </picture>
        </div>
      ) : (
        currentSlides.map((slide) => (
          <div className={styles.slide} key={slide.id}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>{slide.title}</h1>
              <h2 className={styles.body}>{slide.body}</h2>
            </div>
            <picture>
              <img
                className={styles.sliderImg}
                src={slide.url}
                alt="slide img"
              />
            </picture>
          </div>
        ))
      )}

      <span className={styles.indicators}>
        {slides.map((_, idx) => (
          <button
            onClick={() => {
              if (idx !== secondSlideIndex) {
                indicatorClick(idx);
              }
            }}
            className={
              secondSlideIndex === idx
                ? `${styles.indicator} ${styles.active}`
                : styles.indicator
            }
            key={idx}
          ></button>
        ))}
      </span>
      <span className={styles.rightSlider}>
        <div className={styles.rightButton}>
          <img
            src="./src/assets/arrow-right.svg"
            alt="arrow"
            onClick={() => nextSlide()}
          />
        </div>
      </span>
    </div>
  );
}
