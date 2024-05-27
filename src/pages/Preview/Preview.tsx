import { cindeChartData, dummyColumnsDef, dummySalesTreeData, dummyTableData } from "../../utils/dummyData";
import { ShadowButton, ShadowChart, ShadowPreview, ShadowPreviewComponent, ShadowTable, ShadowTableMetaData } from "shadow-ui-react";
import styles from "./Preview.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";
const value = `import { cindeChartData, dummyColumnsDef, dummySalesTreeData, dummyTableData } from "../../utils/dummyData";
import { ShadowChart, ShadowPreview, ShadowPreviewComponent, ShadowTable, ShadowTableMetaData } from "shadow-ui-react";
import styles from "./Preview.module.scss";

const chartData: any = cindeChartData;
const tableObj: ShadowTableMetaData = { columnDefs: dummyColumnsDef, tableData: dummyTableData };
const tableMetaData: ShadowTableMetaData = {
  columnDefs: dummyColumnsDef,
  tableData: dummyTableData,
  scrollable: true,
  scrollHeight: "200px",
  pagination: true,
  rowsPerPage: 10,
  rowsPerPageOptions: [10, 20, 50, 100],
};

const previewData: ShadowPreview = {
  message: {
    severity: "warn",
    messageIcon: "pi pi-exclamation-triangle",
    summary: "This widget is currently not saved",
    detail: "To save the widget, pin it to any board or create a new one",
    buttonGroup: [
      {
        loading: false,
        label: "Delete Widget",
        disabled: false,
        iconPosition: "left",
        icon: "pi pi-trash",
        buttonType: "text",
        size: "md",
        buttonActionStyle: "warning",
      },

      {
        loading: false,
        label: "Pin to the Board",
        disabled: false,
        iconPosition: "left",
        icon: "shadow-icon shadow-pin",
        buttonType: "primary",
        size: "md",
        buttonActionStyle: "warning",
      },
    ],
    closable: false,
  },

  showMessage: true,
  content: [
   
    {
      title: "Visualization",
      data: {
        type: "CHART",
        value: cindeChartData,
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

      isOpen: true,
      showSwitch: true,
      switchOption: {
        title: "Show on Board",
        checked: true,
        disabled: false,
      },
    },

    {
      title: "AI Insight",
      data: {
        type: "INSIGHTS",
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

      showRefresh: true,
      left_icon: "pi pi-circle-fill",
      isOpen: true,
      showSwitch: true,
      switchOption: {
        title: "Show on Board",
        checked: false,
        disabled: false,
      },
    },
    {
      title: "Underlying Data",
      data: {
        type: "TABLE",
        //value: this.tableMetaData
      },
      isOpen: true,
    },
  ],
};

const chipData: any = [
  {
    key: "chipkey",
    label: "chiplabel",
    removable: false,
    type: "withIcon",
    icon: "pi pi-refresh",
  },

  {
    key: "chipkey",
    label: "chiplabel",
    removable: false,
    type: "withIcon",
    icon: "pi pi-refresh",
    theme: "neutral",
  },
];

const CardPanelContent = (cardPanel: any) => {
  if (cardPanel?.data?.type === "TABLE") {
    return <>
  
      <p>Table</p>
      <ShadowTable
      showGridLines={true}
      showStripedRows={false}
      hideBorder={false}
      columnDefs={tableMetaData?.columnDefs}
      scrollable={true}
      scrollHeight="650px"
      tableData={tableMetaData?.tableData}
      showTableCaption={false}
      tableCaption="Catalog Table"
      showGlobalFilter={false}
      pagination={true}
      rowsPerPage={10}
      showFirstLastIcon={true}
      rowsPerPageOptions={[10, 15, 25, 50, 100]}
      template={ <div className="action-header">
       <span title="Open Report In Background">
         <span id="btnOpenReport" className="link-button">
           <i className="pi pi-eye"></i>
         </span>
       </span>
       <span>
         <span id="btnCloneReport" className="link-button">
           <i className="pi pi-clone"></i>
         </span>
       </span>
       <span>
         <span id="btnDeleteReport" className="link-button">
           <i className="pi pi-trash"></i>
         </span>
       </span>
       <span title="Download">
         <span id="btnDownloadReport" className="link-button disabled">
           <i className="pi pi-download"></i>
         </span>
       </span>
       <span title="Menu">
         {/* <span style="display: inline-block" @click.stop="selectAllHandler($event)">
           <ShadowTieredMenu :menuItem="tieredMenuOptions" @onSelect="selectAllHandler" />
         </span> */}
</span></div>
     }      
       />
    </>;
  } else if (cardPanel?.data?.type === "INSIGHTS") {
    return (
      <div>
        <span className="shadow-insights-white"></span>
        <p>Content projected from parent component</p>
        <button>Button projected from parent component</button>
      </div>
    );
  } else if (cardPanel?.data?.type === "CHART") {
    return (
      <>
      <p>ShadowChart</p>
      <ShadowChart shadowChartMetaData={cardPanel?.data?.value} />
      </>
    );
  } else if (cardPanel?.data?.type === "SALES_TREE_SUMMARY") {
    return (
      <p>Shadow Sales Tree</p>
      // <ShadowSalesTree value={cardPanel?.data?.value} />
    );
  } else if (cardPanel?.data?.type === "INSIGHTS") {
    return <>{cardPanel?.data?.value}</>;
  } else {
    return null;
  }
};

const Preview = () => {
  const onMenuClick = (e: any) => {
    console.log(e);
  };

  const onToggleSwitch = (e: any) => {
    console.log(e);
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Preview</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <ShadowPreviewComponent
          shadowPreview={previewData}
          shadowChipList={chipData}
          menuItemClick={onMenuClick}
          messageButtonClick={onMenuClick}
          onToggleSwitch={onToggleSwitch}
          template={CardPanelContent}
        ></ShadowPreviewComponent>
      </div>
    </div>
  );
};

export default Preview;
`;
const chartData: any = cindeChartData;
const tableObj: ShadowTableMetaData = { columnDefs: dummyColumnsDef, tableData: dummyTableData };

