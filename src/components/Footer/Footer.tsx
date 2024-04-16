import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer>
    <div className={styles.container}>
      <div className={styles.top}>
        <p>&copy;2023 Yourcompany</p>
        <h2>Landing</h2>
        <a>Purchase now</a>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.menu}>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <ul className={styles.social}>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
      </div>
    </div>
    </footer>
  )
}
