import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

import { LandingPage } from "./components/LandingPage/landingPage";
import { LoginPage } from "./components/LoginPage/loginPage";

function App() {
  const [data, setData] = React.useState(null);
  const [ActivePage, setActivePage] = React.useState("LoginPage");

  React.useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className={styles.main}>
      {ActivePage === "FizzBuzz" ? (
        <LandingPage />
      ) : (
        <LoginPage setActivePage={setActivePage} />
      )}
    </div>
  );
}

export default App;
