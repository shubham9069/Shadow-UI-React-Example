
import CodeEditor from "../../layout/CodeEditor/CodeEditor";
import styles from "./OverlayPanel.module.scss";
import {  ShadowOverlay } from "shadow-ui-react";

const value = `import styles from "./OverlayPanel.module.scss";
import {  ShadowOverlay } from "shadow-ui-react";

const OverlayPanel = () => {
  //   const chartData: ShadowChartMetaData = cindeChartData;

  const onButtonClick = (label: any) => {
    console.log("overlayPanel_Label_onClick", label);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            OverlayPanel different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowOverlay
            label="OverlayPanel Panel Example"
            onButtonClick={onButtonClick}
          >
            Test data
          </ShadowOverlay>
        </div>
      </div>
    </>
  );
};

export default OverlayPanel;
`;
const OverlayPanel = () => {
  //   const chartData: ShadowChartMetaData = cindeChartData;

  const onButtonClick = (label: any) => {
    console.log("overlayPanel_Label_onClick", label);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            OverlayPanel different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowOverlay
            label="OverlayPanel Panel Example"
            onButtonClick={onButtonClick}
          >
            Test data
          </ShadowOverlay>
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default OverlayPanel;
