import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isVisible: false
  },
  reducers: {
    showAuth: state => {
      state.isVisible = true
    },
    hideAuth: state => {
      state.isVisible = false
    }
  }
})

const { reducer, actions } = authSlice

export const { showAuth, hideAuth } = actions

export default reducer
