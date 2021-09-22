import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

import { LandingPage } from "./components/LandingPage/landingPage";
import { LoginPage } from "./components/LoginPage/loginPage";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className={styles.main}>
      {/* <LoginPage /> */}
      <p>{!data ? "Loading..." : data}</p>
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
