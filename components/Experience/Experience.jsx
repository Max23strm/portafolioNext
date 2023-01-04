import { motion } from 'framer-motion'
import Image from 'next/image'

import styles from '../../styles/Experience.module.css'


const  Experience = ({experience}) => {
    


    return(
        <section className={styles.section}>
            <h2>Skills & Experience</h2>

            <div className={styles.main}>
                <div className={styles.skillsContainer}>

                    <motion.div className={styles.skillsList}>
                        {experience && experience.skills.map((e)=>{
                            return(
                                <motion.div
                                    whileInView={{opacity:[0,1]}}
                                    transition={{duration:0.5}}
                                    className={styles.skillsItem}
                                    key={e.name}
                                >
                                    <div className={styles.imgSect}>
                                        <Image
                                            src={e.img}
                                            width={45}
                                            height={45}
                                        />
                                    </div>
                                    <p>{e.name}</p>
                                </motion.div>

                            )
                        })}
                    </motion.div>

                </div>
                

                <div className={styles.expContainer}>
                    {experience && experience.exp.map(e=>{
                        return(
                            <motion.div className={styles.expItem} key={e.year} whileInView={{opacity:[0,1]}} transition={{duration:0.5}}>
                                <div className={styles.expYear}><p >{e.year}</p></div>
                                <div className={styles.expSection}>
                                    {e.exp.map((i,index)=>{
                                        return(
                                            <div className={styles.expDetail} key={index}>
                                                <h4>{i.name}</h4>
                                                <p>{i.company}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience