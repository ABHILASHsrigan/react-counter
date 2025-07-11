import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div> 
      <div>
        <button data-testid="minusonebtn" onClick={() => setCount(count - 1)}>-1</button>
        <button data-testid="plusonebtn" onClick={() => setCount(count + 1)}>+1</button>
        <div>
          <button data-testid="resetbtn" onClick={() => setCount(0)}> Reset</button>
        </div>
      </div>

      <span data-testid="counter">{count}</span>

      <div>
        <span data-testid="odd-or-even">
          {count % 2 === 0 ? "Even" : "Odd"}
        </span>
        <span data-testid="is-prime">
          {isPrime(count) ? "Prime" : "Not Prime"}
        </span>
      </div>
    </div>
  );
}

export default App;
