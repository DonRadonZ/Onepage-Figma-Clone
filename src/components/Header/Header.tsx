import Group from "../../assets/Group.png"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.body}>
    <div className={styles.header}>
      <div className={styles.title}>
      <span>Introduce Your Product</span>
      <span>Quickly & Effectively</span>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
      <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
      <button>Purchase UI Kit</button>
      <button>Learn More</button>
    </div>
    <div>
        <img src={Group} alt="Group" />
    </div>
    </div>
  )
}
