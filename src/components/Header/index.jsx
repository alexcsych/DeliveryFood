import React from 'react'
import styles from './Header.module.sass'
import { showCart } from '../../store/slices/cartSlice'
import { connect } from 'react-redux'

function Header ({ show }) {
  return (
    <div className={styles.Header}>
      <div className={styles.AdaptiveHeader}>
        <div className={styles.Logo}>
          <img src='/images/Logo.png' alt='Logo' className={styles.img} />
          <div className={styles.div}>
            <p className={styles.p}>Delivery</p>
            <p className={styles.p}>Food</p>
          </div>
        </div>
        <div className={styles.SearchContainer}>
          <img src='/images/Home.png' alt='Home' />
          <input
            className={styles.SearchBar}
            type='text'
            placeholder='Адрес доставки'
          />
        </div>
      </div>
      <div className={styles.BtnsContainer}>
        <button className={styles.BtnLogIn}>
          <img src='/images/User.png' alt='User' />
          <p>Войти</p>
        </button>
        <button
          onClick={() => {
            show()
          }}
          className={styles.BtnCart}
        >
          <img src='/images/Cart.png' alt='Cart' />
          <p>Корзина</p>
        </button>
      </div>
    </div>
  )
}
const mapStateToProps = state => state.cartData

const mapDispatchToProps = dispatch => ({
  show: () => {
    dispatch(showCart())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
