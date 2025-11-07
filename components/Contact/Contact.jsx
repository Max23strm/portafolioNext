import { motion } from "framer-motion"
import Image from "next/image"
import mail from '../../public/assets/email.png'
import phone from '../../public/assets/mobile.png'
import {Footer} from "../index"

import styles from '../../styles/Contact.module.css'
import LinkedIn from "../icons/LinkedIn"
import Github from "../icons/Github"
import Link from "next/link"
const Contact = () => {
    return(
        <section className={styles.section} id="contact">
            <h2>Take A Coffe & Chat With Me</h2>
            <div className={styles.conjunto}>
                <motion.div
                    whileInView={{opacity:[0,1]}}
                    transition={{duration:0.5}} 
                    className={styles.element}>
                    <Image
                        src={mail}
                        alt="Email icon"
                        width={40}
                        />
                    <a href="mailto:maximiliano.ovejak@gmail.com">maximiliano.ovejak@gmail.com</a>
                </motion.div>
                <motion.div
                whileInView={{opacity:[0,1]}}
                transition={{duration:0.5}}
                className={styles.element}>
                    <Image
                        src={phone}
                        alt="Email icon"
                        width={40}
                        />
                    <a href="tel:+529841323859">+52 984 132 3859</a>
                </motion.div>
            </div>
            <motion className={styles.icons}>
            <Link href="https://www.linkedin.com/in/m-ovejak/" target={"_blank"} rel="noopener noreferrer">
                <LinkedIn/>
            </Link>

            <Link href="https://github.com/Max23strm" rel="noopener noreferrer" target={"_blank"}>
                <Github/>
            </Link>
            </motion>
            <Footer/>
        </section>
    )
}


export default Contact
