import React from 'react'
import styles from './AssortimentItem.module.sass'

function AssortimentItem ({ menuName, image, description, price }) {
  const imagePath = `/images/${image}.png`

  return (
    <div className={styles.MenuItem}>
      <img src={imagePath} alt={image} className={styles.MenuImg} />
      <div className={styles.MenuItemContent}>
        <p className={styles.Name}>{menuName}</p>
        <p className={styles.Description}>{description}</p>
        <div className={styles.MenuAbout}>
          <button className={styles.BTNCart}>
            <p>До кошику</p>
            <img src='/images/CartWhite.png' alt='Кошик' />
          </button>
          <p className={styles.Price}>{price} грн</p>
        </div>
      </div>
    </div>
  )
}

export default AssortimentItem
