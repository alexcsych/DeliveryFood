import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.sass'

function Footer () {
  return (
    <div className={styles.AdaptiveFooter}>
      <div className={styles.Footer}>
        <div className={styles.FooterContainer}>
          <div className={styles.Logo}>
            <img
              src='../../images/Logo.png'
              alt='Logo'
              className={styles.img}
            />
            <div className={styles.div}>
              <p className={styles.p}>Delivery</p>
              <p className={styles.p}>Food</p>
            </div>
          </div>
          <nav className={styles.nav}>
            <Link to='/Delivery_Food'>Home</Link>
            <Link to='/Delivery_Food/restaurant?foodId=0'>Restaurant</Link>
          </nav>
        </div>
        <div className={styles.ContactsContainer}>
          <img src='../../images/inst.svg' alt='face' />
          <img src='../../images/face.svg' alt='face' />
        </div>
      </div>
    </div>
  )
}

export default Footer
