import React from 'react'
import styles from './Menu.module.sass'
import MenuItem from '../MenuItem'
import { connect } from 'react-redux'

function Menu ({ menuData }) {
  return (
    <>
      <div className={styles.MenuHeader}>
        <h2>Рестораны</h2>
        <div className={styles.SearchContainer}>
          <img src='/images/Search.png' alt='Search' />
          <input
            className={styles.SearchBar}
            type='text'
            placeholder='Поиск блюд и ресторанов'
          />
        </div>
      </div>
      <div className={styles.Menu}>
        {menuData.map(menu => (
          <MenuItem
            key={menu.id}
            foodId={menu.id}
            menuName={menu.name}
            image={menu.image}
          />
        ))}
      </div>
    </>
  )
}

const mapStateToProps = state => state.menuData

export default connect(mapStateToProps)(Menu)
