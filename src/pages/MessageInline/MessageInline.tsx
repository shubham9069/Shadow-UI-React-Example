import CodeEditor from "../../layout/CodeEditor/CodeEditor";
import styles from "./MessageInline.module.scss";
import { ShadowDropdown, ShadowMessageInline } from "shadow-ui-react";

const value = `import styles from "./MessageInline.module.scss";
import { ShadowDropdown, ShadowMessageInline } from "shadow-ui-react";

const MessageInline = () => {
  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            MessageInline different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowDropdown
            group={false}
            showClear={true}
            options={[]}
            label="Default"
          />
          <ShadowMessageInline state="warning" message="Warning message" />
          <ShadowMessageInline state="error" message="Error Message" />
          <ShadowMessageInline state="success" message="Success Message" />
        </div>
      </div>
    </>
  );
};

export default MessageInline;
`;
const MessageInline = () => {
  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            MessageInline different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowDropdown
            group={false}
            showClear={true}
            options={[]}
            label="Default"
          />
          <ShadowMessageInline state="warning" message="Warning message" />
          <ShadowMessageInline state="error" message="Error Message" />
          <ShadowMessageInline state="success" message="Success Message" />
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default MessageInline;
