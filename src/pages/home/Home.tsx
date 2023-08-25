import React from "react";
import styles from "./Home.module.css";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";

const cards = [
  {
    id: 0,
    url: "./src/assets/office1.png",
    title: "Private Office",
    body: "A dedicated, private space ready to be customized for your practice or group, with access to shared amenities and common areas 24/7.",
  },
  {
    id: 1,
    url: "./src/assets/office2.png",
    title: "On Demand Medical",
    body: "HIPAA and OSHA compliant clinical space, booked by the day, with access to shared amenities and common areas during your visit.",
  },
  {
    id: 2,
    url: "./src/assets/office3.png",
    title: "On Demand Therapy",
    body: "Comfortable, sound-proof space, booked by the hour or by the day, with access to shared amenities and common areas during your visit.",
  },
  {
    id: 3,
    url: "./src/assets/office4.png",
    title: "On Demand Bodywork",
    body: "Calming, professional space, booked by the hour or by the day, with access to shared amenities and common areas during your visit.",
  },
];

function Home() {
  // return <Slider />;
  return (
    <div className={styles.home}>
      <Slider />
      <div className={styles.aboutWrapper}>
        <div className={styles.about}>
          <div className={styles.left}>
            <h2>About LVMH</h2>
            <p>
              Lina provides space, community and support for healthcare
              practitioners in private practice so they can focus on what they
              do best - high quality patient care.
            </p>
          </div>
          <div className={styles.right}>
            <img
              src="./src/assets/reception.png"
              alt="receptionist"
              className={styles.mainImg}
            />
          </div>
        </div>
      </div>
      <div className={styles.spaces}>
        <section className={styles.heading}>
          <h2>Space that fits your practice</h2>
          <p>
            Whether you need a few hours or a permanent home for your practice,
            our memberships give you the flexibility to practice on your terms.
          </p>
        </section>
        <section className={styles.cardGrid}>
          {cards.map((card) => (
            <Card
              key={card.id}
              url={card.url}
              title={card.title}
              body={card.body}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;
