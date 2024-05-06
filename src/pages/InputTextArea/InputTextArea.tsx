import React, { useState } from "react";
import { ShadowInputTextArea } from "shadow-ui-react";
import styles from "./InputTextArea.module.scss";

const InputTextArea = () => {
  const [areaValue, setAreaValue]: any = useState("");

  const onChange = (e: any) => {
    setAreaValue(e);
  };

  const onPressEnter = (e: any) => {
    console.log(e);
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>InputTextArea different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <ShadowInputTextArea
          header="Input Text Area"
          autoResize={true}
          size={"small"}
          value={areaValue}
          cols={30}
          rows={5}
          state={"error"}
          placeholder={"testing placeholder"}
          onChange={onChange}
          onPressEnter={onPressEnter}
        />
      </div>
    </div>
  );
};

export default InputTextArea;
