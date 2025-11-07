import styles from '../../styles/Footer.module.css'

const Footer = ( ) => {
    const year = new Date().getFullYear()


    return(
        <section className={styles.section}>
            <p>
                @{year} Maximiliano Ovejak
            </p>
            <p>
                All rights reserved
            </p>
            <p>Thanks to fffuel.co</p>
        </section>
    )
}

export default Footer