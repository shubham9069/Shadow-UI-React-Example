import { useState } from "react";
import styles from "./InputText.module.scss";
import { ShadowInputText } from "shadow-ui-react";

const InputText = () => {
  const disabled: boolean = false;
  const [error, setError] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("This field is required");
  const [inputIcon, setInputIcon] = useState<string>("pi pi-search");

  const onChange = (event: any) => {
    console.log("onInputTextChange Event", event);
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>InputText different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <div>
          <h3> Small Size </h3>
          <ShadowInputText type="text" inputValue="" placeholder="Eg: John Doe" size="sm" onChange={onChange}></ShadowInputText>
        </div>

        <div>
          <h3> Small Size With Label </h3>
          <ShadowInputText type="text" inputValue="" placeholder="Eg: John Doe" inputLabel="Username" size="sm"></ShadowInputText>
        </div>

        <div>
          <h3> Medium Size </h3>
          <ShadowInputText type="text" inputValue="" placeholder="Eg: John Doe" inputLabel="Username" size="md"></ShadowInputText>
        </div>

        <div>
          <h3> Large Size </h3>
          <ShadowInputText type="text" inputValue="" placeholder="Eg: John Doe" inputLabel="Username" size="lg"></ShadowInputText>
        </div>

        <div>
          <h3> inline Message</h3>
          <ShadowInputText
            type="text"
            inputValue=""
            placeholder="Eg: John Doe"
            inputLabel="Username"
            size="sm"
            disabled={disabled}
            helpText="Enter your username to reset your password."
          ></ShadowInputText>
        </div>

        <div>
          <h3> Error State with inline Message </h3>
          <ShadowInputText
            type="text"
            inputValue=""
            placeholder="Eg: John Doe"
            inputLabel="Username"
            size="sm"
            error={error}
            errorMessage={errorMessage}
          ></ShadowInputText>
        </div>

        <div>
          <h3> With Icon at left side </h3>
          <ShadowInputText
            type="text"
            inputValue=""
            placeholder="Eg: John Doe"
            inputLabel="Username"
            size="sm"
            icon={"pi pi-at"}
            iconPosition={"left"}
            disabled={disabled}
          ></ShadowInputText>
        </div>

        <div>
          <h3> With Icon at right side </h3>
          <ShadowInputText
            type="text"
            inputValue=""
            placeholder="Eg: John Doe"
            inputLabel="Username"
            size="sm"
            icon={"pi pi-at"}
            iconPosition={"right"}
            disabled={disabled}
          ></ShadowInputText>
        </div>

        <div>
          <h3> With Icon at right side and disabled state </h3>
          <ShadowInputText
            type="text"
            inputValue=""
            placeholder="Eg: John Doe"
            inputLabel="Username"
            size="sm"
            icon={"pi pi-key"}
            iconPosition={"right"}
            disabled={true}
          ></ShadowInputText>
        </div>

        <div>
          <h3> Date Type Inbuilt </h3>
          <ShadowInputText type="date" inputValue="" placeholder="Eg: John Doe" inputLabel="Username" size="sm" disabled={false}></ShadowInputText>
        </div>

        <div>
          <h3> With Grouping</h3>
          <ShadowInputText
            type="numerals"
            inputValue="1000000"
            placeholder="Eg: John Doe"
            inputLabel="With Grouping"
            size="sm"
            disabled={false}
            useGrouping={true}
          ></ShadowInputText>
        </div>

        <div>
          <h3> Without Grouping</h3>
          <ShadowInputText
            type="numerals"
            inputValue="100000000"
            placeholder="Eg: John Doe"
            inputLabel="Without Grouping"
            size="sm"
            disabled={false}
            useGrouping={false}
          ></ShadowInputText>
        </div>

        <div>
          <h3> With Fraction option</h3>
          <ShadowInputText
            type="numerals"
            inputValue=""
            placeholder="Eg: John Doe"
            inputLabel="Fraction"
            size="sm"
            onChange={onChange}
            disabled={false}
            useGrouping={false}
            minFractionDigits={2}
            maxFractionDigits={2}
          ></ShadowInputText>
        </div>

        <div>
          <h3> Prefix </h3>
          <ShadowInputText
            type="numerals"
            inputValue="100"
            placeholder="Eg: John Doe"
            inputLabel="Prefix "
            size="sm"
            onChange={onChange}
            disabled={false}
            useGrouping={false}
            prefix={"Rs."}
          ></ShadowInputText>
        </div>

        <div>
          <h3> Suffix </h3>
          <ShadowInputText
            type="numerals"
            inputValue="10"
            placeholder="Eg: John Doe"
            inputLabel="Suffix"
            size="sm"
            onChange={onChange}
            disabled={false}
            useGrouping={false}
            suffix={"%"}
          ></ShadowInputText>
        </div>
      </div>
    </div>
  );
};

export default InputText;
