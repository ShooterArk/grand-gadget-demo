import Button from '@/components/Button';
import { useAppSelector } from '@/hook/hooks';
import { ALERTS } from '@/utils/Constants';
import React from 'react'

const CartSummary = () => {

    const cartState = useAppSelector((state) => state.cart);

    let totalAmount = 0;
    let totalCount = 0;

    cartState.cardItems.map((cartItem) => {
        totalAmount += cartItem.quantity * cartItem.item.price;
        totalCount += cartItem.quantity;
    })

    return (
        <div className='p-4 flex flex-col'>
          <div className='flex-1' style={{ minHeight: '20vh' }}>
            <div className='flex mt-2'>
              <h3 className='flex-1'>Total Quantity</h3>
              <h3>{totalCount}</h3>
            </div>
            <div className='flex mt-2'>
              <h3 className='flex-1 font-bold'>Total amount</h3>
              <h3 className='font-bold'>{totalAmount}</h3>
            </div>
          </div>
          <Button onClick={() => { alert(ALERTS.CHECKOUT_IN_PROGRESS) }} >Go To Checkout</Button>
        </div>
    )
}

export default CartSummary;