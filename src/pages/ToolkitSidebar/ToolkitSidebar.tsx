import styles from "./ToolkitSidebar.module.scss";
import { ShadowToolkitSidebar }  from "shadow-ui-react";

const ToolkitSidebar = () => {
  return (
    <div className={styles["toolbar-container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Toolkit Sidebar</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking to view the object)</span>
      </p>
      <ShadowToolkitSidebar title={"Widget Configuration"}></ShadowToolkitSidebar>
    </div>
  );
};

export default ToolkitSidebar;
