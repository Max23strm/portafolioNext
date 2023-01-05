import Image from 'next/image'
import logoMax from '../../public/assets/logoMax.png'
import logoMaxDark from '../../public/assets/logoMaxDark.png'

import styles from '../../styles/Nav.module.css'
const Nav = () => {
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

        <ul>
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
    </nav>
  )
}

export default Nav