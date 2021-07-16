import React from "react";
import Company from "./company/Company";
import SignIn from "./auth/SignIn";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles["app-container"]}>
      <Company />
      <SignIn />
      <div className={styles["left-triangle"]}></div>
      <div className={styles["right-triangle"]}></div>
    </div>
  );
}

export default App;
