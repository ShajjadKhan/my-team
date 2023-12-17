import React from 'react'
import Button from './Button'
import profilePic from '../../public/img/profilepic/profilepic.jpg';
import facebook from '../../public/img/icon/facebook.png'
import github from '../../public/img/icon/github.png'
import linkedin from '../../public/img/icon/linkedin.png'
import youtube from '../../public/img/icon/youtube.png'
export default function DeveloperCard() {
  return (
    <div className='textColor developerCard flex justify-center items-center flex-col gap-2 secondaryBg p-3'>
        <div className="profilePic w-[100px] h-[100px] mb-3 rounded-[50%] p-1 primaryBg">
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1701847984~exp=1701848584~hmac=beef1822760ce66194dad1e7482c90677058d74fcd3c28233ebb5a7da88f1efd" alt="profilepic" className='rounded-[50%] w-full h-full object-cover' />
        </div>
        <div className="developername">
            <h1 className='text-xl mb-2'>Rakib Khan Shamim</h1>
        </div>
        <div className="developerDesignation mb-2">
            <h2 className='primaryColor'>Founder CEO</h2>
        </div>
        <div className="developerDescription mb-5">
            <p className='text-[#BCB7B7] text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam tempora nisi accusantium voluptatem architecto deserunt. </p>
        </div>
        <div className="developerSocialAccount flex items-center gap-5 justify-center">
            <div className='w-[40px] h-[40px] bg-[#316FF6] p-2  cursor-pointer hover:bg-[transparent]'>
                <img src={facebook} alt="" className='h-full w-full'/>
            </div>
            <div className='w-[40px] h-[40px] bg-[#000] p-2 cursor-pointer hover:bg-[transparent]'>
                <img src={github} alt="" className='h-full'/>
            </div>
            <div className='w-[40px] h-[40px] bg-[#0077b5] p-2 cursor-pointer hover:bg-[transparent]'>
                <img src={linkedin} alt="" className='h-full'/>
            </div>
            <div className='w-[40px] h-[40px] bg-[#CD201F] flex justify-center items-center p-2 cursor-pointer hover:bg-[transparent]'>
                <img src={youtube} alt="" className='h-full w-full mt-2'/>
            </div>
        </div>
        <div className="developerButton mt-4">
            <Button btnName="View Profile"/>
        </div>
    </div>
  )
}
