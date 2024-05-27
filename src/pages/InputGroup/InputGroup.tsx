import React, { useState } from "react";
import styles from "./InputGroup.module.scss";
import { ShadowInputGroup } from "shadow-ui-react";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import React, { useState } from "react";
import styles from "./InputGroup.module.scss";
import { ShadowInputGroup } from "shadow-ui-react";

const InputGroup = () => {
  const autoComplete = true;
  const [suggestions, setSuggestions] = useState<any>([
    {
      url: "",
      icon: "pi-comments",
      title: "Jhon",
      subTitle: "jhon@gmail.com",
      data: { chipLabel: "jhon.doe" },
    },
    {
      title: "Doe",
      subTitle: "Doe@gmail.com",
      data: { chipLabel: "test.doe" },
    },
  ]);

  const inputGroup: any = {
    buttonSize: "md",
    buttonGroup: [{ label: "primary", icon: "pi pi-pencil", buttonActionStyle: "brand" }],
  };

  const onButtonClick = (event: any) => {
    console.log(event);
  };

  const onChipRemove = (event: any) => {
    // Define your logic for chip removal here
    console.log("onChipRemove", event);
  };

  const autoCompleteChange = (event: any) => {
    console.log('autoCompleteChange', event);
    if (autoComplete) {
      setSuggestions([
        ...suggestions,
        {
          url: "",
          icon: "",
          title: "Roman",
          subTitle: "roman@gmail.com",
          data: "roman@gmail.com",
        },
      ]);
    }
  };

  const autoCompleteSelect = (event: any) => {
    console.log(event);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            InputGroup different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowInputGroup
            placeholder="Name or email address"
            state="default"
            shadowInputGroup={inputGroup}
            showChip={true}
            hideChipOverflow={true}
            onRemoveChip={onChipRemove}
            onButtonClick={onButtonClick}
            suggestions={suggestions}
            autoComplete={autoComplete}
            autoCompleteChange={autoCompleteChange}
            autoCompleteSelect={autoCompleteSelect}
            chipLabelKey="title"
          />
        </div>
      </div>
    </>
  );
};

export default InputGroup;
`;
const InputGroup = () => {
  const autoComplete = true;
  const [suggestions, setSuggestions] = useState<any>([
    {
      url: "",
      icon: "pi-comments",
      title: "Jhon",
      subTitle: "jhon@gmail.com",
      data: { chipLabel: "jhon.doe" },
    },
    {
      title: "Doe",
      subTitle: "Doe@gmail.com",
      data: { chipLabel: "test.doe" },
    },
  ]);

  const inputGroup: any = {
    buttonSize: "md",
    buttonGroup: [{ label: "primary", icon: "pi pi-pencil", buttonActionStyle: "brand" }],
  };

  const onButtonClick = (event: any) => {
    console.log(event);
  };

  const onChipRemove = (event: any) => {
    // Define your logic for chip removal here
    console.log("onChipRemove", event);
  };

  const autoCompleteChange = (event: any) => {
    console.log('autoCompleteChange', event);
    if (autoComplete) {
      setSuggestions([
        ...suggestions,
        {
          url: "",
          icon: "",
          title: "Roman",
          subTitle: "roman@gmail.com",
          data: "roman@gmail.com",
        },
      ]);
    }
  };

  const autoCompleteSelect = (event: any) => {
    console.log(event);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            InputGroup different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowInputGroup
            placeholder="Name or email address"
            state="default"
            shadowInputGroup={inputGroup}
            showChip={true}
            hideChipOverflow={true}
            onRemoveChip={onChipRemove}
            onButtonClick={onButtonClick}
            suggestions={suggestions}
            autoComplete={autoComplete}
            autoCompleteChange={autoCompleteChange}
            autoCompleteSelect={autoCompleteSelect}
            chipLabelKey="title"
          />
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default InputGroup;
