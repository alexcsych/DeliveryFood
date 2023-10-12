import React, { useState } from 'react'
import styles from './Auth.module.sass'
import { connect } from 'react-redux'
import { hideAuth } from '../../store/slices/authSlice'

function Auth ({ hide, authData }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    localStorage.setItem('username', formData.username)
    localStorage.setItem('password', formData.password)
    setFormData({ username: '', password: '' })
    hide()
  }

  return (
    authData.isVisible && (
      <>
        <div
          onClick={() => {
            hide()
          }}
          className={styles.overlay}
        ></div>
        <div className={styles.modal}>
          <form onSubmit={handleFormSubmit}>
            <div className={styles.field}>
              <label htmlFor='username'>Имя:</label>
              <input
                type='text'
                id='username'
                name='username'
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor='password'>Пароль:</label>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button type='submit'>Сохранить</button>
          </form>
        </div>
      </>
    )
  )
}

const mapStateToProps = state => ({
  authData: state.authData
})

const mapDispatchToProps = dispatch => ({
  hide: () => {
    dispatch(hideAuth())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
