"use client";
import { useState } from "react";

import styles from "../../styles/Nav.module.css";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const [navStatus, setNavStatus] = useState(false);

  const handleClick = () => {
    setNavStatus((current) => !current);
  };

  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      <ul className={styles.deskNav}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <div aria-hidden="true" />
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div
        className={`${styles.overlay} ${navStatus ? styles.displayOverlay : ""}`}
        aria-hidden={!navStatus}
      />
      <ul
        className={`${styles.links} ${navStatus ? styles.open : ""}`}
        id="primary-mobile-nav"
      >
        {NAV_LINKS.map((link) => (
          <li onClick={handleClick} key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <button
          onClick={handleClick}
          aria-label="Close navigation menu"
          type="button"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </ul>

      <button
        className={styles.navButton}
        onClick={handleClick}
        aria-label={navStatus ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={navStatus}
        aria-controls="primary-mobile-nav"
        type="button"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;
