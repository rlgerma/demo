import { useState } from "react";
import Counter from "./Counter";
import Timer from "./Timer";
function Game() {
  const [click, setClick] = useState(0);
  const [timer, setTimer] = useState(60);
  return (
    <>
      <Timer count={timer} />
      <div className='game-wrap'>
        <Counter count={click} />
        <button className='nes-btn is-primary' onClick={() => setClick(click + 1)}>
          Water me!
        </button>
      </div>
    </>
  );
}

export default Game;
