import { ShadowDropdown,  ShadowDropdownGroupOption, ShadowDropdownOption } from "shadow-ui-react";
import styles from "./Dropdown.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import { ShadowDropdown,  ShadowDropdownGroupOption, ShadowDropdownOption } from "shadow-ui-react";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
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

  const onItemClick = (e: any) => {
    console.log("onDropdownItemClick", e);
  };

  return (
    <>
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Tabs</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking to view the object)</span>
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        <ShadowDropdown group={false} showClear={true} options={dropdownoptions} label="Default" onSelectDropdown={onItemClick} />
        <ShadowDropdown group={true} options={dropdownOptionGroup} label="Group" onSelectDropdown={onItemClick} />
        <ShadowDropdown group={false} disabled={true} options={dropdownoptions} label="Disabled" onSelectDropdown={onItemClick} />
        <ShadowDropdown group={false} filter={true} options={dropdownoptions} label="Filter" onSelectDropdown={onItemClick} />
        <ShadowDropdown
          group={false}
          showClear={true}
          options={dropdownoptions}
          selectedOption={dropdownoptions[0]}
          label="Selected"
          onSelectDropdown={onItemClick}
        />
      </div>
    </div>
    
    </>
  );
};

export default Dropdown;
`;
const Dropdown = () => {
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

  const onItemClick = (e: any) => {
    console.log("onDropdownItemClick", e);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>Tabs</span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking to view the object)
          </span>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          <ShadowDropdown
            group={false}
            showClear={true}
            options={dropdownoptions}
            label="Default"
            onSelectDropdown={onItemClick}
          />
          <ShadowDropdown
            group={true}
            options={dropdownOptionGroup}
            label="Group"
            onSelectDropdown={onItemClick}
          />
          <ShadowDropdown
            group={false}
            disabled={true}
            options={dropdownoptions}
            label="Disabled"
            onSelectDropdown={onItemClick}
          />
          <ShadowDropdown
            group={false}
            filter={true}
            options={dropdownoptions}
            label="Filter"
            onSelectDropdown={onItemClick}
          />
          <ShadowDropdown
            group={false}
            showClear={true}
            options={dropdownoptions}
            selectedOption={dropdownoptions[0]}
            label="Selected"
            onSelectDropdown={onItemClick}
          />
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Dropdown;
