/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFlag } from '../../../redux/slices/captchaSlice';
import '../../Login/css/button.css';

const Button = (props) => {
  const flag=useSelector(state=>state.captcha.flag);
  const dispatch=useDispatch();
    const mar=Math.floor(Math.random()*90);
    const pos=useRef(mar)

  return (
    <div onClick={()=>{dispatch(setFlag(true))}} className={`ml-[${pos.current}vh] mt-[${pos.current}vh]`}> 
    {/* <div className={`ml-[${pos.current}vh] mt-[${pos.current}vh]`}>  */}
      <button className="btn">
          <span className="glow"></span>
          <span className="btn-content">{props.content}</span>
        </button>
    </div>
  )
}

export default Button