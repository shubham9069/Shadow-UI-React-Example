import { ShadowDropdownGroupOption, ShadowDropdownOption, ShadowMultiSelect, ShadowMultiselectGroupOption, ShadowMultiselectOption } from "shadow-ui-react";
import styles from "./MultiSelect.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import { ShadowDropdownGroupOption, ShadowDropdownOption, ShadowMultiSelect, ShadowMultiselectGroupOption, ShadowMultiselectOption } from "shadow-ui-react";
import styles from "./MultiSelect.module.scss";

const multiSelectOptions: ShadowMultiselectOption[] = [
  { label: "Retail", value: "1" },
  { label: "Media", value: "2" },
];

const multiSelectGroupOptions: ShadowMultiselectGroupOption[] = [
  {
    items: [
      { label: "Retail", value: "1" },
      { label: "Media", value: "2" },
    ],
    label: "Verticals",
  },
];

const dropdownoptions: ShadowDropdownOption[] = [
  {
    label: "option 1",
    value: 1,
  },
  {
    label: "option 2",
    value: 2,
    icon: "pi pi-pencil",
  },
  {
    label: "option 33",
    value: 3,
    icon: "pi pi-users",
  },
];

const dropdownOptionGroup: ShadowDropdownGroupOption[] = [
  {
    label: "Germany",
    value: "de",
    icon: "pi pi-users",
    items: [
      { label: "Berlin", value: "Berlin" },
      { label: "Frankfurt", value: "Frankfurt" },
      { label: "Hamburg", value: "Hamburg" },
      { label: "Munich", value: "Munich" },
    ],
  },
  {
    label: "USA",
    value: "us",
    icon: "pi pi-users",
    items: [
      { label: "Chicago", value: "Chicago" },
      { label: "Los Angeles", value: "Los Angeles" },
      { label: "New York", value: "New York" },
      { label: "San Francisco", value: "San Francisco" },
    ],
  },
  {
    label: "Japan",
    value: "jp",
    icon: "pi pi-users",
    items: [
      { label: "Kyoto", value: "Kyoto" },
      { label: "Osaka", value: "Osaka" },
      { label: "Tokyo", value: "Tokyo" },
      { label: "Yokohama", value: "Yokohama" },
    ],
  },
];

const MultiSelect = () => {
  const test = (e: any) => {
    console.log("multiSelect Event", e);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            MultiSelect different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <br />
          <ShadowMultiSelect
            group={false}
            options={dropdownoptions}
            label="Default"
            onSelectDropdown={test}
          ></ShadowMultiSelect>
          <ShadowMultiSelect
            group={true}
            options={dropdownOptionGroup}
            label="Group"
            onSelectDropdown={test}
          ></ShadowMultiSelect>
          <ShadowMultiSelect
            group={false}
            disabled={true}
            options={dropdownoptions}
            label="Disabled"
            onSelectDropdown={test}
          ></ShadowMultiSelect>
          <ShadowMultiSelect
            group={false}
            options={dropdownoptions}
            label="Filter"
            onSelectDropdown={test}
          ></ShadowMultiSelect>
        </div>
      </div>
    </>
  );
};

export default MultiSelect;
`;
const multiSelectOptions: ShadowMultiselectOption[] = [
  { label: "Retail", value: "1" },
  { label: "Media", value: "2" },
];

const multiSelectGroupOptions: ShadowMultiselectGroupOption[] = [
  {
    items: [
      { label: "Retail", value: "1" },
      { label: "Media", value: "2" },
    ],
    label: "Verticals",
  },
];

const dropdownoptions: ShadowDropdownOption[] = [
  {
    label: "option 1",
    value: 1,
  },
  {
    label: "option 2",
    value: 2,
    icon: "pi pi-pencil",
  },
  {
    label: "option 33",
    value: 3,
    icon: "pi pi-users",
  },
];

const dropdownOptionGroup: ShadowDropdownGroupOption[] = [
  {
    label: "Germany",
    value: "de",
    icon: "pi pi-users",
    items: [
      { label: "Berlin", value: "Berlin" },
      { label: "Frankfurt", value: "Frankfurt" },
      { label: "Hamburg", value: "Hamburg" },
      { label: "Munich", value: "Munich" },
    ],
  },
  {
    label: "USA",
    value: "us",
    icon: "pi pi-users",
    items: [
      { label: "Chicago", value: "Chicago" },
      { label: "Los Angeles", value: "Los Angeles" },
      { label: "New York", value: "New York" },
      { label: "San Francisco", value: "San Francisco" },
    ],
  },
  {
    label: "Japan",
    value: "jp",
    icon: "pi pi-users",
    items: [
      { label: "Kyoto", value: "Kyoto" },
      { label: "Osaka", value: "Osaka" },
      { label: "Tokyo", value: "Tokyo" },
      { label: "Yokohama", value: "Yokohama" },
    ],
  },
];

const MultiSelect = () => {
  const test = (e: any) => {
    console.log("multiSelect Event", e);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            MultiSelect different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <br />
          <ShadowMultiSelect
            group={false}
            options={dropdownoptions}
            label="Default"
            onSelectDropdown={test}
          ></ShadowMultiSelect>
          <ShadowMultiSelect
            group={true}
            options={dropdownOptionGroup}
            label="Group"
            onSelectDropdown={test}
          ></ShadowMultiSelect>
          <ShadowMultiSelect
            group={false}
            disabled={true}
            options={dropdownoptions}
            label="Disabled"
            onSelectDropdown={test}
          ></ShadowMultiSelect>
          <ShadowMultiSelect
            group={false}
            options={dropdownoptions}
            label="Filter"
            onSelectDropdown={test}
          ></ShadowMultiSelect>
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default MultiSelect;
