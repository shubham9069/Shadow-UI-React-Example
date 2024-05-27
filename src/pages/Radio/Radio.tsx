import { ShadowRadioComponent } from "shadow-ui-react";
import styles from "./Radio.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import { ShadowRadioComponent } from "shadow-ui-react";
import styles from "./Radio.module.scss";

const radioCategories: any[] = [
  { name: "Accounting", key: "A", value: "Accounting", disabled: true },

  { name: "Marketing", key: "A", value: "Marketing" },

  { name: "Production", key: "A", value: "Production" },

  { name: "Research", key: "A", value: "Research" },
];

const Radio = () => {
  const onRadioClick = (e: any) => {
    console.log("Radio stateChangeEvent", e);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Radio different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowRadioComponent
            shadowRadioData={radioCategories}
            orientation="horizontal"
            value="Production"
            message="Select Environment Type"
            messageType="error"
            state="default"
            onButtonClick={onRadioClick}
          />
        </div>
      </div>
    </>
  );
};

export default Radio;
`;
const radioCategories: any[] = [
  { name: "Accounting", key: "A", value: "Accounting", disabled: true },

  { name: "Marketing", key: "A", value: "Marketing" },

  { name: "Production", key: "A", value: "Production" },

  { name: "Research", key: "A", value: "Research" },
];

const Radio = () => {
  const onRadioClick = (e: any) => {
    console.log("Radio stateChangeEvent", e);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Radio different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowRadioComponent
            shadowRadioData={radioCategories}
            orientation="horizontal"
            value="Production"
            message="Select Environment Type"
            messageType="error"
            state="default"
            onButtonClick={onRadioClick}
          />
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Radio;
