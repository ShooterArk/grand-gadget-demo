import Divider from '@/components/Divider';
import React from 'react'

interface ICartHeader {
    title: string;
    style?: React.CSSProperties
}

const CartHeader: React.FC<ICartHeader> = ({title = 'Cart', style}) => {
    return <h2 className='p-4' style={style}>{title}</h2>
};

export default CartHeader;