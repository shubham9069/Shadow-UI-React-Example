import React, { useState } from "react";
import { ShadowButton, ShadowDialog } from "shadow-ui-react";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";
import  style  from "./Dialog.module.scss";

const value = `import React, { useState } from "react";
import { ShadowDialog } from "shadow-ui-react";


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
`;
const Dialog = () => {
  const [displayDialog, setDisplayDialog] = useState(true);

  const tieredMenuSelectEvent = (event: any, index?: number) => {
    setDisplayDialog(false);
    alert(JSON.stringify(event) + index);
  };
  function handleButton(){
setDisplayDialog(true)
  }

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
        <p>Hello world</p>
      </ShadowDialog>
      <div className={style["show-dialogBox"]}>
        <ShadowButton
          icon="pi pi-users"
          label="Show Dialog "
          buttonType="primary"
          size="sm"
          buttonActionStyle="brand"
          onClick={handleButton}
        />
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Dialog;
