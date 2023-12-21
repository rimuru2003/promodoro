import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./App.css";

const Hero = () => {
  const [active, setActive] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
            setIsRunning(false);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleClick = (buttonName) => {
    setActive(buttonName);

    if (buttonName === "work") {
      setTimeRemaining(25 * 60);
    } else if (buttonName === "break") {
      setTimeRemaining(15 * 60);
    } else if (buttonName === "shortBreak") {
      setTimeRemaining(7.5 * 60);
    }
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeRemaining(25 * 60);
    setActive(null);
  };

  return (
    <div>
      <div className="go">
        <div className="ae">PROMODORO TIMER</div>
        <div className="yu">
          <button
            className={`qw long-break ${active === "work" && "active"}`}
            onClick={() => handleClick("work")}
          >
            Work
          </button>
          <button
            className={`qw break ${active === "break" && "active"}`}
            onClick={() => handleClick("break")}
          >
            Break
          </button>
          <button
            className={`qw short-break ${active === "shortBreak" && "active"}`}
            onClick={() => handleClick("shortBreak")}
          >
            Short Break
          </button>
        </div>
        <div className="ki">
          <div className="ji">
            <CircularProgressbar
              value={(timeRemaining / (25 * 60)) * 100}
              text={`${Math.floor(timeRemaining / 60)}:${timeRemaining % 60}`}
              styles={buildStyles({
                pathColor: `rgba(62, 152, 199, ${60 / 100})`,
                textColor: "#f88",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
        </div>
        <div className="lo">
        

          <button className="hi" onClick={handleStart}>
            Start
          </button>

          <button className="hi" onClick={handlePause}>
            Pause
          </button>

          <button className="hi" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
