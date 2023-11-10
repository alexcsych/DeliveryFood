import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isVisible: false,
    isLogin: false,
    userData: {
      name: '',
      password: ''
    }
  },
  reducers: {
    showAuth: state => {
      state.isVisible = true
    },
    hideAuth: state => {
      state.isVisible = false
    },
    setLogin: (state, data) => {
      state.isLogin = data.payload
    },
    setLocalStorageData: (state, data) => {
      state.userData = { ...data.payload }
    }
  }
})

const { reducer, actions } = authSlice

export const { showAuth, hideAuth, setLogin, setLocalStorageData } = actions

export default reducer
