import React from 'react'
import styles from './Header.module.sass'
import { showCart } from '../../store/slices/cartSlice'
import { showAuth } from '../../store/slices/authSlice'
import { connect } from 'react-redux'
import Logo from '../../images/Logo.png'
import Home from '../../images/Home.png'
import User from '../../images/User.png'
import Cart from '../../images/Cart.png'

function Header ({ showCart, showAuth, username }) {
  const handleLoginClick = () => {
    if (username) {
      localStorage.removeItem('username')
      showAuth()
    } else {
      showAuth()
    }
  }

  return (
    <div className={styles.Header}>
      <div className={styles.AdaptiveHeader}>
        <div className={styles.Logo}>
          <img src={Logo} alt='Logo' className={styles.img} />
          <div className={styles.div}>
            <p className={styles.p}>Delivery</p>
            <p className={styles.p}>Food</p>
          </div>
        </div>
        <div className={styles.SearchContainer}>
          <img src={Home} alt='Home' />
          <input
            className={styles.SearchBar}
            type='text'
            placeholder='Адрес доставки'
          />
        </div>
      </div>
      <div className={styles.BtnsContainer}>
        <p className={styles.userName}>{username && `Hi ${username}!`}</p>
        <button className={styles.BtnLogIn} onClick={handleLoginClick}>
          <img src={User} alt='User' />
          <p>{username ? 'Выйти' : 'Войти'}</p>
        </button>
        <button
          onClick={() => {
            showCart()
          }}
          className={styles.BtnCart}
        >
          <img src={Cart} alt='Cart' />
          <p>Корзина</p>
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const username = localStorage.getItem('username')
  return {
    username
  }
}

const mapDispatchToProps = dispatch => ({
  showCart: () => {
    dispatch(showCart())
  },
  showAuth: () => {
    dispatch(showAuth())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
