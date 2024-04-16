import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
        <h1>Landing</h1>
        <div className={styles.btn}>
        <a >Buy Now</a>
        </div>
      </nav>
      </div>
  )
}
