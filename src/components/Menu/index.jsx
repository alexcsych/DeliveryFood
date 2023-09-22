import React from 'react'
import styles from './Menu.module.sass'
import menuData from '../../Menu.json'
import MenuItem from '../MenuItem'

function Menu () {
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

export default Menu
