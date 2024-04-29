import { useState } from "react";
// import "./App.css";

function MyButton() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }

  return <button onClick={handleCount}>Count: {count}</button>
}

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Hello there! Click these buttons for using useState...</h1>
      <MyButton />
      <MyButton />
      <button onClick={handleCount}>Count: {count}</button>
      <button onClick={handleCount}>Count: {count}</button>
    </>
  );
}

export default App;
