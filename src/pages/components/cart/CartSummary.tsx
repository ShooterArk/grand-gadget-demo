import Button from '@/components/Button';
import { useAppSelector } from '@/hook/hooks';
import { ALERTS } from '@/utils/Constants';
import { numberWithCommas } from '@/utils/Helper';
import React from 'react'

const CartSummary = () => {

  const cartState = useAppSelector((state) => state.cart);

  let totalAmount = 0;
  let totalCount = 0;

  cartState.cardItems.map((cartItem) => {
    totalAmount += cartItem.quantity * cartItem.item.price;
    totalCount += cartItem.quantity;
  })

  const formattedAmount = numberWithCommas(totalAmount);

  return (
    <div className='p-4 flex flex-col'>
      <div className='flex-1 mb-6'>
        <div className='flex my-2'>
          <h3 className='flex-1'>Total Quantity</h3>
          <h3>{totalCount}</h3>
        </div>
        <div className='flex mt-2'>
          <h3 className='flex-1 font-bold'>Total Amount</h3>
          <h3 className='font-bold'>{formattedAmount}</h3>
        </div>
      </div>
      <Button onClick={() => { alert(ALERTS.CHECKOUT_IN_PROGRESS) }} >Go To Checkout</Button>
    </div>
  )
}

export default CartSummary;