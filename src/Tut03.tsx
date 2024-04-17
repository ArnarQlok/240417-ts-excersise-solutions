// import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Antal klick: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Öka</button>
//     </div>
//   );
// };

// export default Counter;

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ count, setCount }: CounterProps) => {
  return (
    <div>
      <p>Antal klick: {count}</p>
      <button onClick={() => setCount(count + 1)}>Öka</button>
    </div>
  );
};

export default Counter;
