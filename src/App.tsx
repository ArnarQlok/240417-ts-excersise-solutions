import { useState } from "react";

import "./App.css";

import User from "./Tut01"; //Även tut2
import Counter from "./Tut03";
import CounterWithEvent from "./Tut04";
import Wrapper from "./Tut05";

function App() {
  // Tut03
  const [count, setCount] = useState(0);

  return (
    <main>
      <User name="Arnar" age={35} />
      <Counter count={count} setCount={setCount} />
      <CounterWithEvent />
      <Wrapper>Hello</Wrapper>
    </main>
  );
}

export default App;
