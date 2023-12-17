import React from 'react'

export default function Button({btnName,handleClick,click,setClick}) {
  return (
    <button className='py-2 px-5 primaryBg text-white rounded-sm btn' onClick={()=>setClick(!click)}>{btnName}</button>
  )
}
