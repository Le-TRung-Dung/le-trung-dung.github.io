import { configureStore } from '@reduxjs/toolkit'
import accounSlice from './accounSlice'
import counterSlice from './counterproductslice'
import cartSlice from './cartSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from '../APIslice/apiSlice'
import { AdminApi } from '../APIslice/apiAdminSlice'

export const store = configureStore({
  reducer: {
    cartSlice,
    accounSlice,
    counterSlice,
    [productApi.reducerPath]: productApi.reducer,
    [AdminApi.reducerPath]: AdminApi.reducer,


},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(productApi.middleware , AdminApi.middleware ),
})
setupListeners(store.dispatch)