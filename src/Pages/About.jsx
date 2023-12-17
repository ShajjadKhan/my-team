import React from 'react'
import PageTitle from '../Components/PageTitle'
import Button from '../Components/Button'
import aboutimg from '../../public/img/illustrator/about.png'
export default function About() {
  return (
    <div className=''>
        <PageTitle pageMaintitle="About Us" pageName="About" pageDes=" We're passionate about turning ideas into functional, visually stunning
        realities that resonate with audiences and drive success in the online
        world"/>

        <div className="row flex flex-col lg:flex-row justify-between items-center mt-[50px] py-10">
            <div className="about-content textColor w-full lg:w-[50%]">
                <h1 className='text-xl mb-3'>About Us</h1>
                <h1 className='text-3xl font-bold primaryColor mb-3'>Meet Your Dream App With Us.</h1>
                <p className='text-[#A6A1A1] mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ipsam rerum ex, voluptatibus tempora non? Placeat, facere possimus. Excepturi nobis illo doloribus temporibus quod fuga consequuntur dignissimos, voluptatem dolorem repellat!</p>
                <Button btnName="Our Services"/>
            </div>
            <div className="aboutimg w-full lg:w-[40%] p-0 mt-10">
                <img src={aboutimg} className='w-full' alt="" />
            </div>
        </div>
    </div>
  )
}
