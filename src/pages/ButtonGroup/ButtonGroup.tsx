import { ShadowButtonGroup } from "shadow-ui-react";
import styles from "./ButtonGroup.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import { ShadowButtonGroup } from "shadow-ui-react";
import styles from "./ButtonGroup.module.scss";

const ButtonGroup = () => {
  const onButtonGroupClick = (e: any, _value?: any) => {
    console.log(e);
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Button group</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <ShadowButtonGroup buttonGroupData={[{ label: "One" }, { label: "Two" }]} onButtonClick={(e) => onButtonGroupClick(e, "Test")} />
      </div>
    </div>
  );
};

export default ButtonGroup;
`;
const ButtonGroup = () => {
  const onButtonGroupClick = (e: any, _value?: any) => {
    console.log(e);
  };

  return (
    <>
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Button group</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <ShadowButtonGroup buttonGroupData={[{ label: "One" }, { label: "Two" }]} onButtonClick={(e) => onButtonGroupClick(e, "Test")} />
      </div>
    </div>
     <CodeEditor componentToString={value} />
     </>
  );
};

export default ButtonGroup;
