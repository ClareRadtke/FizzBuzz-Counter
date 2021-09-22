import React from "react";
import styles from "./styles.module.css";

import { LandingPage } from "./components/LandingPage/landingPage";
import { LoginPage } from "./components/LoginPage/loginPage";

function App() {
  return (
    <div className={styles.main}>
      <LoginPage />
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
