import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './src/features/cart/cartSlice'
import productReducer from './src/features/product/productSlice'
import favouriteReducer from './src/features/favourite/favouriteSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // product: productReducer,
    favourite: favouriteReducer
  },
})