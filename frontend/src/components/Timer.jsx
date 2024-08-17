import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "August 18, 2024 9:00 AM";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white  bg-gradient-to-r  from-indigo-500 via-purple-600 grid grid-flow-col gap-5 place-content-center auto-cols-max">    
      <div className="flex text-white flex-col p-2 bg-neutral rounded-box text-neutral-content">
        
        <span className="countdown  font-mono text-5xl">
          {days < 10 ? "0" + days : days}
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          {hours < 10 ? "0" + hours : hours}
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          {minutes < 10 ? "0" + minutes : minutes}
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          {seconds < 10 ? "0" + seconds : seconds}
        </span>
        sec
      </div>
    </div>
  );
};

export default Timer;
