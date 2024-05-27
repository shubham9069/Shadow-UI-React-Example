import CodeEditor from "../../layout/CodeEditor/CodeEditor";
import styles from "./AreaAction.module.scss";
import { ShadowAreaAction} from "shadow-ui-react";

const AreaAction = () => {
  const onAreaActionButtonClick = (e: any) => {
    console.log("onAreaActionButtonClickEvent", e);
  };
  const value = `import CodeEditor from "../../layout/CodeEditor/CodeEditor";
import styles from "./AreaAction.module.scss";
import { ShadowAreaAction} from "shadow-ui-react";

const AreaAction = () => {
  const onAreaActionButtonClick = (e: any) => {
    console.log("onAreaActionButtonClickEvent", e);
  };
  
  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            AreaAction different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowAreaAction
            areaActionOption={{
              title: "Table Widget",
              primaryButtonText: "Preview",
              primaryButtonIcon: "pi pi-eye",
              secondaryButtonText: "Pin to Board",
              secondaryButtonIcon: "pi pi-user",
            }}
            areaActionHandler={onAreaActionButtonClick}
          ></ShadowAreaAction>
        </div>
      </div>
    </>
  );
};

export default AreaAction;
`;
  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            AreaAction different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowAreaAction
            areaActionOption={{
              title: "Table Widget",
              primaryButtonText: "Preview",
              primaryButtonIcon: "pi pi-eye",
              secondaryButtonText: "Pin to Board",
              secondaryButtonIcon: "pi pi-user",
            }}
            areaActionHandler={onAreaActionButtonClick}
          ></ShadowAreaAction>
        </div>
      </div>
      
        <CodeEditor componentToString={value} />
  
    </>
  );
};

export default AreaAction;
