import React from 'react'
import styles from './Assortiment.module.sass'
import { useLocation } from 'react-router-dom'
import AssortimentItem from './../AssortimentItem'
import { connect } from 'react-redux'
import Ellipse from './../../images/Ellipse.png'
import Star from './../../images/Star.png'

function Assortiment ({ menuData }) {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const foodId = searchParams.get('foodId')
  return (
    <>
      <div className={styles.MenuHeader}>
        <h1>{menuData[foodId].name}</h1>
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
      <div className={styles.Menu}>
        {menuData[foodId].assortiment.map(menu => (
          <AssortimentItem
            key={menu.id}
            menuName={menu.name}
            image={menu.image}
            description={menu.description}
            disabled={menu.disabled}
            price={menu.price}
            id={menu.id}
            foodId={foodId}
          />
        ))}
      </div>
    </>
  )
}

const mapStateToProps = state => state.menuData

export default connect(mapStateToProps)(Assortiment)
