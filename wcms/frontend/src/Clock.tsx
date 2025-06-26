import { useState, useEffect } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: "1.5rem", color: "#007acc", margin: "1rem 0" }}>
      🕒 Current time: {time}
    </div>
  );
};
