import React from 'react'
import styles from './Assortiment.module.sass'
import menuData from '../../Menu.json'
import { useLocation } from 'react-router-dom'
import AssortimentItem from './../AssortimentItem'

function Assortiment () {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const foodId = searchParams.get('foodId')
  return (
    <>
      <div className={styles.MenuHeader}>
        <h1>{menuData[foodId].name}</h1>
        <div className={styles.MenuRating}>
          <img src='/images/Star.png' alt='Star' className={styles.Star} />
          <p className={styles.Rating}>4.5</p>
        </div>
        <div className={styles.MenuPrice}>
          <p>От 900 грн</p>
          <img
            src='/images/Ellipse.png'
            alt='Ellipse'
            className={styles.Ellipse}
          />
          <p>Пицца</p>
        </div>
      </div>
      <div className={styles.Menu}>
        {menuData[foodId].assortiment.map(menu => (
          <AssortimentItem
            key={menu.id}
            menuName={menu.name}
            image={menu.image}
            description={menu.description}
            price={menu.price}
          />
        ))}
      </div>
    </>
  )
}

export default Assortiment
