import React from 'react'
import Button from './Button'
import './css/captcha.css'

const Captcha = () => {
  return (
    <div className={`w-[60vw] bg-[#151516] border-[4px] shadow-2xl rounded-3xl h-[80vh] flex flex-col`}>
        <div className='w-[100%] text-5xl text-white flex justify-center mt-10 font-bold'><h1 className='absolute'>Click On The <span className='buttonTxt'>Button</span></h1></div>
        <div className='flex'><Button content={"Click Me !!!"}/></div>
    </div>
  )
}

export default Captcha
