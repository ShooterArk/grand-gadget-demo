import Image from 'next/image';
import React from 'react'
import Button from './Button';
import { IPhone } from '@/Interfaces';

interface ICard {
    item: IPhone,
    onAddToCart: () => void;
}

const Card: React.FC<ICard> = ({ item, onAddToCart }) => {

    const  { imageFileName, name, price, description = '', id } = item;

    return (
        <span key={id} className='bg-white rounded-lg shadow-lg overflow-hidden mx-4 lg:mx-0 px-4 pb-4'>
            <div className='flex justify-center' style={{height: 300}}>
                <Image src={`/images/${imageFileName}`} alt='thumbnail' width={250} height={250} />
            </div>
            <h2 className='font-semibold text-2xl text-slate-700 mb-2'>{name}</h2>
            <h3>${price}</h3>
            <Button customStyle={"!px-4 mt-6 w-5/12"} onClick={onAddToCart}>Add to cart</Button>
        </span>
    )
}

export default Card;