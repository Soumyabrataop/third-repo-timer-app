import React, { useState, useEffect, useRef } from "react";

const Timer = ({ target }) => {
  const [timeDiff, setTimeDiff] = useState(null);
  const currTimeRef = useRef(null);

  function padTime(num) {
    return num.toString().padStart(2, "0");
  }

  const convertToTimeArray = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return { hours, minutes };
  };

  const calculateTimeDiff = (targetTime, currTime) => {
    const target = convertToTimeArray(targetTime);
    const current = convertToTimeArray(currTime);

    const targetTotalMinutes = target.hours * 60 + target.minutes;
    const currTotalMinutes = current.hours * 60 + current.minutes;

    const diff = targetTotalMinutes - currTotalMinutes;

    if (diff > 0) {
      const remainingHours = Math.floor(diff / 60);
      const remainingMinutes = diff % 60;
      return `${padTime(remainingHours)}:${padTime(remainingMinutes)}`;
    } else {
      return "Target time reached!";
    }
  };

  useEffect(() => {
    const now = new Date();
    currTimeRef.current = `${now.getHours()}:${now.getMinutes()}`;

    const updateTimeDiff = () => {
      const newDiff = calculateTimeDiff(target, currTimeRef.current);
      setTimeDiff(newDiff);
    };

    updateTimeDiff();
    const interval = setInterval(() => {
      const now = new Date();
      currTimeRef.current = `${now.getHours()}:${now.getMinutes()}`;
      updateTimeDiff();
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div class="text-center mt-4">
      <h1 className="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-bold tracking-tight text-foreground">
        {timeDiff}
      </h1>
    </div>
  );
};

export default Timer;
