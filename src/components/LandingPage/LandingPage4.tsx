import styles from './LandingPage4.module.css'
import LandingPhoto from '../../assets/undraw_mention_6k5d.svg'

export default function LandingPage4() {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
      <div className={styles.box}>
      <div className={styles.image}>
          <img src={LandingPhoto} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <h2>Light, Fast & Powerful</h2>
          </div>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
</p>
            <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </div>
          <div className={styles.button_group}>
          <a href="" className={styles.purchase}>Purchase UI Kit</a>
          </div>
         </div>
      </div>
      
        </div>
        
      </div>
  )
}
