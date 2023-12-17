import React from 'react'
import Button from './Button'
import img from '../../public/img/profile.png'
import { Link } from 'react-router-dom'

export default function PopUp({click,setClick}) {
    const handlepopUp = () =>{
        setClick(false)
    }
  return (
    <div className={click ? 'textColor w-[200px] flex justify-center items-center flex-col p-5 borderforrks fixed right-[100px] mt-2 secondaryBg ' : 'textColor w-[200px] hidden justify-center items-center flex-col p-5 borderforrks fixed right-[100px] mt-2 secondaryBg '}>
        <div className="userimg w-[80px] h-[80px] rounded-[50%] p-[2px] primaryBg">
            <img src={img} alt="user-img"  className='w-full object-cover h-full rounded-[50%]'/>
        </div>
        <div className="user-name">
            <h1>Name : <span className=' text-[#A6A1A1]'>Md Shamim</span></h1>
        </div>
        <div className="user-id">
            <h3 className=''>ID:<span className='ml-2 text-[#A6A1A1]'>Rks789547652</span> </h3>
        </div>
        <Link className="button" to='/userdetails' onClick={handlepopUp}>
            <Button btnName="View Profile"/>
        </Link>
    </div>
  )
}
