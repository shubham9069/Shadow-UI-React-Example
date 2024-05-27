import {ShadowTieredMenu}  from "shadow-ui-react";
import styles from "./TieredMenu.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import {ShadowTieredMenu}  from "shadow-ui-react";
import styles from "./TieredMenu.module.scss";

const tieredMenuItem = [
  {
    label: "Home",
    url: "/",
    icon: "pi pi-home",
    className: "danger",
  },
  {
    label: "Boards",
    url: "/boards",
    icon: "pi pi-th-large",
    useTemplate: true,
  },
];
const TieredMenu = () => {
  const tieredMenuSelectEvent = (event: any, index?: any) => {
    console.log('tieredMenuObj', JSON.stringify(event) + index);
  };

  return (
    <>
      {" "}
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Tiered Menu different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking on a menuItem to view the object)
          </span>
        </p>
        <ShadowTieredMenu
          menuItem={tieredMenuItem}
          onSelect={tieredMenuSelectEvent}
        />
      </div>
    </>
  );
};

export default TieredMenu;
`;
const tieredMenuItem = [
  {
    label: "Home",
    url: "/",
    icon: "pi pi-home",
    className: "danger",
  },
  {
    label: "Boards",
    url: "/boards",
    icon: "pi pi-th-large",
    useTemplate: true,
  },
];
const TieredMenu = () => {
  const tieredMenuSelectEvent = (event: any, index?: any) => {
    console.log('tieredMenuObj', JSON.stringify(event) + index);
  };

  return (
    <>
      {" "}
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Tiered Menu different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking on a menuItem to view the object)
          </span>
        </p>
        <ShadowTieredMenu
          menuItem={tieredMenuItem}
          onSelect={tieredMenuSelectEvent}
        />
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default TieredMenu;
