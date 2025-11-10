import Link from 'next/link'
import styles from '../../styles/HeroText.module.css'
import Github from '../icons/Github'
import LinkedIn from '../icons/LinkedIn'
import { motion } from 'framer-motion'
import SvgImage from './SvgImage'

const SpanBar = () => (
    <motion.span
        initial={{opacity:0, }}
        whileInView={{opacity:1, }}
        transition={{duration:.5, delay: 1.1}}
    />
)

const HeroText = () => {
    return (
        <div className={styles.text_container}>
            <h1>Fullstack developer</h1>
            <h2>Maximiliano Ovejak</h2>
            <div className={styles.svg_container}>
                <SvgImage/>
            </div>
            <div className={styles.tec_container}>
                <motion.p
                    initial={{opacity:0, x:20}}
                    whileInView={{opacity:1, x:0 }}
                    transition={{duration:1, ease: 'easeInOut'}}
                >
                    Typescipt
                </motion.p>

                <SpanBar/>

                <motion.p
                    initial={{opacity:0, x:10}}
                    whileInView={{opacity:1, x:0 }}
                    transition={{duration:.8, delay: .3, ease: 'easeInOut'}}
                >
                    ReactJs
                </motion.p>
                
                <SpanBar/>
                
                <motion.p
                    initial={{opacity:0}}
                    whileInView={{opacity:1, x:0 }}
                    transition={{duration:.8, delay: .6, ease: 'easeInOut'}}
                >
                    NextJS
                </motion.p>
                
                <SpanBar/>
                
                <motion.p
                    initial={{opacity:0, x:-10}}
                    whileInView={{opacity:1, x:0 }}
                    transition={{duration:.8, delay: .3, ease: 'easeInOut'}}
                >
                    Golang
                </motion.p>
                
                <SpanBar/>
                
                <motion.p
                    initial={{opacity:0, x:-20}}
                    whileInView={{opacity:1, x:0 }}
                    transition={{duration:1, ease: 'easeInOut'}}
                >
                    NodeJs
                </motion.p>
            </div>
            <div className={styles.but_container}>
                    <Link href={'https://www.linkedin.com/in/m-ovejak/'} target='_blank'>
                        <button>
                            <LinkedIn width='1.2rem' height='1.2rem'/> LinkedIn
                        </button>
                    </Link>
                <Link href={'https://github.com/Max23strm'} target='_blank'>
                    <button >
                        <Github width='1.2rem' height='1.2rem'/> Github
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HeroText