import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart3, BsLightbulb } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { CartContext } from '../utils/ApiContext';

export default function Navbar() {

  const cart = useContext(CartContext)

  return (
    <div className='h-14 w-screen bg-slate-500 border-b-4 border-emerald-200'>
        <BsLightbulb className='absolute top-2 left-1 h-8 w-8 text-white'/>
        <MdDarkMode className='absolute top-2 left-8 h-8 w-8 hidden'/>
        <ul className='flex justify-around text-2xl text-slate-50 pt-2'>
            <NavLink to="/" className="focus:bg-gray-400 px-3 transition rounded-md">Home</NavLink>
            <NavLink to="/products" className="focus:bg-gray-400 px-3 transition rounded-md">Products</NavLink>
            <NavLink to="/cart" className="flex relative focus:bg-gray-400 px-3 transition rounded-md">Cart
                <BsCart3 className='mt-1 ml-2'/>
                <span className='absolute -top-2 -right-2 bg-slate-900 w-5 h-5 rounded-full text-center text-sm'>{cart && cart.length}</span>
            </NavLink>
       
        </ul>
    </div>
  )
}
