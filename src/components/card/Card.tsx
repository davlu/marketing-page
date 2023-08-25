import React from "react";
import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";

interface CardProps {
  url: string;
  title: string;
  body: string;
}
function Card({ url, title, body }: CardProps) {
  return (
    <div className={styles.card}>
      <NavLink to="/blah">
        <img src={url} alt="card image" className={styles.mainImg} />
      </NavLink>
      <section className={styles.cardBody}>
        <h4>{title}</h4>
        <p>{body}</p>
        <NavLink to="/blah">
          <div className={styles.learnMoreButton}>
            Learn More
            <img src="./src/assets/arrow-right.svg" alt="arrow" />
          </div>
        </NavLink>
      </section>
    </div>
  );
}

export default Card;
