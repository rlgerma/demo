import { useState, useEffect } from "react";
import Counter from "./Counter";
import Timer from "./Timer";

function Plant({ imWatered }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (score === 6) {
      imWatered();
    }
  }, [score]);

  return score < 6 ? (
    <>
      <Counter count={score} />
      <button className='nes-btn is-primary' onClick={() => setScore(score + 1)}>
        Water me!
      </button>
    </>
  ) : (
    <p>I'm Watered</p>
  );
}

function Stats({ score }) {
  return (
    <>
      <h3>Plants grown: {score}</h3>
    </>
  );
}
function Game() {
  const [time, setTime] = useState(20);
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [plants, setPlants] = useState([1]);

  const gameIsDone = time === 0 ? true : false;
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time <= 0) {
      clearTimeout(timer);
    }
  }, [time]);

  return !gameIsDone ? (
    <>
      <Timer time={time} />
      <div className='game-wrap'>
        {plants.map((plant, index) => {
          return <Plant key={index} imWatered={() => setPlants([...plants, 1])} />;
        })}
      </div>
    </>
  ) : (
    <Stats score={plants.length} />
  );
}

export default Game;
