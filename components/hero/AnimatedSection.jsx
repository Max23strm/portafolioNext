import { AnimatedHero, HeroText } from '..'
import styles from '../../styles/Home.module.css'
const AnimatedSection = () => {
    return (
        <div className={styles.homeSec}>
            <AnimatedHero 
                colors={["#ff7300ff", "#00ff44ff", "#6f00ffff"]}
                rotation={0}
                speed={0.2}
                scale={1}
                frequency={1.4}
                warpStrength={1}
                mouseInfluence={2}
                parallax={0.1}
                noise={0.1}
                transparent={true}
            />
            <HeroText/>
        </div>
    )
}

export default AnimatedSection