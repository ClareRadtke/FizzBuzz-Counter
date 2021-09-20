import React from "react";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.buttonContainer}>
        <button id="increment" className={styles.button}>
          +
        </button>
        <button id="decrement" className={styles.button}>
          -
        </button>
      </div>

      <div id="text-output" className={styles.text}>
        text
      </div>
    </div>
  );
}

export default App;
