import { useAppSelector } from '@/hook/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface INavLinks {
    index?: number
    href: string
    label: string
    uppercase?: boolean,
}

interface INavbar {
    navLinks: INavLinks[]
}

const NavLink: React.FC<INavLinks> = ({index, href, label, uppercase = false}) => {
    const router = useRouter();
    return <Link key={index ?? 0} href={href} className={`px-5 py-2 mr-1 ${uppercase ? 'uppercase' : 'capitalize'} ${router?.pathname === '/' ? 'text-blue-600 hover:text-blue-900' : 'text-gray-500 hover:text-gray-900'}`}>{label}</Link>
}

const Navbar: React.FC<INavbar> = ({navLinks}) => {

    const cartState = useAppSelector((state) => state.cart);
    const router = useRouter();

    return (
        <div className="container-fluid container-xl p-5 flex gap-0 items-center justify-between">
            <Link href="/" className="mr-5 logo items-center">
                <span>Navbar</span>
            </Link>
            <div className='flex-1 text-center'>
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.href} className={`px-4 py-2 ${router?.pathname === '/' ? 'text-blue-600 hover:text-blue-900' : 'text-gray-500 hover:text-gray-900'}`}>{link.label}</Link>
                ))}
            </div>
            <div className=' text-right text-xs lg:text-sm'>
                <NavLink href="/cart" label={`Cart(${cartState?.cardItems.length})`} uppercase={false} />
            </div>
        </div>
    )
};

export default Navbar;