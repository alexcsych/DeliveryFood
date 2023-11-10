import React, { useEffect } from 'react'
import styles from './Header.module.sass'
import { showCart } from '../../store/slices/cartSlice'
import {
  showAuth,
  setLogin,
  setLocalStorageData
} from '../../store/slices/authSlice'
import { connect } from 'react-redux'
import Logo from '../../images/Logo.png'
import Home from '../../images/Home.png'
import User from '../../images/User.png'
import Cart from '../../images/Cart.png'
import { Navigate } from 'react-router-dom'

function Header ({
  showCart,
  showAuth,
  setLogin,
  authData,
  setLocalStorageData
}) {
  useEffect(() => {
    const localStorageName = localStorage.getItem('username')
    const localStoragePassword = localStorage.getItem('password')
    if (localStorageName !== null && localStoragePassword !== null) {
      setLogin(true)
      setLocalStorageData({
        username: localStorageName,
        password: localStoragePassword
      })
    } else {
      setLogin(false)
    }
  }, [])

  const handleLoginClick = () => {
    if (authData.isLogin) {
      setLogin(false)
      localStorage.removeItem('username')
      localStorage.removeItem('password')
      showAuth()
      return <Navigate to='/DeliveryFood' />
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
        <p className={styles.userName}>
          {authData.isLogin && `Hi ${authData.userData.username}!`}
        </p>
        <button className={styles.BtnLogIn} onClick={handleLoginClick}>
          <img src={User} alt='User' />
          <p>{authData.isLogin ? 'Выйти' : 'Войти'}</p>
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
  return {
    authData: state.authData
  }
}

const mapDispatchToProps = dispatch => ({
  showCart: () => {
    dispatch(showCart())
  },
  showAuth: () => {
    dispatch(showAuth())
  },
  setLogin: data => {
    dispatch(setLogin(data))
  },
  setLocalStorageData: data => {
    dispatch(setLocalStorageData(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
