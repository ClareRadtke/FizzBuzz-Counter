import React, { useState } from "react";
import styles from "./styles.module.css";

import { LandingPage } from "./components/LandingPage/landingPage";

function App() {
  return (
    <div className={styles.main}>
      <LandingPage />
    </div>
  );
}

export default App;
