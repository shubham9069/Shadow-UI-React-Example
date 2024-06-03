import React, { useMemo, useState } from "react";
import styles from "./CodeEditor.module.scss";
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Outlet, useLocation, } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Console } from "console";
import { ShadowToast, ShadowToastItem } from "shadow-ui-react";
import { isVisible } from "@testing-library/user-event/dist/utils";
interface CodeEditorProps {
  componentToString:string,
  height?:string
}

const CodeEditor = ({ componentToString="" ,height="500px"}: CodeEditorProps) => {
  const [isVisible,setisVisible] = useState(false)
  function copyCode(){
    navigator.clipboard.writeText(componentToString);
    setisVisible(true)
    setTimeout(()=>{setisVisible(false)},2500)
    

  }
  const SuccessToast: ShadowToastItem = {
    summary: "Copy to Clipboard",
    detail:
      "paste this into you compiler and run before run please install peer dependencies",
    icon: "pi pi-check-circle",
    buttonSize: "sm",
    sticky: true,
  };
  return (
    <div className={styles["code-mirror-container"]}>
      <div id={styles["copy-button"]} onClick={copyCode}>
        <span className=" pi pi-clone" />
      </div>
      <ReactCodeMirror
        className={styles["code-mirror"]}
        height={height}
        value={componentToString}
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        editable={false}
      />
      <ShadowToast
        shadowToastData={SuccessToast}
        display={isVisible}
        severity="success"
      />
    </div>
  );
};

export default CodeEditor;
