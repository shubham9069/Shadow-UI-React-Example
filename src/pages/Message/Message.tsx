import { ShadowMessage, ShadowMessageItem } from "shadow-ui-react";
import styles from "./Message.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import { ShadowMessage, ShadowMessageItem } from "shadow-ui-react";
import styles from "./Message.module.scss";

const messages: ShadowMessageItem[] = [
  {
    severity: "error",
    summary: "Error",
    detail: "Message Content for the success error messages",
    buttonSize: "md",
    messageIcon: "pi pi-times-circle",
    buttonGroup: [
      {
        label: "Delete Widget",
        icon: "pi pi-trash",
        buttonActionStyle: "destructive",
        buttonType: "text",
      },
    ],
  },

  {
    severity: "warn",
    summary: "Warning",
    detail: "Message Content for the success error messages",
    buttonSize: "md",
    messageIcon: "pi pi-exclamation-triangle",
    buttonGroup: [
      {
        label: "Delete Widget",
        icon: "pi pi-trash",
        buttonActionStyle: "warning",
        buttonType: "text",
      },

      {
        label: "board",
        icon: "pi pi-pencil",
        buttonActionStyle: "warning",
        buttonType: "primary",
      },
    ],
  },

  {
    severity: "success",
    summary: "Success",
    detail: "Message Content for the success testing",
    buttonSize: "md",
    messageIcon: "pi pi-check",
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
  },

  {
    severity: "info",
    summary: "Info",
    detail: "Message Content for Info Test",
    buttonSize: "md",
    messageIcon: "pi pi-info-circle",
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
  },
];

const message: ShadowMessageItem = {
  severity: "warn",
  summary: "This widget is currently not saved",
  detail: "To save the widget, pin it to any board or create a new one",
  messageIcon: "pi pi-exclamation-triangle",
  closable: false,
  buttonGroup: [
    {
      label: "Delete Widget",
      icon: "pi pi-trash",
      buttonActionStyle: "warning",
      buttonType: "text",
    },

    {
      label: "Pin to the Board",
      icon: "pi pi-plus",
      buttonActionStyle: "warning",
      buttonType: "primary",
    },
  ],
};

const Message = () => {
  const messageSelectEvent = (event: any, index?: any) => {
    console.log(JSON.stringify(event) + index);
  };

  const onMessageCloseEvent = (event: any) => {
    console.log(JSON.stringify(event));
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Message different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          {messages.map((message, index) => (
            <ShadowMessage
              key={index}
              shadowMessage={message}
              onButtonClick={messageSelectEvent}
              onMessageClosed={onMessageCloseEvent}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Message;
`;
const messages: ShadowMessageItem[] = [
  {
    severity: "error",
    summary: "Error",
    detail: "Message Content for the success error messages",
    buttonSize: "md",
    messageIcon: "pi pi-times-circle",
    buttonGroup: [
      {
        label: "Delete Widget",
        icon: "pi pi-trash",
        buttonActionStyle: "destructive",
        buttonType: "text",
      },
    ],
  },

  {
    severity: "warn",
    summary: "Warning",
    detail: "Message Content for the success error messages",
    buttonSize: "md",
    messageIcon: "pi pi-exclamation-triangle",
    buttonGroup: [
      {
        label: "Delete Widget",
        icon: "pi pi-trash",
        buttonActionStyle: "warning",
        buttonType: "text",
      },

      {
        label: "board",
        icon: "pi pi-pencil",
        buttonActionStyle: "warning",
        buttonType: "primary",
      },
    ],
  },

  {
    severity: "success",
    summary: "Success",
    detail: "Message Content for the success testing",
    buttonSize: "md",
    messageIcon: "pi pi-check",
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
  },

  {
    severity: "info",
    summary: "Info",
    detail: "Message Content for Info Test",
    buttonSize: "md",
    messageIcon: "pi pi-info-circle",
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
  },
];

const message: ShadowMessageItem = {
  severity: "warn",
  summary: "This widget is currently not saved",
  detail: "To save the widget, pin it to any board or create a new one",
  messageIcon: "pi pi-exclamation-triangle",
  closable: false,
  buttonGroup: [
    {
      label: "Delete Widget",
      icon: "pi pi-trash",
      buttonActionStyle: "warning",
      buttonType: "text",
    },

    {
      label: "Pin to the Board",
      icon: "pi pi-plus",
      buttonActionStyle: "warning",
      buttonType: "primary",
    },
  ],
};

const Message = () => {
  const messageSelectEvent = (event: any, index?: any) => {
    console.log(JSON.stringify(event) + index);
  };

  const onMessageCloseEvent = (event: any) => {
    console.log(JSON.stringify(event));
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Message different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          {messages.map((message, index) => (
            <ShadowMessage
              key={index}
              shadowMessage={message}
              onButtonClick={messageSelectEvent}
              onMessageClosed={onMessageCloseEvent}
            />
          ))}
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Message;
