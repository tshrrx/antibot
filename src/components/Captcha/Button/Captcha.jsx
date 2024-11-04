import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClick, addMouseMovement } from '../../../redux/slices/captchaSlice';
import Button from './Button';
import './css/captcha.css';

const Captcha = () => {
  const flag=useSelector(state=>state.captcha.flag);
  const mouseMovements=useSelector(state=>state.captcha.mouseMovements);
  const clicks=useSelector(state=>state.captcha.clicks);
  const dispatch=useDispatch(); 

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const timestamp = Date.now();
            dispatch(addMouseMovement({ x: clientX, y: clientY, timestamp }));
        };

        const handleMouseClick=(event)=>{
          const { clientX, clientY } = event;
          const timestamp = Date.now();
          dispatch(addClick({ x: clientX, y: clientY, timestamp }));
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleMouseClick);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [dispatch]);

  // Send data to ML API
  // const sendDataToAPI = async () => {
  //   const apiEndpoint = 'https://your-ml-api-endpoint.com/analyze'; // Replace with your API endpoint

  //   const dataPayload = {
  //     mouseMovements: mouseMovements.current,
  //     clickPositions: clickPositions.current,
  //   };

  //   try {
  //     const response = await fetch(apiEndpoint, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(dataPayload),
  //     });

  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log('ML API Response:', result);
  //     } else {
  //       console.error('API Error:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Request Failed:', error);
  //   }
  // };

  const handleClick = () => {
    console.log("Mouse Movements:", mouseMovements.current);
    console.log("Mouse Clicks:", clickPositions.current);
    // sendDataToAPI();
    mouseMovements.current = [];
    clickPositions.current = [];
  };

  return (
    <div className={`w-[60vw] bg-[#151516] border-[4px] shadow-2xl rounded-3xl h-[80vh] flex flex-col`}>
      <div className='w-[100%] text-5xl text-white flex justify-center mt-10 font-bold'>
        <h1 className='absolute'>Click On The <span className='buttonTxt'>Button</span></h1>
      </div>
      <div className='flex'>
        <Button content={"Click Me !!!"} onClick={handleClick} />
      </div>
      {console.log(mouseMovements)}
      {console.log("clicks",clicks) }
    </div>
  );
};

export default Captcha;
