// @ts-nocheck
import { useState } from "react";

function Game() {
  const [click, setClick] = useState(0);

  return (
    <>
      <p>{click} times clicked.</p>
      <button onClick={() => setClick(click + 1)}>Click Me!</button>
    </>
  );
}

export default Game;
