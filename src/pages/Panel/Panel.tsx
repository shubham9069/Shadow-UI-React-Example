import styles from "./Panel.module.scss";
import {  ShadowPanelItem,ShadowPanel } from "shadow-ui-react";

const panelData: ShadowPanelItem = {
  title: "AI Insight",
  data: {
    type: "TEMPLATE",
    value: "",
  },

  showAction: true,

  menuOption: {
    icon: "pi pi-ellipsis-v",
    width: 32,
    height: 32,
  },

  menuItem: [
    {
      label: "Edit",
      items: [
        {
          label: "Left",
          icon: "pi pi-fw pi-align-left",
        },
      ],
    },

    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      separator: true,
    },

    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
    },
  ],

  left_icon: "pi pi-circle-fill",
  isOpen: true,
  toggleable: true,
  right_icon: ["pi pi-refresh", "pi pi-pencil", "pi pi-fw pi-power-off"],
};

const fixedPanelData: ShadowPanelItem = {
  title: "AI Insight",
  data: {
    type: "TEMPLATE",
    value: "",
  },

  showAction: true,

  menuOption: {
    icon: "pi pi-ellipsis-v",
    width: 32,
    height: 32,
  },

  menuItem: [
    {
      label: "Edit",
      items: [
        {
          label: "Left",
          icon: "pi pi-fw pi-align-left",
        },
      ],
    },

    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      separator: true,
    },

    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
    },
  ],

  left_icon: "pi pi-circle-fill",
  isOpen: true,
  toggleable: false,
  right_icon: ["pi pi-refresh", "pi pi-pencil", "pi pi-fw pi-power-off"],
};

const rightIconClick = (data: any) => {
  console.log('rightIconClick', data);
};

const Panel = () => {
  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Panel different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <div className={styles["shadowPanel-child"]}>
          <h3>Toggle content panel example</h3>
          <ShadowPanel shadowPanel={panelData} rightIconClick={rightIconClick}>
            <p>Content projected from parent component</p>
          </ShadowPanel>
        </div>
        <div className={styles["shadowPanel-child"]}>
          <h3>Fixed state content example</h3>
          <ShadowPanel shadowPanel={fixedPanelData}>
            <p>Content projected from parent component</p>
          </ShadowPanel>
        </div>
      </div>
    </div>
  );
};

export default Panel;
