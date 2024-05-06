import { ShadowInputSwitch } from "shadow-ui-react";
import styles from "./InputSwitch.module.scss";

const InputSwitch = () => {
  const stateChangeEvent = (e: any) => {
    console.log("InputSwitch stateChangeEvent", e);
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>InputSwitch different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        Default <ShadowInputSwitch />
        Checked <ShadowInputSwitch checked={true} onClick={stateChangeEvent} />
        Disabled <ShadowInputSwitch disabled={true} />
      </div>
    </div>
  );
};

export default InputSwitch;
