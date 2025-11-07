
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import styles from '../../styles/Porfolio.module.css'
import ProjectCard from './ProjectCard'


const Portfolio = ({trabajos}) => {
    const [activeFilter, setActiveFilter] = useState('All')
    const [animateCard, setAnimateCard] = useState({y:0, opacity:1})
    const [filterWorks, setFilterWorks] = useState([])
    const handleWorkFilter=(i)=>{
        setActiveFilter(i)
        setAnimateCard([{y:100, opacity:0}])
        
        setTimeout(()=>{
            setAnimateCard([{y:0, opacity:1}])

            if(i==='All'){
                setFilterWorks(trabajos)
            } else{
                setFilterWorks(trabajos.filter((work)=>work.tag.includes(i)))
            }
        },)
    }
    useEffect(()=>{
        setFilterWorks(trabajos)
    },[trabajos])
    return (

        <section className={styles.section} id="work">
            <h2 className={styles.headText}>My creative <span>Portfolio</span> section</h2>

            <div className={styles.filtro}>
                {['ReactJs', 'Web App', 'Responsive','Tailwind','Wordpress','All', ].map((e,i)=>{
                    return (
                        <div key={i} onClick={()=>handleWorkFilter(e)} className={`${styles.filterItem} ${activeFilter === e ? styles.active : ""}` }>
                            {e}
                        </div>

                        )
                })}
            </div>
            <motion.div animate={animateCard} transition={{duration: 0.5, delayChildren: 0.5}} className={styles.porfolioGallery}>
                {filterWorks && filterWorks.map((e,i)=>{
                    return (
                        <ProjectCard project={e} key={`project-${i}`} />
                    )    
                })}
            </motion.div>
            
        </section>
    )
}

export default Portfolio