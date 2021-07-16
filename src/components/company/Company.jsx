import React from "react";
import Typist from "react-typist";
import styles from "./Company.module.css";
function Company() {
  const [typeDone, setTypeDone] = React.useState(false);
  React.useEffect(() => {
    setTypeDone(false);
  }, [typeDone]);
  return (
    <div className={styles["company-container"]}>
      <section className={styles["company-primary-details"]}>
        <i className={styles["company-logo"]}>
          <span className={styles["company-logo-path"]}></span>
        </i>
        <h1 className={styles["company-name-start"]}>Go</h1>
        <span className={styles["company-name-end-wrap"]}>
          {!typeDone && (
            <Typist
              onTypingDone={() => setTypeDone(true)}
              className={styles["company-name-end"]}
            >
              influencer
              <Typist.Delay ms={800} />
            </Typist>
          )}
        </span>
      </section>
      <section className={styles["company-secondary-details"]}>
        <p className={styles["company-description"]}>
          Give your brand a rocket boost with{" "}
          <span className={styles["company-highlight"]}>
            Influencer Marketing
          </span>
        </p>
      </section>
    </div>
  );
}

export default Company;
