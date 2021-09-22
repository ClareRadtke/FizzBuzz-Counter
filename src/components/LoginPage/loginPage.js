import React, { useState } from "react";
import styles from "./loginPage.module.css";

function handleLogin(username, password, setActivePage) {
  fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.ok) {
      setActivePage("FizzBuzz");
    } else {
      alert("Incorrect username or password, please try again");
    }
  });
}

export function LoginPage(props) {
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  return (
    <>
      <form autoComplete="off" className={styles.loginForm}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Login</h1>
        </div>

        <div className={styles.usernameContainer}>
          <label htmlFor="username" className={styles.label}>
            Username:
          </label>
          <input
            onChange={(event) => {
              updateUsername(event.currentTarget.value);
            }}
            value={username}
            id="username"
            name="username"
            required
            type="text"
            className={styles.input}
          />
        </div>

        <div className={styles.passwordContainer}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            onChange={(event) => {
              updatePassword(event.currentTarget.value);
            }}
            value={password}
            type="password"
            id="password"
            name="password"
            minLength="8"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button
            type="button"
            value="login"
            id="login"
            className={`${styles.button} ${styles.login}`}
            onClick={(event) => {
              handleLogin(username, password, props.setActivePage);
            }}
          >
            Login
          </button>
          <a href="/" className={`${styles.button} ${styles.cancel}`}>
            Cancel
          </a>
        </div>
      </form>
    </>
  );
}
