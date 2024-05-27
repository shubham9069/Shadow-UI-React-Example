import { ShadowBadge } from "shadow-ui-react";
import styles from "./Badge.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import { ShadowBadge } from "shadow-ui-react";
import styles from "./Badge.module.scss";

const badgeData: any[] = [
  {
    value: "1",
    icon: "pi pi-bell",
  },
  {
    value: "2",
    type: "warning",
    size: "xlarge",
    icon: "pi pi-bell",
    iconFontSize: "2rem",
  },
  {
    value: "3",
    size: "xlarge",
    type: "success",
    icon: "pi pi-calendar",
    iconFontSize: "2rem",
  },
  {
    value: "4",
    size: "large",
    type: "danger",
    icon: "pi pi-envelope",
    iconFontSize: "1.25rem",
  },
  {
    value: "5",
    type: "danger",
    size: "small",
  },
];

const Badge = () => {
  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Badge different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          {badgeData.map((badge, index) => (
            <div key={index}>
              <ShadowBadge badge={badge} />
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Badge;
`;
const badgeData: any[] = [
  {
    value: "1",
    icon: "pi pi-bell",
  },
  {
    value: "2",
    type: "warning",
    size: "xlarge",
    icon: "pi pi-bell",
    iconFontSize: "2rem",
  },
  {
    value: "3",
    size: "xlarge",
    type: "success",
    icon: "pi pi-calendar",
    iconFontSize: "2rem",
  },
  {
    value: "4",
    size: "large",
    type: "danger",
    icon: "pi pi-envelope",
    iconFontSize: "1.25rem",
  },
  {
    value: "5",
    type: "danger",
    size: "small",
  },
];

const Badge = () => {
  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Badge different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          {badgeData.map((badge, index) => (
            <div key={index}>
              <ShadowBadge badge={badge} />
              <br />
            </div>
          ))}
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Badge;
