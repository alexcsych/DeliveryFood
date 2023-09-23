import { combineReducers } from '@reduxjs/toolkit'
import menuReducer from './slices/menuSlice'
import cartReducer from './slices/cartSlice'

const rootReducer = combineReducers({
  menuData: menuReducer,
  cartData: cartReducer
})

export default rootReducer
