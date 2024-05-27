import styles from "./Toolkit.module.scss";
import {ShadowToolkit}  from "shadow-ui-react";
import { useState } from "react";
// import aiMenuFilled from "../../assets/icons/ai-menu-filled.svg"

const toolbarData = [
  { text: "Add", type: "button", icon: "pi pi-plus", action: "Category" },
  { text: "Category (ending May 7)", action: "Category" },
  { icon: "pi pi-cog", action: "Setting" },
  { icon: "pi pi-filter", action: "Filter" },
];

const Toolkit = () => {
  const [previousToolKit, setPreviousToolKit]: any = useState();
  const [showChatUi, setShowChatUi]: any = useState(false);
  const toolkitItems: any[] = [
    {
      section: "Section 1",
      items: [
        {
          label: "Ai",
          routerLink: "",
          icon: "../../assets/icons/ai-menu-filled.svg",
          selectedIcon: "../../assets/icons/ai-menu-white.svg",
          padding: 8,
        },
        {
          label: "Recent",
          routerLink: "",
          icon: "../assets/icons/recent-filled.svg",
          selectedIcon: "../assets/icons/recent.svg",
          padding: 10,
        },
      ],
    },
    {
      section: "Section 2",
      items: [
        {
          label: "Add",
          routerLink: "",
          icon: "../assets/icons/plus.svg",
          selectedIcon: "../assets/icons/plus-white.svg",
          padding: 10,
        },
        {
          label: "Notification",
          routerLink: "",
          icon: "../assets/icons/notification.svg",
          selectedIcon: "../assets/icons/notification-white.svg",
          padding: 10,
        },
        {
          label: "Setting",
          routerLink: "",
          icon: "../assets/icons/setting.svg",
          selectedIcon: "../assets/icons/setting-white.svg",
          padding: 10,
        },
      ],
    },
    {
      section: "Section 3",
      items: [
        {
          label: "Chat",
          routerLink: "",
          icon: "../assets/icons/chat.svg",
          selectedIcon: "../assets/icons/chat-white.svg",
          padding: 10,
        },
      ],
    },
  ];

  const toolkitStyle: any = {
    iconWidth: 40,
    iconHeight: 40,
  };

  const toggleChatUI = () => {
    setShowChatUi(!showChatUi);
  };

  const selectToolkitHandler = (event: any) => {
    if (previousToolKit == "Ai" || event == "Ai") {
      toggleChatUI();
    }
    setPreviousToolKit(event);
  };

  return (
    <div className={styles["toolbar-container"]}>
      <ShadowToolkit
        toolkitItems={toolkitItems}
        selectedToolKit=""
        toolkitStyle={toolkitStyle}
        selectToolkitHandler={selectToolkitHandler}
        toggleChatUI={toggleChatUI}
      ></ShadowToolkit>
    </div>
  );
};

export default Toolkit;
