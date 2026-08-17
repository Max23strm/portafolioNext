import styles from '../../styles/Footer.module.css'

const Footer = ( ) => {
    const year = new Date().getFullYear()


    return(
        <footer className={styles.section}>
            <p>&copy; {year} Maximiliano Ovejak</p>
            <p>All rights reserved</p>
        </footer>
    )
}

export default Footer