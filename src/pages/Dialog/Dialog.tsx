import React, { useState } from "react";
import { ShadowDialog } from "shadow-ui-react";
import styles from "./Dialog.module.scss";
// import { ShadowDialogEvent } from "../../models/dialog";

const Dialog = () => {
  const [displayDialog, setDisplayDialog] = useState(true);

  const tieredMenuSelectEvent = (event: any, index?: number) => {
    setDisplayDialog(false);
    alert(JSON.stringify(event) + index);
  };

  return (
    <>
      <ShadowDialog
        display={displayDialog}
        modal={true}
        closable={true}
        closeOnBlur={true}
        footer={{ type: "confirm" }}
        title={"Test Confirm"}
        width={"400px"}
        position="top"
        handleCancel={tieredMenuSelectEvent}
        handleOk={tieredMenuSelectEvent}
        displayChange={() => setDisplayDialog(false)}
      >
        <p>
        Hello world
        </p>
      </ShadowDialog>
    </>
  );
};

export default Dialog;
