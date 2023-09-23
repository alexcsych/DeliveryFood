import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isVisible: false,
    cart: []
  },
  reducers: {
    showCart: state => {
      state.isVisible = true
    },
    hideCart: state => {
      state.isVisible = false
    },
    createCartItem: (state, action) => {
      const newCartItem = {
        ...action.payload,
        id: uuidv4(),
        amount: 1
      }
      state.cart = [...state.cart, newCartItem]
    },
    inc: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload)
      state.cart[index].amount++
    },
    dec: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload)
      state.cart[index].amount--
    },
    clearCart: state => {
      state.isVisible = false
      state.cart = []
    }
  }
})

const { reducer, actions } = cartSlice

export const { showCart, hideCart, createCartItem, inc, dec, clearCart } =
  actions

export default reducer
