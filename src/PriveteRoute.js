import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { showAuth } from './store/slices/authSlice'

const PrivateRoute = ({ isLogin, children, showAuth }) => {
  useEffect(() => {
    if (!isLogin) {
      showAuth()
    }
  }, [isLogin, showAuth])

  return isLogin ? children : <Navigate to='/DeliveryFood' />
}

const mapStateToProps = state => {
  return {
    isLogin: state.authData.isLogin
  }
}

const mapDispatchToProps = dispatch => ({
  showAuth: () => {
    dispatch(showAuth())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
