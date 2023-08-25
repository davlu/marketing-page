import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footerSubscription}>
        <p className={styles.heading}>STAY IN TOUCH</p>
        <p className={styles.text}>
          Join to learn about new locations & memberships.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className={styles.input}
            />
            <button> Subscribe </button>
          </form>
        </div>
      </section>
      <div className={styles.footerLinks}>
        <div className={styles.linkWrapper}>
          <div className={styles.linkItems}>
            <h2>Locations</h2>
            <NavLink to="/blah">Chelsea</NavLink>
            <NavLink to="/blah">Beverly Hills</NavLink>
            <NavLink to="/blah">Miami</NavLink>
            <NavLink to="/blah">Terms of Service</NavLink>
          </div>
          <div className={styles.linkItems}>
            <h2>About Us</h2>
            <NavLink to="/blah">How it works</NavLink>
            <NavLink to="/blah">Testimonials</NavLink>
            <NavLink to="/blah">Amenities</NavLink>
          </div>
        </div>
        <div className={styles.linkWrapper}>
          <div className={styles.linkItems}>
            <h2>Providers</h2>
            <NavLink to="/blah">Resources</NavLink>
            <NavLink to="/blah">EHR Guide</NavLink>
            <NavLink to="/blah">Overview</NavLink>
          </div>
          <div className={styles.linkItems}>
            <h2>Investors</h2>
            <NavLink to="/blah">Overview</NavLink>
            <NavLink to="/blah">Prospects</NavLink>
            <NavLink to="/blah">Investor Access</NavLink>
          </div>
        </div>
      </div>
      <section className={styles.socialMedia}>
        <div className={styles.socialMediaWrap}>
          <div className={styles.footerLogo}>
            <NavLink to="/" className="socialLogo">
              LVMH
            </NavLink>
          </div>
          <small className={styles.websiteRights}>© LVMH Group 2022</small>
          <div className={styles.socialIcons}>
            <NavLink
              to="/facebook"
              className={styles.socialIconLink}
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </NavLink>
            <NavLink
              to="/instagram"
              className={styles.socialIconLink}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </NavLink>
            <NavLink
              to="/twitter"
              className={styles.socialIconLink}
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </NavLink>
            <NavLink
              to="/linkedin"
              className={styles.socialIconLink}
              target="_blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </NavLink>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
