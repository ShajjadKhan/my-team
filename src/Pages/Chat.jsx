import React from 'react'
import profilepic from '../../public/img/profilepic/profilepic.jpg'
import close from '../../public/img/icon/close.png'
import Button from '../Components/Button'
export default function Chat() {
  return (
    <div className='chatbox textColor'>
        <div className="chatHeader">
            <div className="chat-img">
                <img src={profilepic} alt="" />
            </div>
            <div className="chattext">
                <h1>Rakib Khan Shamim</h1>
                <p>Active Now <span className='indecator'></span></p>
            </div>
            <div className="closeicon">
              <img className='w-[15px]' src={close} alt="" />
            </div>
        </div>
        <div className="chatfooter absolute bottom-0 ">
          <div></div>
          <input type="text" placeholder='Write Something ...'/>
          <Button btnName='Send'/>
        </div>
    </div>
  )
}
