import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  appliedCoupon: null,
  discount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateItemQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    applyCoupon: (state, action) => {
      const coupons = [
        { code: 'COMMON10', type: 'common', discount: 0.1 },
        { code: 'RARE20', type: 'rare', discount: 0.2 },
        { code: 'ALL5', type: 'common', discount: 0.05 },
        { code: 'MARVELOUS', type: 'rare', discount: 0.15 },
      ];

      const coupon = coupons.find(c => c.code === action.payload);

      if (coupon) {
        state.appliedCoupon = coupon;
        let totalDiscount = 0;

        state.items.forEach(item => {
          const price = item.prices?.find(p => p.type === 'printPrice')?.price || 19.99;
          if (coupon.type === 'common' && !item.isRare) {
            totalDiscount += price * item.quantity * coupon.discount;
          }
          if (coupon.type === 'rare' && item.isRare) {
            totalDiscount += price * item.quantity * coupon.discount;
          }
        });

        state.discount = totalDiscount;
      } else {
        state.appliedCoupon = null;
        state.discount = 0;
      }
    },
  },
});

export const { addItem, removeItem, updateItemQuantity, applyCoupon } = cartSlice.actions;

export default cartSlice.reducer;
