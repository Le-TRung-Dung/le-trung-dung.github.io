import { configureStore } from '@reduxjs/toolkit'
import accounSlice from './accounSlice'
import productSlice from './productSlice'
import counterSlice from './counterproductslice'
import cartSlice from './cartSlice'
import searchProducts  from './productSlice'

export const store = configureStore({
  reducer: {
    cartSlice,
    accounSlice,
    productSlice,
    counterSlice,
    searchProducts,

},
})