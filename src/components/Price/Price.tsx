import styles from './Price.module.css'

export default function Price() {
  return (
    <div className={styles.price}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>A Price To Suit Everyone</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        </div>
        <div className={styles.value}>
          <span className={styles.number}>$40</span>
          <span className={styles.text}>UI Design Kit</span>
        </div>
        <div className={styles.btm}>
        <p>See, One price. Simple.</p>
        <a href="" className={styles.btn}>Purchase Now</a>

      </div>
      </div>
      
    </div>
  )
}
