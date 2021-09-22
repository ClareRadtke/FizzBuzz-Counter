import React, { useState } from "react";
import styles from "./loginPage.module.css";

export function LoginPage() {
  return (
    <>
      <form autoComplete="off" className={styles.loginForm}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Login</h1>
        </div>

        <div className={styles.emailContainer}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            onChange={(event) => {}}
            // value="email"
            id="email"
            name="email"
            required
            type="email"
            pattern=".+@.+\..+"
            className={styles.input}
          />
        </div>

        <div className={styles.passwordContainer}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            onChange={(event) => {}}
            // value="password"
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
            onClick={(event) => {}}
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
