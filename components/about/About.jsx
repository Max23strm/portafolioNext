import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from '../../styles/About.module.css'


const About = ( {data} ) => {
  console.log(data)
  return (
    <section className={styles.about} id="about">
      <div>
        <h2 className={styles.headText}>
          I Know That <span>Good Dev</span> means <span>Good Business</span>
        </h2>
        <div className={styles.profiles}>

          {data && data.map((e,i)=>{
            return (
            <motion.div 
                className={styles.app__profileIitem}
                whileInView={{opacity:1}}
                whileHover={{scale:1.1}}
                transition={{duration:0.5, type: 'tween'}} 
                key={i}>
              <Image
                src={e.img}
                alt='image'
                width={190}
                height={170}
              />
              <h2 className={styles.boldText}>{e.name}</h2>
              <p className={styles.pText} >{e.body}</p>
            </motion.div>)
          })} 
          

        </div>
      </div>
    </section>
  )
}

export default About