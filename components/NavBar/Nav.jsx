import Image from 'next/image'
import { useState } from 'react'
import logoMax from '../../public/assets/logoMax.png'
import logoMaxDark from '../../public/assets/logoMaxDarkG.png'
import { motion } from 'framer-motion'

import styles from '../../styles/Nav.module.css'
const Nav = () => {
  const [navStatus, setNavStatus] = useState(false)

  const handleClick = ()=>{
    setNavStatus(current => !current)
  }
  
  return (
    <nav className={styles.nav}>
        <Image
          src={logoMax}
          alt="Max"
          width={90}
          className={styles.logo}
        />
        <Image
          src={logoMaxDark}
          alt="Max"
          width={90}
          className={styles.logoDark}
        />

        <ul className={styles.deskNav}>
          <li>
            <div></div>
            <a href="#home">Home</a>
          </li>
          <li>
            <div></div>
            <a href="#about">About</a>
          </li>
          <li>
            <div></div>
            <a href="#work">Work</a>
          </li>
          <li>
            <div></div>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <div></div>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {navStatus && <div  className={`${styles.mobileNav}`}>
          <div className={styles.overlay}></div>

          <motion.ul whileInView={{x:[300, 0]}} transition={{duration:0.55, ease:'easeInOut'}} className={styles.links}>

            <li onClick={handleClick}>
              <a href="#home">Home</a>
            </li>
            <li onClick={handleClick}>
              <a href="#about">About</a>
            </li>
            <li onClick={handleClick}>
              <a href="#work">Work</a>
            </li>
            <li onClick={handleClick}>
              <a href="#skills">Skills</a>
            </li>
            <li onClick={handleClick}>
              <a href="#contact">Contact</a>
            </li>
            <button onClick={handleClick}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

            </button>
          </motion.ul>
        </div>
        }
        <button className={styles.navButton} onClick={handleClick}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
    </nav>
  )
}

export default Nav