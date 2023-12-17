import React from 'react'
import PageTitle from '../Components/PageTitle'
import contactImg from '../../public/img/login.png'
import Button from '../Components/Button'
export default function Contact() {
  return (
    <div>
       
        <PageTitle pageName="Contact" pageMaintitle="Contact Us" pageDes="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa et architecto beatae corporis a magnam suscipit?"/>
        <div className="row flex justify-between items-center textColor lg:flex-row-reverse flex-col">
            <div className="left-side secondaryBg p-3 borderforrks w-full lg:w-1/2  mt-10">
               
                <div className="form-group">
                    <h1 className='textColor text-center font-medium text-xl'>Contact Us</h1>
                    <div className="form-control">
                        <input type="text" placeholder='Name'/>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder='Email'/>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder='Subject'/>
                    </div>
                    <div className="form-control textArea">
                        <textarea name="" cols="30" rows="10" placeholder='Message..' className='w-full border-none outline-none bg-transparent p-2'></textarea>
                    </div>
                    <div className="form-control ">
                       <Button btnName="Submit" />
                    </div>
                </div>
            </div>
            <div className="right-side">
                <img src={contactImg} alt="" />
            </div>
        </div>
    </div>
  )
}
