
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/Porfolio.module.css'


const Portfolio = () => {
    const trabajos=[
        {
            titulo: "Fullstack Development",
            desc:'I am a Full Stack developer with a passion for building functional applications and learning new methodologies.',
            link:"",
            repo:"",
            tag:["Mobile App","Wev App"],
            img:'/../public/assets/about04.png',
        },
        
    ]




    const [activeFilter, setActiveFilter] = useState('All')
    const [animateCard, setAnimateCard] = useState({y:0, opacity:1})
    const handleWorkFilter=(i)=>{

    }
    return (

        <section className={styles.section}>
            <h2 className={styles.headText}>My creative <span>Portfolio</span> section</h2>

            <div className={styles.filtro}>
                {['UI/UX', 'Web App', 'Mobile App','All'].map((e,i)=>{
                    return (
                        <div key={i} onClick={()=>handleWorkFilter(i)} className={`${styles.filterItem} ${activeFilter === e ? styles.active : ""}` }>
                            {e}
                        </div>

                        )
                })}
            </div>
            
            <motion.div animate={animateCard} transition={{duration: 0.5, delayChildren: 0.5}} className={styles.porfolioGallery}>
                {trabajos.map((e,i)=>{
                    return (
                        <div className={styles.portfolioItem} key={i}>
                            <div className={styles.portfolioItem__Img}>
                                <Image
                                    src={e.img}
                                    alt={`${e.titulo} imagen`}
                                    width={238}
                                    height={230}
                                /> 
                                <motion.div whileHover={{opacity:[0,1]}} transition={{duration:0.25, staggerChildren:0.5, ease: 'easeInOut'}}>
                                    <Link href={e.link} target={blank} rel="noreferrer"></Link>
                                    
                                </motion.div>                               
                            </div>
                        </div>
                    )    
                })}
            </motion.div>
            
        </section>
    )
}

export default Portfolio