import React, { useState } from "react";
import { ShadowTabItem, ShadowTab }  from "shadow-ui-react";
import styles from "./Tab.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import React, { useState } from "react";
import { ShadowTabItem, ShadowTab }  from "shadow-ui-react";
import styles from "./Tab.module.scss";

const tabs: ShadowTabItem[] = [
  { label: "Tab 1", id: "1", icon: "pi pi-home", closable: true, editable: true },
  { label: "Tab 2", closable: false, editable: true, id: "2" },
  { label: "Tab 3", closable: false, editable: true, id: "3" },
];

const popupEdit: ShadowTabItem[] = [
  { label: "Tab 1", closable: true, editable: true, id: "1" },
  { label: "Tab 2", closable: false, editable: true, id: "2" },
  { label: "Tab 3", closable: false, editable: true, id: "3" },
];

const Tab = () => {
  const [currTab, setCurrTab] = useState(tabs[0]);
  const [popUpTab, setPopUpTab] = useState(popupEdit[1]);

  const onSelectTab = (tab: ShadowTabItem) => {
    console.log("onSelect Tab", tab);
    setCurrTab(tab);
  };

  const onSelectPopUpTab = (tab: ShadowTabItem) => {
    console.log("onSelectTab", tab);
    setPopUpTab(tab);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>Tabs</span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking to view the object)
          </span>
        </p>
        {/* Render the first tabview */}
        <ShadowTab tabs={tabs} activeTab={currTab} onSelectTab={onSelectTab} />
        <br />
        Popup Edit:
        <br />
        {/* Render the second tabview */}
        <ShadowTab
          tabs={popupEdit}
          editType={"popup"}
          activeTab={popUpTab}
          onSelectTab={onSelectPopUpTab}
        />
      </div>
    </>
  );
};

export default Tab;
`;
const tabs: ShadowTabItem[] = [
  { label: "Tab 1", id: "1", icon: "pi pi-home", closable: true, editable: true },
  { label: "Tab 2", closable: false, editable: true, id: "2" },
  { label: "Tab 3", closable: false, editable: true, id: "3" },
];

const popupEdit: ShadowTabItem[] = [
  { label: "Tab 1", closable: true, editable: true, id: "1" },
  { label: "Tab 2", closable: false, editable: true, id: "2" },
  { label: "Tab 3", closable: false, editable: true, id: "3" },
];

const Tab = () => {
  const [currTab, setCurrTab] = useState(tabs[0]);
  const [popUpTab, setPopUpTab] = useState(popupEdit[1]);

  const onSelectTab = (tab: ShadowTabItem) => {
    console.log("onSelect Tab", tab);
    setCurrTab(tab);
  };

  const onSelectPopUpTab = (tab: ShadowTabItem) => {
    console.log("onSelectTab", tab);
    setPopUpTab(tab);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>Tabs</span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking to view the object)
          </span>
        </p>
        {/* Render the first tabview */}
        <ShadowTab tabs={tabs} activeTab={currTab} onSelectTab={onSelectTab} />
        <br />
        Popup Edit:
        <br />
        {/* Render the second tabview */}
        <ShadowTab
          tabs={popupEdit}
          editType={"popup"}
          activeTab={popUpTab}
          onSelectTab={onSelectPopUpTab}
        />
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Tab;
