import styles from './LandingPage.module.css'
import icon from '../../assets/Icon.svg'
import LandingPhoto1 from '../../assets/undraw_mobile_login_ikmv.svg'

export default function LandingPage1() {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.box}>
        <div className={styles.info}>
          <div className={styles.title}>
            <h2>Light, Fast & Powerful</h2>
          </div>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
</p>
            <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </div>
          <div className={styles.message}>
            <div className={styles.items}>
              <img src={icon} alt="" />
              <h3>Title Goes Here</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
            <div className={styles.items}>
              <img src={icon} alt="" />
              <h3>Title Goes Here</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <img src={LandingPhoto1} alt="" />
        </div>
        </div>

      </div>
    </div>
  )
}
