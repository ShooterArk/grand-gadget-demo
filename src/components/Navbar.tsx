import { useAppSelector } from '@/hook/hooks'
import Link from 'next/link'
import React from 'react'

interface INavLinks {
    index?: number
    href: string
    label: string
    uppercase?: boolean
}

interface INavbar {
    navLinks: INavLinks[]
}

const NavLink: React.FC<INavLinks> = ({index, href, label, uppercase = false}) => {
    return <Link key={index ?? 0} href={href} className={`text-gray-500 hover:text-gray-900 px-5 py-2 mr-1 ${uppercase && 'uppercase'}`}>{label}</Link>
}

const Navbar: React.FC<INavbar> = ({navLinks}) => {

    const cartState = useAppSelector((state) => state.cart);

    return (
        // <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl p-4 grid grid-cols-3 gap-2 items-center justify-between">
            <Link href="/" className="logo items-center">
                <span>Navbar</span>
            </Link>
            <div className='text-center'>
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.href} className='text-gray-500 hover:text-gray-900 px-5 py-2 mr-1'>{link.label}</Link>
                ))}
            </div>
            <div className='text-right'>
                <NavLink href="/cart" label={`Cart (${cartState?.cardItems.length})`} uppercase={true} />
            </div>
        </div>
        // </header>
    )
};

export default Navbar;