import React from "react";
import styles from "./styles.module.css";

function App() {
  let count = 0;
  return (
    <div className={styles.main}>
      <div className={styles.buttonContainer}>
        <button
          id="increment"
          className={styles.button}
          type="button"
          onClick={(event) => {
            console.log(count++);
            if (count > 100) {
              alert("Count cannot exceed 100");
            }
          }}
        >
          +
        </button>
        <button
          id="decrement"
          className={styles.button}
          type="button"
          onClick={(event) => {
            console.log(count--);
            if (count < 0) {
              alert("Count cannot go below zero");
            }
          }}
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
