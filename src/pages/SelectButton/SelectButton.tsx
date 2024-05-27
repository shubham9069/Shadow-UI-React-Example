import CodeEditor from "../../layout/CodeEditor/CodeEditor";
import styles from "./SelectButton.module.scss";
import { ShadowSelectButtonOption,ShadowSelectButton } from "shadow-ui-react";

const value = `import styles from "./SelectButton.module.scss";
import { ShadowSelectButtonOption,ShadowSelectButton } from "shadow-ui-react";

const SelectButton = () => {
  const buttonData: ShadowSelectButtonOption[] = [
    { icon: "pi pi-users", label: "button1", value: 1 },
    { icon: "pi pi-users", label: "", value: 2 },
    { icon: "pi pi-users", label: "button3", value: 3 },
    { icon: "pi pi-users", label: "button4", value: 4 },
  ];

  const onButtonClick = (e: ShadowSelectButtonOption) => {
    console.log("value", e.value);
  };

  return (
    <>
      {" "}
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            SelectButton different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <h3>Default small</h3>
          <ShadowSelectButton
            size={"sm"}
            shadowSelectButtonOptions={buttonData}
            onClick={onButtonClick}
          />
          <ShadowSelectButton
            size={"sm"}
            shadowSelectButtonOptions={buttonData}
            iconsOnly={true}
            onClick={onButtonClick}
          />

          <br></br>

          <h3>Multiple medium</h3>
          <ShadowSelectButton
            size="md"
            multiple={true}
            shadowSelectButtonOptions={buttonData}
            onClick={onButtonClick}
          />
          <ShadowSelectButton
            size="md"
            multiple={true}
            shadowSelectButtonOptions={buttonData}
            iconsOnly={true}
            onClick={onButtonClick}
          />

          <br></br>

          <h3>Default large</h3>
          <ShadowSelectButton
            size="lg"
            shadowSelectButtonOptions={buttonData}
            onClick={onButtonClick}
          />
          <ShadowSelectButton
            size="lg"
            shadowSelectButtonOptions={buttonData}
            iconsOnly={true}
            onClick={onButtonClick}
          />

          <br></br>

          <h3>Disabled</h3>
          <ShadowSelectButton
            disabled={true}
            shadowSelectButtonOptions={buttonData}
            onClick={onButtonClick}
          />
          <ShadowSelectButton
            disabled={true}
            shadowSelectButtonOptions={buttonData}
            iconsOnly={true}
            onClick={onButtonClick}
          />
        </div>
      </div>
    </>
  );
};

export default SelectButton;
`;
const SelectButton = () => {
  const buttonData: ShadowSelectButtonOption[] = [
    { icon: "pi pi-users", label: "button1", value: 1 },
    { icon: "pi pi-users", label: "", value: 2 },
    { icon: "pi pi-users", label: "button3", value: 3 },
    { icon: "pi pi-users", label: "button4", value: 4 },
  ];

  const onButtonClick = (e: ShadowSelectButtonOption) => {
    console.log("value", e.value);
  };

  return (
    <>
      {" "}
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            SelectButton different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <h3>Default small</h3>
          <ShadowSelectButton
            size={"sm"}
            shadowSelectButtonOptions={buttonData}
            onClick={onButtonClick}
          />
          <ShadowSelectButton
            size={"sm"}
            shadowSelectButtonOptions={buttonData}
            iconsOnly={true}
            onClick={onButtonClick}
          />

          <br></br>

          <h3>Multiple medium</h3>
          <ShadowSelectButton
            size="md"
            multiple={true}
            shadowSelectButtonOptions={buttonData}
            onClick={onButtonClick}
          />
          <ShadowSelectButton
            size="md"
            multiple={true}
            shadowSelectButtonOptions={buttonData}
            iconsOnly={true}
            onClick={onButtonClick}
          />

          <br></br>

          <h3>Default large</h3>
          <ShadowSelectButton
            size="lg"
            shadowSelectButtonOptions={buttonData}
            onClick={onButtonClick}
          />
          <ShadowSelectButton
            size="lg"
            shadowSelectButtonOptions={buttonData}
            iconsOnly={true}
            onClick={onButtonClick}
          />

          <br></br>

          <h3>Disabled</h3>
          <ShadowSelectButton
            disabled={true}
            shadowSelectButtonOptions={buttonData}
            onClick={onButtonClick}
          />
          <ShadowSelectButton
            disabled={true}
            shadowSelectButtonOptions={buttonData}
            iconsOnly={true}
            onClick={onButtonClick}
          />
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default SelectButton;
