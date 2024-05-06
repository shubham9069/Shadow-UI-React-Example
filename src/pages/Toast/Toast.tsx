import { useState } from "react";
import { ShadowToastItem, ShadowButton, ShadowToast }  from "shadow-ui-react";
import styles from "./Toast.module.scss";

const SuccessToast: ShadowToastItem = {
  summary: "Success Toast 1",
  detail: "This is the testing for the content width of the Success message 1 testing the same",
  icon: "pi pi-check-circle",
  buttonSize: "sm",
  sticky: true,
  buttonGroup: [
    {
      label: "Delete Widget",
      icon: "pi pi-trash",
      buttonActionStyle: "success",
      buttonType: "text",
    },
    {
      label: "Board",
      icon: "pi pi-pencil",
      buttonActionStyle: "success",
      buttonType: "primary",
    },
  ],
};

const ErrorToast: ShadowToastItem = {
  summary: "Error Toast 1",
  detail: "This is the testing for the content width of the Error message 1 testing the same",
  icon: "pi pi-times-circle",
  buttonSize: "sm",
  sticky: true,
  buttonGroup: [
    {
      label: "Delete Widget",
      icon: "pi pi-trash",
      buttonActionStyle: "destructive",
      buttonType: "text",
    },
    {
      label: "Board",
      icon: "pi pi-pencil",
      buttonActionStyle: "destructive",
      buttonType: "primary",
    },
  ],
};

const WarningToast: ShadowToastItem = {
  summary: "Warning Toast 1",
  detail: "This is the testing for the content width of the Warning message 1 testing the same",
  icon: "pi pi-exclamation-triangle",
  buttonSize: "sm",
  sticky: true,
  buttonGroup: [
    {
      label: "Delete Widget",
      icon: "pi pi-trash",
      buttonActionStyle: "warning",
      buttonType: "text",
    },
    {
      label: "Board",
      icon: "pi pi-pencil",
      buttonActionStyle: "warning",
      buttonType: "primary",
    },
  ],
};

const InfoToast: ShadowToastItem = {
  summary: "Info Toast 1",
  detail: "This is the testing for the content width of the Info message 1 testing the same",
  icon: "pi pi-info-circle",
  buttonSize: "sm",
  sticky: true,
  buttonGroup: [
    {
      label: "Delete Widget",
      icon: "pi pi-trash",
      buttonActionStyle: "brand",
      buttonType: "text",
    },
    {
      label: "Board",
      icon: "pi pi-pencil",
      buttonActionStyle: "brand",
      buttonType: "primary",
    },
  ],
};

const Toast = () => {
  //   const toolbarClickHandler = (event: any) => {
  //     console.log("onToolbarClick", event);
  //   };

  const [toastVisible, setToastVisible] = useState(true);
  const [errorToastVisible, setErrorToastVisible] = useState(false);
  const [warningToastVisible, setWarningToastVisible] = useState(false);
  const [infoToastVisible, setInfoToastVisible] = useState(false);

  const toggleToast = (e?: any) => {
    setToastVisible(!toastVisible);
    console.log(toastVisible);
  };

  const toggleErrorToast = (e?: any) => {
    setErrorToastVisible(!errorToastVisible);
    console.log(errorToastVisible);
  };

  const toggleWarningToast = (e?: any) => {
    setWarningToastVisible(!warningToastVisible);
    console.log(warningToastVisible);
  };

  const toggleInfoToast = (e?: any) => {
    setInfoToastVisible(!infoToastVisible);
    console.log(infoToastVisible);
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Toast different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <ShadowButton onButtonClick={toggleToast} label="Show Success Toast"></ShadowButton>
        <br />
        <ShadowButton onButtonClick={toggleErrorToast} label="Show Error Toast"></ShadowButton>
        <br />
        <ShadowButton onButtonClick={toggleWarningToast} label="Show Warning Toast"></ShadowButton>
        <br />
        <ShadowButton onButtonClick={toggleInfoToast} label="Show Info Toast"></ShadowButton>

        <div style={{ height: "500px" }}>
          <ShadowToast shadowToastData={SuccessToast} display={toastVisible} severity="success" displayChange={toggleToast} />
          <ShadowToast shadowToastData={ErrorToast} display={errorToastVisible} severity="error" displayChange={toggleErrorToast} />
          <ShadowToast shadowToastData={WarningToast} display={warningToastVisible} severity="warn" displayChange={toggleWarningToast} />
          <ShadowToast shadowToastData={InfoToast} display={infoToastVisible} severity="info" displayChange={toggleInfoToast} />
        </div>
      </div>
    </div>
  );
};

export default Toast;
