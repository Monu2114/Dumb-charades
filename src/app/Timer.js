'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause,faStop } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

export default function Time(){
    const minutes = 5;
    const seconds = 0;
    const [timer, setTimer] = useState(minutes * 60 + seconds);
    const [isRunning, setIsRunning] = useState(false); 
  
    useEffect(() => {
      let interval;
      if (isRunning) {
        interval = setInterval(() => {
          setTimer( timer - 1);
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [isRunning,timer]);
  
    const handlePlayPause = () => {
      setIsRunning(!isRunning);
    }
  
    const handleStop = () => {
      setIsRunning(false);
      setTimer(minutes * 60 + seconds);
      
    }
    const HandleMinute=()=>{
      setTimer(timer+60);
    }
    return(
        <div className="flex-row justify-space rounded-full px-10 py-20 text-white text-4xl font-bold bg-gray-700 hover:bg-gray-500bg-gray-700 rounded-xl">
        <button>
    <span onClick={handlePlayPause} >
      {isRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}{'   '}
    </span> 
    
    {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}{'     '}
    <span onClick={handleStop}>
          <FontAwesomeIcon icon={faStop} /> 
    </span>
    <div className="flex flex-row justify-center mb-[-5vh] padding-10vh">
  <span style={{border: '5px solid white', borderRadius: '50%', padding: '2px'}}  onClick={HandleMinute}  >
   {"   "} +1
  </span>
  </div>
  </button> </div>
    )
}