'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

import styles from '../../styles/Porfolio.module.css'
import ProjectCard from './ProjectCard'
import {TechName, Project} from '@/app/types/index'


const Portfolio = ({projects, techList}: {projects: Project[], techList : TechName[]}) => {
    const [activeFilter, setActiveFilter] = useState<TechName>('All')

    const filterWorks = useMemo(() => {
        return activeFilter === 'All'
            ? projects
            : projects.filter((project) => project.tag.includes(activeFilter))
    }, [activeFilter, projects])

    const [animateCard, setAnimateCard] = useState({y:0, opacity:1})

    const handleWorkFilter = (i: TechName) => {
        setActiveFilter(i)
        setAnimateCard({y:100, opacity:0})

        setTimeout(() => {
            setAnimateCard({y:0, opacity:1})
        }, 500)
    }

    return (

        <section className={styles.section} id="work" aria-labelledby="work-heading">
            <h2 id="work-heading" className={styles.headText}>My creative <span>Portfolio</span> section</h2>

            <div className={styles.filtro} role="tablist" aria-label="Filter projects by tech">
                {techList.map((e,i)=>{
                    return (
                        <div
                            key={i}
                            role="tab"
                            aria-selected={activeFilter === e}
                            tabIndex={0}
                            onClick={()=>handleWorkFilter(e)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    handleWorkFilter(e);
                                }
                            }}
                            className={`${styles.filterItem} ${activeFilter === e ? styles.active : ""}` }
                        >
                            {e}
                        </div>
                    )
                })}
            </div>
            <motion.div animate={animateCard} transition={{duration: 0.5, delayChildren: 0.5}} className={styles.porfolioGallery}>
                {filterWorks.map((e,i)=>{
                    return (
                        <ProjectCard project={e} key={`project-${i}`} />
                    )    
                })}
            </motion.div>
            
        </section>
    )
}

export default Portfolio
