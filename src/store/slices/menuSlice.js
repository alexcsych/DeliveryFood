import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMenuData = createAsyncThunk(
  'menu/fetchMenuData',
  async () => {
    try {
      const response = await axios.get('http://localhost:5000/delivery')
      return response.data
    } catch (error) {
      throw error
    }
  }
)

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuData: []
  },
  reducers: {
    updateMenu (state, action) {
      const { id, foodId, updatedData } = action.payload
      state.menuData[id].assortiment[foodId] = {
        ...state.menuData[id].assortiment[foodId],
        ...updatedData
      }
    },
    clearDisabled (state) {
      state.menuData.forEach(menu => {
        menu.assortiment = menu.assortiment.map(item => ({
          ...item,
          disabled: false
        }))
      })
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMenuData.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchMenuData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.menuData = action.payload
      })
      .addCase(fetchMenuData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

const { reducer, actions } = menuSlice

export const { updateMenu, clearDisabled } = actions

export default reducer
