import { useState } from "react";
import styles from "./Steps.module.scss";
import { ShadowStep, ShadowStepper }  from "shadow-ui-react";

const dummyStepsData: ShadowStep[] = [
  {
    label: "1",
    title: "Personal Details",
    desc: "Enter your personal details",
  },
  {
    icon: "pi pi-map-marker",
    label: "2",
    title: "Address Details",
    desc: "Enter your address details",
  },
  {
    icon: "pi pi-credit-card",
    title: "Payment Details",
    desc: "Enter your payment details",
  },
  {
    icon: "pi pi-check",
    title: "Confirmation",
    desc: "Confirm your details",
  },
];

const Steps = () => {
  const [steps, setSteps] = useState<ShadowStep[]>(dummyStepsData);
  const [spinner, setSpinner] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [readonly, setReadonly] = useState(false);
  const [size, setSize] = useState("md");

  const receiveActiveIndex = (event: number) => {
    console.log("Steps: activeIndexChange: ", event);
    setActiveIndex(event);
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Steps different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <>
          <h3>Stepper with spinning icon</h3>
          <br />
          <div className={styles["content"]} role="main">
            <ShadowStepper steps={steps} spinner={true} activeIndex={activeIndex} readonly={readonly} size="lg" activeIndexChange={receiveActiveIndex} />
          </div>
        </>

        <br />
        <>
          <h3>Small Size (sm) stepper</h3>
          <br />
          <div className={styles["content"]} role="main">
            <ShadowStepper
              steps={steps}
              spinner={spinner}
              activeIndex={activeIndex}
              readonly={readonly}
              size="sm"
              activeIndexChange={receiveActiveIndex}
            />
          </div>
        </>

        <br />
        <>
          <h3>Medium Size (md) stepper</h3>
          <br />
          <div className={styles["content"]} role="main">
            <ShadowStepper
              steps={steps}
              spinner={spinner}
              activeIndex={activeIndex}
              readonly={readonly}
              size={size}
              activeIndexChange={receiveActiveIndex}
            />
          </div>
        </>

        <br />
        <>
          <h3>Large Size (lg) stepper</h3>
          <br />
          <div className={styles["content"]} role="main">
            <ShadowStepper
              steps={steps}
              spinner={spinner}
              activeIndex={activeIndex}
              readonly={readonly}
              size="lg"
              activeIndexChange={receiveActiveIndex}
            />
          </div>
        </>

        <br />
        <>
          <h3>Large Size (lg) stepper with spinning icon</h3>
          <br />
          <div className={styles["content"]} role="main">
            <ShadowStepper steps={steps} spinner={true} activeIndex={activeIndex} readonly={readonly} size="lg" activeIndexChange={receiveActiveIndex} />
          </div>
        </>

        <br />
      </div>
    </div>
  );
};

export default Steps;
