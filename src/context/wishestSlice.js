import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    value: JSON.parse(localStorage.getItem("wishlist")) || []
  },
  reducers: {
    toogleWishes(state ,actions) {
        let index = state.value.findIndex((el) => el.id === actions.payload.id)
        if(index < 0) {
            state.value = [...state.value , actions.payload]
        }else {
            state.value = state.value .filter((el) => el.id !== actions.payload.id)
        }
        localStorage.setItem("wishlist" , JSON.stringify(state.value))
    }

  },
})

export const { toogleWishes } = wishlistSlice.actions

export default wishlistSlice.reducer