import React from 'react'
import styles from './AssortimentItem.module.sass'
import { connect } from 'react-redux'
import { updateMenu } from '../../store/slices/menuSlice'
import { createCartItem } from '../../store/slices/cartSlice'

function AssortimentItem ({
  menuName,
  image,
  description,
  price,
  disabled,
  update,
  id,
  foodId,
  menuData,
  create
}) {
  const imagePath = `../../images/${image}.png`

  return (
    <div className={styles.MenuItem}>
      <img src={imagePath} alt={image} className={styles.MenuImg} />
      <div className={styles.MenuItemContent}>
        <p className={styles.Name}>{menuName}</p>
        <p className={styles.Description}>{description}</p>
        <div className={styles.MenuAbout}>
          <button
            disabled={disabled}
            onClick={() => {
              create(menuData[foodId].assortiment[id])
              update(id, foodId, { disabled: true })
            }}
            className={styles.BTNCart}
          >
            <p>До кошику</p>
            <img src='../../images/CartWhite.png' alt='Кошик' />
          </button>
          <p className={styles.Price}>{price} грн</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => state.menuData

const mapDispatchToProps = dispatch => ({
  update: (foodId, id, updatedData) => {
    dispatch(updateMenu({ foodId, id, updatedData }))
  },
  create: cartItem => {
    dispatch(createCartItem(cartItem))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AssortimentItem)
