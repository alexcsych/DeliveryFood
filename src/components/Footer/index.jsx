import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.sass'
import Logo from '../../images/Logo.png'
import inst from '../../images/inst.svg'
import face from '../../images/face.svg'

function Footer () {
  return (
    <div className={styles.AdaptiveFooter}>
      <div className={styles.Footer}>
        <div className={styles.FooterContainer}>
          <div className={styles.Logo}>
            <img src={Logo} alt='Logo' className={styles.img} />
            <div className={styles.div}>
              <p className={styles.p}>Delivery</p>
              <p className={styles.p}>Food</p>
            </div>
          </div>
          <nav className={styles.nav}>
            <Link to='/DeliveryFood'>Home</Link>
            <Link to='/DeliveryFood/restaurant?foodId=0'>Restaurant</Link>
          </nav>
        </div>
        <div className={styles.ContactsContainer}>
          <img src={inst} alt='face' />
          <img src={face} alt='face' />
        </div>
      </div>
    </div>
  )
}

export default Footer
