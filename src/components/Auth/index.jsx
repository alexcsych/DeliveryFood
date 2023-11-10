import React, { useEffect } from 'react'
import styles from './Auth.module.sass'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import {
  hideAuth,
  setLogin,
  setLocalStorageData
} from '../../store/slices/authSlice'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

function Auth ({ hide, authData, setLogin, setLocalStorageData }) {
  const initialValues = {
    username: '',
    password: ''
  }

  const validationSchema = Yup.object({
    username: Yup.string()
      .trim()
      .required('Имя пользователя обязательно для заполнения')
      .min(3, 'Имя пользователя должно содержать как минимум 3 символа'),
    password: Yup.string()
      .trim()
      .required('Пароль обязателен для заполнения')
      .min(6, 'Пароль должен содержать как минимум 6 символов')
  })

  useEffect(() => {
    if (authData.isVisible) {
      disableBodyScroll(document.body)
    } else {
      enableBodyScroll(document.body)
    }
  }, [authData.isVisible])

  const handleSubmit = (values, { resetForm }) => {
    setLogin(true)
    setLocalStorageData({
      username: values.username,
      password: values.password
    })
    localStorage.setItem('username', values.username)
    localStorage.setItem('password', values.password)
    resetForm()
    hide()
  }

  return (
    authData.isVisible && (
      <>
        <div onClick={hide} className={styles.overlay}></div>
        <div className={styles.modal}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.fieldBox}>
                  <div className={styles.field}>
                    <label htmlFor='username'>Имя:</label>
                    <Field
                      type='text'
                      id='username'
                      name='username'
                      className={`${errors.username ? `${styles.error}` : ''}`}
                    />
                  </div>
                  <ErrorMessage
                    name='username'
                    component='div'
                    className={styles.errorMessage}
                  />
                </div>
                <div className={styles.fieldBox}>
                  <div className={styles.field}>
                    <label htmlFor='password'>Пароль:</label>
                    <Field
                      type='password'
                      id='password'
                      name='password'
                      className={`${errors.password ? `${styles.error}` : ''}`}
                    />
                  </div>
                  <ErrorMessage
                    name='password'
                    component='div'
                    className={styles.errorMessage}
                  />
                </div>
                <button type='submit'>Сохранить</button>
              </Form>
            )}
          </Formik>
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
  },
  setLocalStorageData: data => {
    dispatch(setLocalStorageData(data))
  },
  setLogin: data => {
    dispatch(setLogin(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
