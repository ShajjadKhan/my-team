import React from 'react'
import icon from '../../public/img/icon/icon-one.png'
export default function Branding() {
  return (
    <div className='flex brandingItem text-white items-center gap-5 secondaryBg p-5'>
        <div className="brandingLogo">
            <img src={icon} alt="" />
        </div>
        <div className="brandingContent">
            <h2 className='primaryColor text-xl font-bold'>Branding</h2>
            <p>Make Your Brand With Us</p>
        </div>
    </div>
  )
}
