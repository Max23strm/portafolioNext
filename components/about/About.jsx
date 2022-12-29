import Image from 'next/image'
import Imagen from '../../public/assets/about04.png'

import styles from '../../styles/About.module.css'


const About = ( {data} ) => {
  console.log(data)
  return (
    <section className={styles.about} id="about">
      <div>
        <h2 className={styles.headText}>
          I Know That <span>Good Dev</span> means <span>Good Business</span>
        </h2>
        <div className={styles.profiles}>

          {data && data.map((e,i)=>{
            return (<div className={styles.app__profileIitem} key={i}>
            <Image
              src={e.img}
              alt='image'
              width={190}
              height={170}
            />
            <h2 className={styles.boldText}>{e.name}</h2>
            <p className={styles.pText} >{e.body}</p>
          </div>)
          })} 
          

        </div>
      </div>
    </section>
  )
}

export default About