import React from "react";
import styles from "./SignIn.module.css";
import UnderLineInput from "./UnderLineInput";
function SignIn() {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
  });
  function onChangeHandler(event) {
    setValue((oldValue) => {
      return { ...oldValue, [event.target.name]: event.target.value };
    });
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    setValue(() => ({ email: "", password: "" }));
  }
  return (
    <div className={styles["signin-container"]}>
      <h4 className={styles["signin-header"]}>Sign In</h4>
      <form className={styles["signin-form"]} onSubmit={onSubmitHandler}>
        <legend className={styles["signin-form-legend"]}>
          Build your empire through{" "}
          <span className={styles["signin-form-legend-highlight"]}>
            Influencer Marketing
          </span>
        </legend>
        <hr className={styles["signin-form-divide"]}></hr>
        <UnderLineInput
          label="Email"
          name="email"
          value={value.email}
          setValue={onChangeHandler}
        />
        <UnderLineInput
          type="password"
          label="Password"
          name="password"
          value={value.password}
          setValue={onChangeHandler}
          child={
            <span className={styles["signin-form-forgetPassword"]}>
              Forget Password?
            </span>
          }
        />

        <button type="submit" className={styles["signin-form-submit"]}>
          Sign In
        </button>
        <p className={styles["signin-form-description"]}>
          Dont have an account?{" "}
          <span className={styles["signin-form-description-hightlight"]}>
            Get started
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
