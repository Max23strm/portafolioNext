"use client";
import Image from "next/image";
import mail from "../../public/assets/email.png";
import phone from "../../public/assets/mobile.png";
import { Footer } from "../index";

import styles from "../../styles/Contact.module.css";
import LinkedIn from "../icons/LinkedIn";
import Github from "../icons/Github";
import Link from "next/link";
const Contact = () => {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Let&apos;s grab a coffee and chat</h2>
        <div className={styles.conjunto}>
            <div className={styles.element}>
            <Image src={mail} alt="" width={40} height={40} sizes="40px" />
            <a href="mailto:maximiliano.ovejak@gmail.com">
                maximiliano.ovejak@gmail.com
            </a>
            </div>
            <div className={styles.element}>
            <Image src={phone} alt="" width={40} height={40} sizes="40px" />
            <a href="tel:+529841323859">+52 984 132 3859</a>
            </div>
        </div>
        <div className={styles.icons}>
            <Link
                href="https://www.linkedin.com/in/m-ovejak/"
                target={"_blank"}
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
            >
                <LinkedIn />
            </Link>

            <Link
                href="https://github.com/Max23strm"
                rel="noopener noreferrer"
                target={"_blank"}
                aria-label="GitHub (opens in a new tab)"
            >
                <Github />
            </Link>
        </div>
        <Footer />
    </section>
  );
};

export default Contact;
