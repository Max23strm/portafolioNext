import Image from 'next/image'
import {Bubble} from '../index'

import js from '../../public/assets/javascript.png'
import react from '../../public/assets/react.png'
import max from '../../public/assets/max.png'
import backgs from '../../public/assets/mainBack.png'

import styles from '../../styles/Hero.module.css'


const Hero = () => {
  return (
    <main className={styles.main}>
        <section className={styles.info}>
            <div className={styles.badge}>
                <div className={styles.mainBadge}>
                    <span>🚀</span>
                    <div className={styles.text}>
                        <p>Hello, I am</p>
                        <h1>Maximiliano</h1>

                    </div>
                </div>
                <div className={styles.tag}>
                    <p>FULLSTACK DEVELOPER</p>

                </div>
                </div>  
        </section>
        <section className={styles.img}>
            <Image
                src={max}
                alt="perfil"
            />
            <Image
                src={backgs}
                alt="back"
                className={styles.overlay}
            />
        </section>
        <section className={styles.circles}>
            <Bubble logo={react}/>
            <Bubble logo={js}/>
        
        </section>
    </main>
  )
}

export default Hero