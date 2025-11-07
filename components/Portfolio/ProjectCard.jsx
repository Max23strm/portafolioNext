import Link from 'next/link'
import styles from '../../styles/Porfolio.module.css'
import Eye from '../icons/Eye'
import Github from '../icons/Github'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectCard = ({project}) => {


    return (
        <div className={styles.portfolioItem}>
            <div className={styles.portfolioItem__Img}>
                
                        <Image
                            src={project.img}
                            alt={`${project.titulo} imagen`}
                            width={238}
                            height={230}
                            placeholder={'empty'}
                        /> 
                
                    <motion.div  
                    className={styles.linksLay}
                    whileHover={{opacity:[0,1]}} transition={{duration:0.25, staggerChildren:0.5, ease: 'easeInOut'}}>
                        {
                            project?.link !== null &&
                                <Link href={project.link} rel="noopener noreferrer" target={"_blank"} >
                                    <Eye/>
                                </Link>
                        }
                        {
                            project?.repo !== null &&
                                <Link href={project.repo} rel="noopener noreferrer" target={"_blank"} >
                                    <Github/>
                                </Link>
                        }
                    </motion.div>
            </div>
            <div className={styles.textos}>
                <Link href={project.link} rel="noopener noreferrer" target={"_blank"}>{`> ${project.titulo}`}</Link>
                <p>{project.desc}</p>
                <div className={styles.tag}>
                    <p>{project.tag[0]}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard