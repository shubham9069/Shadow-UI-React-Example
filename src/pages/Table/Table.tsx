import {ShadowCard, ShadowTable, ShadowTableSelectionMode, ShadowTieredMenuOption } from "shadow-ui-react";
import { dummyColumnsDef, dummyTableData, tieredMenuData } from "../../utils/dummyData";
import "./Table.scss";

const tieredMenuOptions: ShadowTieredMenuOption[] = tieredMenuData;
const columnDefs: any[] = dummyColumnsDef;
const tableData: any[] = dummyTableData;
const dummyColumnDef_2 = [
  {
    key: "name",
    columnName: "Name",
    dataNodeName: "reportName",
    useTemplate: false,
    isEditable: true,
    type: "SELECT",
    selectOption: [
      { label: "Anirudh", value: "Anirudh" },
      { label: "Banerjee", value: "Banerjee" },
    ],
    width: "40%",
  },
  {
    key: "creator",
    columnName: "Creator",
    dataNodeName: "createdUserEmail",
    isEditable: true,
  },
  {
    key: "lastUpdated",
    columnName: "Last Updated",
    dataNodeName: "lastActivityDate",
    // format: { type: FormatType.DATE, outputFormat: 'MMMM/dd/yyyy'}
  },
  {
    key: "action",
    columnName: "Actions",
    useTemplate: true,
    width: "15%",
    align: "center",
  },
];
const selectionMode: ShadowTableSelectionMode = "multiple";

const Table = () => {
  const onChangeEditInput = (event: any) => {
    console.log(event);
  };

  const onRowClick = (event: any) => {
    console.log(event);
  };

  const onRowUnClick = (event: any) => {
    console.log(event);
  };

  const selectAllHandler = (event: any) => {
    console.log(event);
  };

  return (
    <div className={"container"}>
      <p className={"section-header-container"}>
        <span className={"section-header"}>Table different types</span>{" "}
        <span className={"section-desc"}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={"section-main"}>
        <div className={"catalog-container"}>
          <div className={"table-container"}>
            <ShadowCard>
              <ShadowTable
         showGridLines={true}
         showStripedRows={false}
         hideBorder={false}
         columnDefs={columnDefs}
         scrollable={true}
         scrollHeight="650px"
         tableData={tableData}
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
              <ShadowTable
         showGridLines={true}
         showStripedRows={false}
         hideBorder={false}
         columnDefs={columnDefs}
         scrollable={true}
         scrollHeight="650px"
         tableData={tableData}
         showTableCaption={true}
         tableCaption="Table with checkbox selection "
         selectionType="checkbox"
         showGlobalFilter={false}
         pagination={true}
         rowsPerPage={10}
         showFirstLastIcon={true}
         rowsPerPageOptions={[10, 15, 25, 50, 100]}
         onRowClick={onRowClick}
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
              <ShadowTable
         showGridLines={true}
         showStripedRows={false}
         hideBorder={false}
         columnDefs={columnDefs}
         scrollable={true}
         scrollHeight="650px"
         tableData={tableData}
         showTableCaption={true}
         tableCaption="Table with radio selection "
         selectionType="radiobutton"
         selectionMode='single'
         showGlobalFilter={false}
         pagination={true}
         rowsPerPage={10}
         showFirstLastIcon={true}
         rowsPerPageOptions={[10, 15, 25, 50, 100]}
         onRowClick={onRowClick}
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
              <ShadowTable
         showGridLines={true}
         showStripedRows={false}
         hideBorder={false}
         columnDefs={columnDefs}
         scrollable={true}
         scrollHeight="650px"
         tableData={tableData}
         showTableCaption={true}
         tableCaption="Table with row select  selection "
        
         showGlobalFilter={false}
         pagination={true}
         rowsPerPage={10}
         showFirstLastIcon={true}
         rowsPerPageOptions={[10, 15, 25, 50, 100]}
         onRowClick={onRowClick}
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
              <ShadowTable
         showGridLines={true}
         showStripedRows={false}
         hideBorder={false}
         columnDefs={columnDefs}
         scrollable={true}
         scrollHeight="650px"
         tableData={tableData}
         showTableCaption={true}
         tableCaption="Table with editable cell "
         editMode="cell"
         showGlobalFilter={false}
         pagination={true}
         rowsPerPage={10}
         showFirstLastIcon={true}
         rowsPerPageOptions={[10, 15, 25, 50, 100]}
         onRowClick={onRowClick}
         onCellEditCompleteHandler={(e:any)=>console.log(e)}
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
              <ShadowTable
         showGridLines={true}
         showStripedRows={false}
         hideBorder={false}
         columnDefs={columnDefs}
         scrollable={true}
         scrollHeight="650px"
         tableData={tableData}
         showTableCaption={true}
         sortMode="single"
         tableCaption="Table with sort  "
         editMode="cell"
         showGlobalFilter={false}
         pagination={true}
         rowsPerPage={10}
         showFirstLastIcon={true}
         rowsPerPageOptions={[10, 15, 25, 50, 100]}
         onRowClick={onRowClick}
         onCellEditCompleteHandler={(e:any)=>console.log(e)}
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
            </ShadowCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
