import { combineReducers } from '@reduxjs/toolkit'
import menuReducer from './slices/menuSlice'
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'

const rootReducer = combineReducers({
  menuData: menuReducer,
  cartData: cartReducer,
  authData: authReducer
})

export default rootReducer
