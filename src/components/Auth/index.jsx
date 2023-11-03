import React, { useEffect } from 'react'
import styles from './Auth.module.sass'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { hideAuth } from '../../store/slices/authSlice'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

function Auth ({ hide, authData }) {
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

  const handleSubmit = (values, { resetForm }) => {
    localStorage.setItem('username', values.username)
    localStorage.setItem('password', values.password)
    resetForm()
    hide()
  }

  useEffect(() => {
    if (authData.isVisible) {
      disableBodyScroll(document.body)
    } else {
      enableBodyScroll(document.body)
    }
  }, [authData.isVisible])

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
            <Form>
              <div className={styles.fieldBox}>
                <div className={styles.field}>
                  <label htmlFor='username'>Имя:</label>
                  <Field type='text' id='username' name='username' />
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
                  <Field type='password' id='password' name='password' />
                </div>
                <ErrorMessage
                  name='password'
                  component='div'
                  className={styles.errorMessage}
                />
              </div>
              <button type='submit'>Сохранить</button>
            </Form>
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
