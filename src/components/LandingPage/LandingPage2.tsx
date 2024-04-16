import styles from './LandingPage2.module.css'
import LandingPhoto2 from '../../assets/undraw_happy_news_hxmt.svg'


export default function LandingPage2() {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
      <div className={styles.box}>
      <div className={styles.image}>
          <img src={LandingPhoto2} alt="" />
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

        </div>
      </div>
      
        </div>
        
      </div>
    
  )
}
