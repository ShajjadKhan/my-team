import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import QuicChat from './Components/QuicChat'
import Chat from './Pages/Chat'
import PopUp from './Components/PopUp'

export default function RksRoot() {
  const [click,setClick] = useState(false)
  const handleClick = () =>{
    setClick(true)
  }
  return (
    <div>
      <Navbar handleClick={handleClick} click={click} setClick={setClick}/>
      <PopUp click={click} setClick={setClick}/>
      {/* <Chat/> */}
      <QuicChat/>
      <Outlet/>
    </div>
  )
}
