import React, { useState } from "react";
import styles from "./landingPage.modules.css";

export function fizzBuzz(count) {
  if (count === 0) {
    return count;
  } else if (count % 3 === 0 && count % 5 === 0) {
    return "FizzBuzz";
  } else if (count % 5 === 0) {
    return "Buzz";
  } else if (count % 3 === 0) {
    return "Fizz";
  } else {
    return count;
  }
}

export function LandingPage({ startCount }) {
  const [count, setCount] = useState(startCount ?? 0);

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
    <>
      {/* <div>
        <p>
          Click the buttons below to increase and decrease the count and find
          the instances of Fizz, Buzz and FizzBuzz. Can you find the pattern?
        </p>
      </div> */}
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
          <span id="count" className={`${styles.text} ${styles.counter}`}>
            {fizzBuzz(count)}
          </span>
        </p>
      </div>
    </>
  );
}
