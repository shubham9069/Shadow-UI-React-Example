import { ShadowCheckbox } from "shadow-ui-react";
import styles from "./Checkbox.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import { ShadowCheckbox } from "shadow-ui-react";
import styles from "./Checkbox.module.scss";

const Checkbox = () => {
  const onClick = (e: any) => {
    console.log("event", e);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Checkbox different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowCheckbox
            onClick={onClick}
            styleType="default"
            label="Default"
          />
          <ShadowCheckbox onClick={onClick} styleType="error" label="Error" />
          <ShadowCheckbox
            onClick={onClick}
            type="triState"
            styleType="default"
            label="TriState Default"
          />
          <ShadowCheckbox
            onClick={onClick}
            type="triState"
            styleType="error"
            label="TriState error"
          />
          <ShadowCheckbox
            onClick={onClick}
            disabled={true}
            styleType="default"
            label="Disabled"
          />
        </div>
      </div>
    </>
  );
};

export default Checkbox;
`;
const Checkbox = () => {
  const onClick = (e: any) => {
    console.log("event", e);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Checkbox different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowCheckbox
            onClick={onClick}
            styleType="default"
            label="Default"
          />
          <ShadowCheckbox onClick={onClick} styleType="error" label="Error" />
          <ShadowCheckbox
            onClick={onClick}
            type="triState"
            styleType="default"
            label="TriState Default"
          />
          <ShadowCheckbox
            onClick={onClick}
            type="triState"
            styleType="error"
            label="TriState error"
          />
          <ShadowCheckbox
            onClick={onClick}
            disabled={true}
            styleType="default"
            label="Disabled"
          />
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Checkbox;
