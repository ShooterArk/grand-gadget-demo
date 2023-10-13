import { phones } from '@/assets/data';
import CartItem from './components/cart/CartItem';
import Image from 'next/image';
import CartHeader from './components/cart/CartHeader';

import { useAppSelector } from '@/hook/hooks';
import CartSummary from './components/cart/CartSummary';

const Cart = () => {

  const cartState = useAppSelector((state) => state.cart);

  return (
    <div className='container max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 p-4'>
      <div className='col-span-2 bg-white rounded pb-6'>
        <CartHeader title={`Cart - ${cartState.cardItems.length} ${cartState.cardItems.length > 1 ? 'Items' : 'Item'}`} />
        {cartState && cartState.cardItems?.map((cartItem: any, index) => {
          return (
            <CartItem cartItem={cartItem} key={index} />
          )
        })}
      </div>
      <div className='bg-white rounded col-span-2 lg:col-span-1'>
        <CartHeader title='Summary' />
        <CartSummary />
      </div>
    </div>
  )
}

export default Cart;