const tableMetaData: ShadowTableMetaData = {
  columnDefs: dummyColumnsDef,
  tableData: dummyTableData,
  scrollable: true,
  scrollHeight: "200px",
  pagination: true,
  rowsPerPage: 10,
  rowsPerPageOptions: [10, 20, 50, 100],
};

const previewData: ShadowPreview = {
  message: {
    severity: "warn",
    messageIcon: "pi pi-exclamation-triangle",
    summary: "This widget is currently not saved",
    detail: "To save the widget, pin it to any board or create a new one",
    buttonGroup: [
      {
        loading: false,
        label: "Delete Widget",
        disabled: false,
        iconPosition: "left",
        icon: "pi pi-trash",
        buttonType: "text",
        size: "md",
        buttonActionStyle: "warning",
      },

      {
        loading: false,
        label: "Pin to the Board",
        disabled: false,
        iconPosition: "left",
        icon: "shadow-icon shadow-pin",
        buttonType: "primary",
        size: "md",
        buttonActionStyle: "warning",
      },
    ],
    closable: false,
  },

  showMessage: true,
  content: [
   
    {
      title: "Visualization",
      data: {
        type: "CHART",
        value: cindeChartData,
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

      isOpen: true,
      showSwitch: true,
      switchOption: {
        title: "Show on Board",
        checked: true,
        disabled: false,
      },
    },

    {
      title: "AI Insight",
      data: {
        type: "INSIGHTS",
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

      showRefresh: true,
      left_icon: "pi pi-circle-fill",
      isOpen: true,
      showSwitch: true,
      switchOption: {
        title: "Show on Board",
        checked: false,
        disabled: false,
      },
    },
    {
      title: "Underlying Data",
      data: {
        type: "TABLE",
        //value: this.tableMetaData
      },
      isOpen: true,
    },
  ],
};

const chipData: any = [
  {
    key: "chipkey",
    label: "chiplabel",
    removable: false,
    type: "withIcon",
    icon: "pi pi-refresh",
  },

  {
    key: "chipkey",
    label: "chiplabel",
    removable: false,
    type: "withIcon",
    icon: "pi pi-refresh",
    theme: "neutral",
  },
];

const CardPanelContent = (cardPanel: any) => {
  if (cardPanel?.data?.type === "TABLE") {
    return <>
  
      <p>Table</p>
      <ShadowTable
      showGridLines={true}
      showStripedRows={false}
      hideBorder={false}
      columnDefs={tableMetaData?.columnDefs}
      scrollable={true}
      scrollHeight="650px"
      tableData={tableMetaData?.tableData}
      showTableCaption={false}
      tableCaption="Catalog Table"
      showGlobalFilter={false}
      pagination={true}
      rowsPerPage={10}
      showFirstLastIcon={true}
      rowsPerPageOptions={[10, 15, 25, 50, 100]}
      template={ <div className="action-header">
       <span title="Open Report In Background">
         <span id="btnOpenReport" className="link-button">
           <i className="pi pi-eye"></i>
         </span>
       </span>
       <span>
         <span id="btnCloneReport" className="link-button">
           <i className="pi pi-clone"></i>
         </span>
       </span>
       <span>
         <span id="btnDeleteReport" className="link-button">
           <i className="pi pi-trash"></i>
         </span>
       </span>
       <span title="Download">
         <span id="btnDownloadReport" className="link-button disabled">
           <i className="pi pi-download"></i>
         </span>
       </span>
       <span title="Menu">
         {/* <span style="display: inline-block" @click.stop="selectAllHandler($event)">
           <ShadowTieredMenu :menuItem="tieredMenuOptions" @onSelect="selectAllHandler" />
         </span> */}
</span></div>
     }      
       />
    </>;
  } else if (cardPanel?.data?.type === "INSIGHTS") {
    return (
      <div>
        <span className="shadow-insights-white"></span>
        <p>Content projected from parent component</p>
        <button>Button projected from parent component</button>
      </div>
    );
  } else if (cardPanel?.data?.type === "CHART") {
    return (
      <>
      <p>ShadowChart</p>
      <ShadowChart shadowChartMetaData={cardPanel?.data?.value} />
      </>
    );
  } else if (cardPanel?.data?.type === "SALES_TREE_SUMMARY") {
    return (
      <p>Shadow Sales Tree</p>
      // <ShadowSalesTree value={cardPanel?.data?.value} />
    );
  } else if (cardPanel?.data?.type === "INSIGHTS") {
    return <>{cardPanel?.data?.value}</>;
  } else {
    return null;
  }
};

const Preview = () => {
  const onMenuClick = (e: any) => {
    console.log(e);
  };

  const onToggleSwitch = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>Preview</span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowPreviewComponent
            shadowPreview={previewData}
            shadowChipList={chipData}
            menuItemClick={onMenuClick}
            messageButtonClick={onMenuClick}
            onToggleSwitch={onToggleSwitch}
            template={CardPanelContent}
          ></ShadowPreviewComponent>
        </div>
      </div>
      <div style={{padding:'0 2rem '}}>
        <h4>Dummy Data Download File </h4>
        <ShadowButton
          icon="pi pi-download"
          loading={false}
          label="Download "
          buttonType="primary"
          size="sm"
          buttonActionStyle="brand"
          onButtonClick={()=> window.open(
      "https://drive.google.com/uc?export=download&id=1wPXNzwhn1J-43zcjI52oIr6AdGSIsVTd",
      "_blank"
    )}
        />
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Preview;
