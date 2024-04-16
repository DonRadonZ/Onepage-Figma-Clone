import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
        <h1>Landing</h1>
        <button className={styles.btn}>Buy Now</button>
      </nav>
      </div>
  )
}
