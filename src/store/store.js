import { configureStore } from '@reduxjs/toolkit';
import comicsReducer from './comicsSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    comics: comicsReducer,
    cart: cartReducer,
  },
});
