import React from 'react'
import styles from './MenuItem.module.sass'
import { Link } from 'react-router-dom'

function MenuItem ({ foodId, menuName, image }) {
  const imagePath = `../../images/${image}.png`

  return (
    <Link
      to={`/Delivery_Food/restaurant?foodId=${foodId}`}
      className={styles.MenuItem}
    >
      <img src={imagePath} alt={image} className={styles.MenuImg} />
      <div className={styles.MenuItemContent}>
        <div className={styles.MenuName}>
          <p className={styles.Name}>{menuName}</p>
          <p className={styles.Time}>50 мин</p>
        </div>
        <div className={styles.MenuAbout}>
          <div className={styles.MenuRating}>
            <img
              src='../../images/Star.png'
              alt='Star'
              className={styles.Star}
            />
            <p className={styles.Rating}>4.5</p>
          </div>
          <div className={styles.MenuPrice}>
            <p>От 900 грн</p>
            <img
              src='../../images/Ellipse.png'
              alt='Ellipse'
              className={styles.Ellipse}
            />
            <p>Пицца</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MenuItem
