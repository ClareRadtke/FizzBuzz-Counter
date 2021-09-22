import React, { useState } from "react";
import styles from "./styles.module.css";

import { LandingPage } from "./components/LandingPage/landingPage";
import { LoginPage } from "./components/LoginPage/loginPage";

function App() {
  const [ActivePage, setActivePage] = React.useState("LoginPage");

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
