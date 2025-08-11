import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateItemQuantity, applyCoupon } from '../../store/cartSlice';
import {
  PageContainer,
  BackButton,
  CartContainer,
  CartItem,
  CouponSection,
  TotalsSection,
} from './CartPage.styles.js';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, discount } = useSelector((state) => state.cart);
  const [couponCode, setCouponCode] = useState('');

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateItemQuantity({ id, quantity }));
  };

  const handleApplyCoupon = () => {
    dispatch(applyCoupon(couponCode));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = item.prices?.find(p => p.type === 'printPrice')?.price || 19.99;
      return total + price * item.quantity;
    }, 0);
  };

  const total = calculateTotal();
  const finalTotal = (total - discount).toFixed(2);

  return (
    <PageContainer>
      <BackButton to="/comics">
        <button>Back to List</button>
      </BackButton>
      <CartContainer>
        <h1>Shopping Cart</h1>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {items.map((item) => (
              <CartItem key={item.id} data-cy="cart-item">
                <div>
                  <h2>{item.title}</h2>
                  <p>Price: ${item.prices?.find(p => p.type === 'printPrice')?.price || 19.99}</p>
                </div>
                <div>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                  />
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
              </CartItem>
            ))}
            <TotalsSection>
              <h2>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </h2>
              {discount > 0 && (
                <h2 className="discount">
                  <span>Discount:</span>
                  <span>-${discount.toFixed(2)}</span>
                </h2>
              )}
              <h2 className="final-total">
                <span>Final Total:</span>
                <span>${finalTotal}</span>
              </h2>
            </TotalsSection>
            <CouponSection>
              <input type="text" placeholder="Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
              <button onClick={handleApplyCoupon}>Apply Coupon</button>
            </CouponSection>
          </div>
        )}
      </CartContainer>
    </PageContainer>
  );
};

export default CartPage;