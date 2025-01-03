import React, { useState, useEffect } from "react";
import "./global.css";
import Timer from "./Timer";

const App = () => {
  const [time, setTime] = useState(() => {
    const date = new Date();
    return `${padTime(date.getHours())}:${padTime(date.getMinutes())}`;
  });

  const [targetTime, setTargetTime] = useState("");
  const [isTargetSet, setIsTargetSet] = useState(false);

  function padTime(num) {
    return num.toString().padStart(2, "0");
  }

  const handleTimeChange = (event) => {
    setTargetTime(event.target.value);
  };

  const convertToMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const isTargetTimeValid = () => {
    const targetMinutes = convertToMinutes(targetTime);
    const currentMinutes = convertToMinutes(time);
    return targetMinutes > currentMinutes;
  };

  const handleSetTarget = () => {
    if (isTargetTimeValid()) {
      setIsTargetSet(true);
    } else {
      alert("Please select a valid target time that is in the future.");
    }
  };

  return (
    <div className="mt-10 absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="block mx-auto p-4 bg-white shadow-lg rounded-lg w-96">
        <h1 className="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground dark:text-white md:text-5xl/[1.1]">
          Timer
        </h1>

        <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <input
            type="time"
            value={targetTime}
            onChange={handleTimeChange}
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Enter Time (in HH:MM)
          </span>
        </label>

        <button
          onClick={handleSetTarget}
          className="mt-4 bg-black hover:bg-black-600 text-white px-2 rounded"
        >
          Set Target
        </button>

        {isTargetSet && <Timer target={targetTime} currTime={time} />}
      </div>
    </div>
  );
};

export default App;
