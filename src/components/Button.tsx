import React from 'react'

interface IButton {
    children: any;
    onClick: () => void;
    customStyle?: any;
    style?: React.CSSProperties
}

const Button: React.FC<IButton> = ({ children, onClick, customStyle, style }) => {
    return (
        <button className={`flex justify-center items-center rounded px-3 w-full py-2 uppercase shadow-lg bg-blue-500 ${customStyle}`} style={style} onClick={onClick}>
            <h4 className='text-white text-center text-xs font-semibold'>
                {children}
            </h4>
        </button>
    )
}

export default Button;