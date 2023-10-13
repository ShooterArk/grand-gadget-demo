import React from 'react'
import Button from './Button';
import { useAppDispatch, useAppSelector } from '@/hook/hooks';
import { ICart, decrement, increment } from '@/store/slices/cartSlice';

interface ICounter {
    id: number;
    customStyle?: any;
    style?: React.CSSProperties
}

const Counter: React.FC<ICounter> = ({id, style, customStyle}) => {

    const dispatch = useAppDispatch();

    const cartState = useAppSelector((state) => state.cart)
    const quantity = cartState.cardItems.find(x => x.item.id === id)?.quantity;

    return (
        <div className={`flex flex-row justify-center w-[90%] mx-4 lg:mx-2 h-[17%] items-center ${customStyle}`} style={style}>
            <Button style={{height: 30, width: 30, padding: 4}} onClick={() => { dispatch(decrement(id)) }} >-</Button>
            <div className='flex-1 min-w-fit text-center'>{quantity ?? 0}</div>
            <Button style={{height: 30, width: 30, padding: 4}} onClick={() => { dispatch(increment(id)) }} >+</Button>
        </div>
    )
}

export default Counter;