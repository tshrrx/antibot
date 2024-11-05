import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClick, addMouseMovement, setFlag } from '../../../redux/slices/captchaSlice';
import Header from '../../Login/Header';
import Button from './Button';
import {setResult} from '../../../redux/slices/captchaSlice';
import './css/captcha.css';

const Captcha = () => {
  const flag = useSelector(state => state.captcha.flag);
  var mouseMovements = useSelector(state => state.captcha.mouseMovements);
  const dispatch = useDispatch();
  const result = useSelector(state => state.captcha.result);

  useEffect(() => {
    const handleMouseMove1 = (event) => {
      const { clientX, clientY } = event;
      const timestamp = Date.now();
      dispatch(addMouseMovement({ x: clientX, y: clientY, timestamp, button: 'NoButton', state: 'Move' }));
    };

    const handleMouseMove2 = (event) => {
      const { clientX, clientY, button } = event;
      const timestamp = Date.now();
      dispatch(addMouseMovement({ x: clientX, y: clientY, timestamp, button, state: 'Pressed' }));
    };

    const handleMouseMove3 = (event) => {
      const { clientX, clientY, button } = event;
      const timestamp = Date.now();
      dispatch(addMouseMovement({ x: clientX, y: clientY, timestamp, button, state: 'Released' }));
    };

    window.addEventListener('mousemove', handleMouseMove1);
    window.addEventListener('mousedown', handleMouseMove2);
    window.addEventListener('mouseup', handleMouseMove3);
    
    return () => {
      window.addEventListener('mousemove', handleMouseMove1);
      window.addEventListener('mousedown', handleMouseMove2);
      window.addEventListener('mouseup', handleMouseMove3);
    };
  }, [dispatch]);

  const generateCSV = async () => {
    const data = [...mouseMovements];
    console.log('Sending data to server:', data);
  
    try {
        const response = await fetch('http://localhost:3000/save-csv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data }),
        });

        console.log('Response:', response);
  
        if (response.ok) {
          const fetchResult = async () => {
            try {
              const response = await fetch('http://localhost:3000/read-result');
              const tempData = await response.text();
              const data=tempData.split('\n')
              let str='';
              str+=String(data[1])
              dispatch(setResult(str));
              
            } catch (error) {
              console.error('Error fetching result:', error);
            }
          };
      
          fetchResult();
        } else {
            console.error('Error saving file:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
  };

  const handleClick = () => {
    console.log("Mouse Movements:", mouseMovements);
    console.log("Mouse Clicks:", clicks);
    // sendDataToAPI();
  };

  return (
    <div className={`w-[100vw] shadow-2xl rounded-3xl h-[100vhvh] flex flex-col`}>
      <div className='w-[100%] text-5xl text-white absolute mt-10 font-bold'>
        <Header content={"click the button"} />
      </div>
      <div className='clickbtn absolute' onClick={generateCSV} >
        <Button content={"Click Me !!!"}/>
      </div>
    </div>
  );
};

export default Captcha;