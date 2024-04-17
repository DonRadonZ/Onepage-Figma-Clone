import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'


export default function Footer() {
  return (
    <footer>
    <div className={styles.container}>
      <div className={styles.top}>
        <p>&copy;2023 Yourcompany</p>
        <h2>Landing</h2>
        <a href='' className={styles.purchase}>Purchase now</a>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.menu}>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <ul className={styles.social}>
          <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
      </div>
    </div>
    </footer>
  )
}
