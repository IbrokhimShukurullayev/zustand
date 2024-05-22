import { configureStore } from '@reduxjs/toolkit'
import   wishlistSlice  from './wishestSlice'
import  karzinkaSlice  from './karzinkaSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    karzinka : karzinkaSlice
  },
})  