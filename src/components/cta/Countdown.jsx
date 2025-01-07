import React, { useState, useEffect } from "react";

export const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-08-01T00:00:00");
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
      return null;
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div>
        <p className="text-xl font-bold">The event has started!</p>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-4">Convention Start :</h2>
      <div className="flex justify-center gap-4 text-lg">
        <div>
          <p className="text-4xl font-extrabold">{timeLeft.days}</p>
          <p>Days</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold">{timeLeft.hours}</p>
          <p>Hours</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold">{timeLeft.minutes}</p>
          <p>Minutes</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold">{timeLeft.seconds}</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};
