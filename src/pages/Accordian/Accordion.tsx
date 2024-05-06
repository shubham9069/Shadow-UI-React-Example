import { ShadowAccordion, ShadowButton } from "shadow-ui-react";
import styles from "./Accordion.module.scss";

const Accordion = () => {
  //   const toolbarClickHandler = (event: any) => {
  //     console.log("onToolbarClick", event);
  //   };

  const onClose = () => {
    console.log("onClose called!");
  };

  const onOpen = () => {
    console.log("onOpen called!");
  };

  const onRightSideIconClick = () => {
    console.log("onRightSideIconClick called!");
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Accordion different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <ShadowAccordion
          onRightSideIconClick={onRightSideIconClick}
          headerSubtitle="this is sub title"
          onOpen={onOpen}
          onClose={onClose}
          toggleIconPosition="start"
          headerStartIcon="pi pi-chart-line"
          headerEndIcon="pi-share-alt"
          headerTitle="This is header title"
        >
          <h1>Hello</h1>
          <ShadowButton icon="pi pi-users" label="large" buttonType="primary" size="lg" buttonActionStyle="brand" />
        </ShadowAccordion>

        <ShadowAccordion
          onRightSideIconClick={onRightSideIconClick}
          headerSubtitle="this is sub title"
          onOpen={onOpen}
          onClose={onClose}
          toggleIconPosition="end"
          headerStartIcon="pi pi-chart-line"
          headerEndIcon="pi-share-alt"
          headerTitle="This is header title"
        >
          <h1>Hello</h1>
          <ShadowButton icon="pi pi-users" label="large" buttonType="primary" size="lg" buttonActionStyle="destructive" />
          <br />
          <ShadowAccordion
            onOpen={onOpen}
            onClose={onClose}
            toggleIconPosition="end"
            headerStartIcon="pi pi-chart-line"
            headerEndIcon="pi-share-alt"
            headerTitle="Header 2 Header 2 Header 2 Header 2 Header 2 Header 2 Header 2 Header 2 Header 2 Header 2 Header 2 Header 2 Header 2 Header 2 Header 2"
          >
            <h1>Hello</h1>
            <ShadowButton icon="pi pi-users" label="large" buttonType="primary" size="lg" buttonActionStyle="destructive" />
          </ShadowAccordion>
        </ShadowAccordion>
      </div>
    </div>
  );
};

export default Accordion;
