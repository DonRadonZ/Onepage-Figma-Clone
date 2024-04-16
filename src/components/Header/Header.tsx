import styles from "./Header.module.css"
import Navbar from '../Navbar/Navbar';

export default function Header() {
  return (
    <div className={styles.body}>
      <Navbar/>
    <div className={styles.header}>
      <div className={styles.title}>
      <span>Introduce Your Product Quickly & Effectively</span>
      </div>
      <div className={styles.description}>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
      <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
      </div>
      <div className={styles.button_group}>
      <a href="" className={styles.purchase}>Purchase UI Kit</a>
      <a href="" className={styles.learnmore}>Learn More</a>
      </div>
    </div>
      
    
    </div>
  )
}
