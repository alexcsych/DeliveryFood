import React from 'react'
import styles from './MenuItem.module.sass'
import { Link } from 'react-router-dom'
import Ellipse from './../../images/Ellipse.png'
import Star from './../../images/Star.png'

function MenuItem ({ foodId, menuName, image }) {
  return (
    <Link
      to={`/DeliveryFood/restaurant?foodId=${foodId}`}
      className={styles.MenuItem}
    >
      <img src={image} alt='imageFood' className={styles.MenuImg} />
      <div className={styles.MenuItemContent}>
        <div className={styles.MenuName}>
          <p className={styles.Name}>{menuName}</p>
          <p className={styles.Time}>50 мин</p>
        </div>
        <div className={styles.MenuAbout}>
          <div className={styles.MenuRating}>
            <img src={Star} alt='Star' className={styles.Star} />
            <p className={styles.Rating}>4.5</p>
          </div>
          <div className={styles.MenuPrice}>
            <p>От 900 грн</p>
            <img src={Ellipse} alt='Ellipse' className={styles.Ellipse} />
            <p>Пицца</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MenuItem
