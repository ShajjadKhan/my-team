import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import { useContext } from 'react'
import { MyContext } from '../Provider/Provider'

export default function Menus({handleHidemenu}) {
    const {user} = useContext(MyContext);
    console.log(user)
  return (
   <ul className='flex menuList lg:flex-row justify-center items-center gap-10 textColor' onClick={handleHidemenu}>
    <li>
        <NavLink to='/'>Home</NavLink>
    </li>
    <li>
        <NavLink to='/about'>About</NavLink>
    </li>
    <li>
        <NavLink to='/service'>Service</NavLink>
    </li>
    <li>
        <NavLink to='/portfolio'>Portfolio</NavLink>
    </li>
    <li>
        <NavLink to='/contact'>Contact</NavLink>
    </li>
    <li className='lg:hidden'>
     {
        user ?   <Button btnName={user.displayName} /> : <Button btnName="Register"/>
     }
    </li>
   </ul>
  )
}
