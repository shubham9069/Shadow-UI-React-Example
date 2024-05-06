import React, { useState } from "react";
import { ShadowPopup } from "shadow-ui-react";
import styles from "./Popup.module.scss";

const Popup = () => {
  const [displayDialog, setDisplayDialog] = useState(true);

  const handleDisplayChange = (event: boolean) => {
    setDisplayDialog(false);
    console.log("handleDisplayChange", event);
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Popup</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <ShadowPopup display={displayDialog} title="Hello World" displayChange={handleDisplayChange}>
          Hello World again
        </ShadowPopup>
      </div>
    </div>
  );
};

export default Popup;
