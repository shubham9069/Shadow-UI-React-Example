import React from "react";
import { ShadowDropBoxCardOption, ShadowDropbox } from "shadow-ui-react";
import styles from "./Dropbox.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import React from "react";
import { ShadowDropBoxCardOption, ShadowDropbox } from "shadow-ui-react";
import styles from "./Dropbox.module.scss";

const cards: ShadowDropBoxCardOption[] = [
  {
    isDragable: false,
    showAction: true,
    isDisplayDragHandle: true,
    dragboxCardWidth: "50%",
    title: "card 1",
    dropDownPosition: "right",
    menuItems: [{ label: "Test1" }, { label: "Test2" }, { label: "Test3" }],
  },
  {
    isDragable: true,
    showAction: true,
    isDisplayDragHandle: true,
    dragboxCardWidth: "50%",
    title: "card 2",
    dropDownPosition: "right",
    menuItems: [{ label: "Test4" }, { label: "Test5" }, { label: "Test6" }],
  },
  {
    isDragable: true,
    showAction: true,
    dragboxCardWidth: "25%",
    title: "card 3",
    dropDownPosition: "right",
    dropDownOption: {},
  },
  {
    isDragable: true,
    showAction: true,
    dragboxCardWidth: "25%",
    title: "card 4",
    dropDownPosition: "right",
    dropDownOption: {},
  },
  {
    isDragable: true,
    showAction: true,
    dragboxCardWidth: "25%",
    title: "card 5",
    dropDownPosition: "right",
    dropDownOption: {},
  },
  {
    isDragable: true,
    showAction: true,
    dragboxCardWidth: "25%",
    title: "card 6",
    dropDownPosition: "right",
    dropDownOption: {},
  },
  {
    isDragable: true,
    showAction: true,
    dragboxCardWidth: "75%",
    title: "card 7",
    dropDownPosition: "right",
    dropDownOption: {},
  },
];

const Dropbox = () => {
  const handleMenuItemSelect = (e: any) => {
    console.log(e);
  };

  const dragStartHandler = (e: any) => {
    console.log("dragStartHandler", e);
  };

  const dragOverHandler = (e: any) => {
    console.log("dragOverHandler", e);
  };

  const onDropHandler = (e: any) => {
    console.log("onDropHandler", e);
  };

  // console.log("cards", cards);

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Dropbox different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowDropbox
            cards={cards}
            onSelect={handleMenuItemSelect}
            dragHandler={onDropHandler}
            dragOverHandler={dragOverHandler}
            dragStartHandler={dragStartHandler}
            template={(card: any) =>
              card?.title == "card 1" ? (
                <a>shubham</a>
              ) : (
                <a>{card?.title} omega </a>
              )
            }
          ></ShadowDropbox>
        </div>
      </div>
    </>
  );
};

export default Dropbox;
`;
const cards: ShadowDropBoxCardOption[] = [
  {
    isDragable: false,
    showAction: true,
    isDisplayDragHandle: true,
    dragboxCardWidth: "50%",
    title: "card 1",
    dropDownPosition: "right",
    menuItems: [{ label: "Test1" }, { label: "Test2" }, { label: "Test3" }],
  },
  {
    isDragable: true,
    showAction: true,
    isDisplayDragHandle: true,
    dragboxCardWidth: "50%",
    title: "card 2",
    dropDownPosition: "right",
    menuItems: [{ label: "Test4" }, { label: "Test5" }, { label: "Test6" }],
  },
  {
    isDragable: true,
    showAction: true,
    dragboxCardWidth: "25%",
    title: "card 3",
    dropDownPosition: "right",
    dropDownOption: {},
  },
  {
    isDragable: true,
    showAction: true,
    dragboxCardWidth: "25%",
    title: "card 4",
    dropDownPosition: "right",
    dropDownOption: {},
  },
  {
    isDragable: true,
    showAction: true,
    dragboxCardWidth: "25%",
    title: "card 5",
    dropDownPosition: "right",
    dropDownOption: {},
  },
  {
    isDragable: true,
    showAction: true,
    dragboxCardWidth: "25%",
    title: "card 6",
    dropDownPosition: "right",
    dropDownOption: {},
  },
  {
    isDragable: true,
    showAction: true,
    dragboxCardWidth: "75%",
    title: "card 7",
    dropDownPosition: "right",
    dropDownOption: {},
  },
];

const Dropbox = () => {
  const handleMenuItemSelect = (e: any) => {
    console.log(e);
  };

  const dragStartHandler = (e: any) => {
    console.log("dragStartHandler", e);
  };

  const dragOverHandler = (e: any) => {
    console.log("dragOverHandler", e);
  };

  const onDropHandler = (e: any) => {
    console.log("onDropHandler", e);
  };

  // console.log("cards", cards);

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Dropbox different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowDropbox
            cards={cards}
            onSelect={handleMenuItemSelect}
            dragHandler={onDropHandler}
            dragOverHandler={dragOverHandler}
            dragStartHandler={dragStartHandler}
            template={(card: any) =>
              card?.title == "card 1" ? (
                <a>shubham</a>
              ) : (
                <a>{card?.title} omega </a>
              )
            }
          ></ShadowDropbox>
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Dropbox;
