import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount(count + 3)}>ADD</button>
        <button onClick={() => setCount(0)} disabled={count === 0 && true}>RESET</button>
        <button onClick={() => setCount(count - 2)}>REDUCER</button>
      </div>
    </>
  );
}

export default App;
