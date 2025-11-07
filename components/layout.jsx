import styles from '../styles/Layout.module.css'
import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'

const layout = ({children, classStr, active}) => {
  return (
    <section className={`${styles.layoutSocial} ${classStr}`}>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/m-ovejak/" target={"_blank"} rel="noopener noreferrer"><LinkedIn/></a>

          <a href="https://github.com/Max23strm" target={"_blank"} rel="noopener noreferrer">
            <Github/>
          </a>
        </div>
        
        {children}

        <div className={styles.scroll}>
          {["#home", "#about", "#work", "#skills",  "#contact"].map((e)=>{
            return(
              <a href={e} key={e} className={`${styles.navDot} ${active === e ? styles.active: null}`}></a>
            )
          })}
        </div>
    </section>
  )
}

export default layout