import Button from '@/components/Button';
import Counter from '@/components/Counter';
import Divider from '@/components/Divider';
import { useAppDispatch } from '@/hook/hooks';
import { ICart, removeFromCart } from '@/store/slices/cartSlice';
import Image from 'next/image';
import React from 'react'
import { IconContext } from 'react-icons';
import { MdDelete } from 'react-icons/md'

interface ICartItem {
    key: number;
    cartItem: ICart;
}


const CartItem: React.FC<ICartItem> = ({ key, cartItem }) => {

    const dispatch = useAppDispatch();

    return (
        <>
            <Divider />
            {cartItem && (
                <div key={key} className='lg:grid lg:grid-cols-5'>
                    <div className='col-span-1 flex justify-center items-center'>
                        <Image src={`/images/${cartItem?.item.imageFileName}`} alt="" width={300} height={300} />
                    </div>
                    <div className='col-span-2 mt-4 px-4'>
                        <h2 className='font-semibold text-2xl text-slate-700 mb-1'>{cartItem?.item.name}</h2>
                        <div>
                            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                <Button customStyle={"w-[7%] lg:w-[11%] px-1 lg:px-3 mt-3"} onClick={() => { dispatch(removeFromCart({ id: cartItem?.item.id })) }}>
                                    <MdDelete />
                                </Button>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <Counter id={cartItem.item.id} customStyle={"col-span-2 mt-4"} />
                        <h3 className='mx-2 mt-4'>Price: ${cartItem?.item.price}</h3>
                    </div>
                </div>
            )}
        </>
    )
}

export default CartItem;