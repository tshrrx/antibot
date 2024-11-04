import React from 'react'
import '../../Login/css/button.css'
import { useSelector,useDispatch } from 'react-redux';
import { useRef } from 'react';
import { setFlag } from '../../../redux/slices/captchaSlice';

const Button = (props) => {
  const flag=useSelector(state=>state.captcha.flag);
  const dispatch=useDispatch();
    const mar=Math.floor(Math.random()*90);
    const pos=useRef(mar)

  return (
    <div onClick={()=>{dispatch(setFlag(true))}} className={`ml-[${pos.current}vh] mt-[${pos.current}vh]`}> 
      <button className="btn">
          <span className="glow"></span>
          <span className="btn-content">{props.content}</span>
        </button>
    </div>
  )
}

export default Button
