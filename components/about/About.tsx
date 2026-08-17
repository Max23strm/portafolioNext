"use client";
import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from '../../styles/About.module.css'
import { About as AboutType } from '@/app/types';

const About = ( {data}: {data: AboutType[]}) => {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-heading">
      <div>
        <h2 id="about-heading" className={styles.headText}>
          I Know That <span>Good Dev</span> means <span>Good Business</span>
        </h2>
        <div className={styles.profiles}>

          {data && data.map((e,i)=>{
            return (
            <motion.div 
                className={styles.app__profileIitem}
                key={i}>
              <Image
                src={e.img}
                alt={e.name}
                width={380}
                height={340}
                sizes="(max-width: 768px) 100vw, 33vw"
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