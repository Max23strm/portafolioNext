
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/Porfolio.module.css'


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
                        <div className={styles.portfolioItem} key={i}>
                            <div className={styles.portfolioItem__Img}>
                                <Image
                                    src={e.img}
                                    alt={`${e.titulo} imagen`}
                                    width={238}
                                    height={230}
                                /> 
                                    <motion.div  
                                    className={styles.linksLay}
                                    whileHover={{opacity:[0,1]}} transition={{duration:0.25, staggerChildren:0.5, ease: 'easeInOut'}}>
                                        <Link href={e.link} rel="noreferrer" target={"_blank"} >
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg>
                                        </Link>
                                        <Link href={e.link} rel="noreferrer" target={"_blank"} >
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"></path></svg>
                                        </Link>
                                    </motion.div>
                            </div>
                            <div className={styles.textos}>
                                <Link href={e.link} rel="noreferrer" target={"_blank"}>{`> ${e.titulo}`}</Link>
                                <p>{e.desc}</p>
                                <div className={styles.tag}>
                                    <p>{e.tag[0]}</p>
                                </div>
                            </div>
                        </div>
                    )    
                })}
            </motion.div>
            
        </section>
    )
}

export default Portfolio