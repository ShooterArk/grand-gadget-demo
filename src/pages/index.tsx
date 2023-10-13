import { phones } from '@/assets/data';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar'
import { useAppDispatch } from '@/hook/hooks';
import { addToCart } from '@/store/slices/cartSlice';
import Image from 'next/image'

const Home = () => {

  const dispatch = useAppDispatch();


  return (
    <div className='container max-w-7xl py-5 grid grid-cols-1 lg:grid-cols-4 
    sm:grid-cols-2 md:grid-cols-2 mx-auto gap-4 items-center justify-center'>
      {phones?.map((item, index) => {
        return (
          <Card item={item} key={index} onAddToCart={() => dispatch(addToCart({item, quantity: 1, id: item?.id}))} />
        )
      })}
    </div>
  )
}

export default Home;