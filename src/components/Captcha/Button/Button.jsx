import React from 'react'
import './css/button.css'
import { useSelector,useDispatch } from 'react-redux';
import { setFlag } from '../../../redux/slices/captchaSlice';

const Button = (props) => {
  const flag=useSelector(state=>state.captcha.flag);
  const dispatch=useDispatch();
    const mar=Math.floor(Math.random()*50);

  return (
    <div onClick={()=>{dispatch(setFlag(false))}} className={`m-[${mar}vh]`}> 
      <div className={`box p-3 hover:cursor-pointer`}>{props.content}</div>
    </div>
  )
}

export default Button
