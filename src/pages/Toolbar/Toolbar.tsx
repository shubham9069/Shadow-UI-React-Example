import CodeEditor from "../../layout/CodeEditor/CodeEditor";
import styles from "./Toolbar.module.scss";
import {ShadowToolbar, ShadowToolBarItem, ShadowToolBarStyle}  from "shadow-ui-react";

const value = `import styles from "./Toolbar.module.scss";
import {ShadowToolbar, ShadowToolBarItem, ShadowToolBarStyle}  from "shadow-ui-react";

const toolbarData = [
  { text: "Add", type: "button", icon: "pi pi-plus", action: "Category" },
  { text: "Category (ending May 7)", action: "Category" },
  { icon: "pi pi-cog", action: "Setting" },
  { icon: "pi pi-filter", action: "Filter" },
];

const Toolbar = () => {
  const toolbarItems: ShadowToolBarItem[] = toolbarData;
  const toolbarStyle: ShadowToolBarStyle = {
    textColor: "#005AC2",
    backgroundColor: "#E6F7FF",
    buttonBackground: "#005AC2",
  };

  const toolbarClickHandler = (event: any) => {
    console.log("onToolbarClick", event);
  };

  return (
    <>
      <div className={styles["toolbar-container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Toolbar different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <ShadowToolbar
          toolbarItems={toolbarItems}
          toolbarStyle={toolbarStyle}
          toolbarClickHandler={toolbarClickHandler}
        ></ShadowToolbar>
      </div>
    </>
  );
};

export default Toolbar;
`;
const toolbarData = [
  { text: "Add", type: "button", icon: "pi pi-plus", action: "Category" },
  { text: "Category (ending May 7)", action: "Category" },
  { icon: "pi pi-cog", action: "Setting" },
  { icon: "pi pi-filter", action: "Filter" },
];

const Toolbar = () => {
  const toolbarItems: ShadowToolBarItem[] = toolbarData;
  const toolbarStyle: ShadowToolBarStyle = {
    textColor: "#005AC2",
    backgroundColor: "#E6F7FF",
    buttonBackground: "#005AC2",
  };

  const toolbarClickHandler = (event: any) => {
    console.log("onToolbarClick", event);
  };

  return (
    <>
      <div className={styles["toolbar-container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Toolbar different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <ShadowToolbar
          toolbarItems={toolbarItems}
          toolbarStyle={toolbarStyle}
          toolbarClickHandler={toolbarClickHandler}
        ></ShadowToolbar>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Toolbar;
