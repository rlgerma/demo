import { useEffect, useState } from "react";

export default function Timer({ count }) {
  const [time, setTime] = useState(count);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time <= 0) {
      clearTimeout(timer);
    }
  }, [time]);
  return <p className='game-timer'>{time} seconds left</p>;
}
