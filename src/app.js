import React, { useState } from "react";
import styles from "./styles.module.css";

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    if (count > 100) {
      setCount(count);
      alert("Count cannot exceed 100");
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  }
  function decrementCount() {
    if (count <= 0) {
      setCount(count);
      alert("Count cannot go below zero");
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.buttonContainer}>
        <button
          id="increment"
          className={styles.button}
          type="button"
          onClick={incrementCount}
        >
          +
        </button>
        <button
          id="decrement"
          className={styles.button}
          type="button"
          onClick={decrementCount}
        >
          -
        </button>
      </div>
      <div className={styles.textContainer}>
        <p id="text-output" className={styles.text}>
          count:
          <span id="count" className={styles.text}>
            {count}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
