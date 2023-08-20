import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <span>LVMH</span>
          </NavLink>
        </div>
        <ul className={styles.links}>
          <li>
            Spaces <img src="src/assets/arrow-down.svg" />
          </li>
          <div
            className={`${styles.dropdownContent} ${styles.informationGrid}`}
          >
            <NavLink to="/private-office">
              <div>
                <h6>Private Offices</h6>
                <div>
                  A dedicated, private space ready to be customized for your
                  practice.
                </div>
              </div>
            </NavLink>
            <NavLink to="/on-demand/medical">
              <div>
                <h6>On Demand Medical</h6>
                <div>Pre-furnished medical space, available by the day.</div>
              </div>
            </NavLink>
            <NavLink to="/on-demand/therapy">
              <div>
                <h6>On Demand Therapy</h6>
                <div>
                  Pre-furnished therapy space, available by the hour or day.
                </div>
              </div>
            </NavLink>
            <NavLink to="/on-demand/bodywork">
              <div>
                <h6>On Demand Bodywork</h6>
                <div>
                  Pre-furnished bodywork space, available by the hour or day.
                </div>
              </div>
            </NavLink>
          </div>
          <li>
            Locations <img src="src/assets/arrow-down.svg" />
          </li>
          <div
            className={`${styles.dropdownContent} ${styles.informationGrid}`}
          >
            <div>
              <h6>New York City</h6>
              <ul>
                <NavLink to="/new-york-city/chelsea">
                  <li>Chelsea</li>
                </NavLink>
                <NavLink to="/new-york-city/grand-central">
                  <li>Grand Central</li>
                </NavLink>
                <li>Financial District</li>
              </ul>
            </div>
            <div>
              <h6>Florida</h6>
              <ul>
                <NavLink to="/florida/miami">
                  <li>Miami</li>
                </NavLink>
                <li>Tampa</li>
              </ul>
            </div>
            <div>
              <h6>California</h6>
              <ul>
                <li>LA - Beverly Hills</li>
                <li>LA - Long Beach</li>
                <li>Irvine</li>
                <li>Sacramento</li>
                <li>San Diego</li>
              </ul>
            </div>
          </div>
          <li>
            <NavLink to="/providers">Providers </NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <button>SCHEDULE A CALL</button>
        </ul>
      </div>
      <div
        className={styles.notificationBanner}
        data-aos="zoom-out"
        data-aos-duration="1500"
      >
        <p>
          New Location in South Los Angeles Now Open.
          <br />
          Call 1-800-133-4096 and Schedule a Tour Today!
        </p>
      </div>
    </div>
  );
}

export default Navbar;
