import { useState } from "react";

import Game from "../components/game";
function App() {
  const [click, setClick] = useState(0);

  return (
    <div>
      <Game />
    </div>
  );
}

export default App;
