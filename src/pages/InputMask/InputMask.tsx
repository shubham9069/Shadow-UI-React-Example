import { useState } from "react";
import styles from "./InputMask.module.scss";
import { ShadowInputMask } from "shadow-ui-react";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import { useState } from "react";
import styles from "./InputMask.module.scss";
import { ShadowInputMask } from "shadow-ui-react";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const countryOptions = [
  {
    name: "India",
    code: "IN",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png",
  },
  {
    name: "United States",
    code: "US",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png",
  },
  {
    name: "United Kingdom",
    code: "UK",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/255px-Flag_of_the_United_Kingdom.svg.png",
  },
  {
    name: "Australia",
    code: "AU",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/255px-Flag_of_Australia.svg.png",
  },
  {
    name: "Canada",
    code: "CA",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/255px-Flag_of_Canada.svg.png",
  },
];

const InputMask = () => {
  const [cardOptions, setCardOptions] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [selectedMaskOption, setSelectedMaskOption] = useState({
    name: "VISA",
    code: "visa",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  });

  const onChangeHandler = (event: any) => {
    console.log("InputMaskChangeHandler Event", event);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            InputMask different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div className="temp-container">
              <h3>With Template</h3>
              <div className="children-container">
                <div className="child">
                  <ShadowInputMask
                    inputLabel="Credit Card Number"
                    inputValue="4242 4242 4242 4242"
                    options={cardOptions}
                    template={true}
                    align="right"
                    format="card"
                    disabled={disabled}
                    onChangeHandler={(value) => onChangeHandler(value)}
                  />
                </div>

                <div className="child">
                  <ShadowInputMask
                    inputLabel="Phone number"
                    options={countryOptions}
                    align="left"
                    template={true}
                    placeholder="Eg: (123) 456-7890"
                    format="phone"
                    disabled={disabled}
                    onChangeHandler={(value) => onChangeHandler(value)}
                  />
                </div>
              </div>
            </div>

            <div className="temp-container">
              <h3>Basic</h3>
              <div className="children-container">
                <div className="child">
                  <ShadowInputMask
                    inputLabel="Credit Card Number"
                    template={false}
                    format="card"
                    disabled={disabled}
                    onChangeHandler={(value) => onChangeHandler(value)}
                  />
                </div>

                <div className="child">
                  <ShadowInputMask
                    inputLabel="Phone number"
                    template={false}
                    format="phone"
                    disabled={disabled}
                    onChangeHandler={(value) => onChangeHandler(value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default InputMask;
`;
const countryOptions = [
  {
    name: "India",
    code: "IN",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png",
  },
  {
    name: "United States",
    code: "US",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png",
  },
  {
    name: "United Kingdom",
    code: "UK",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/255px-Flag_of_the_United_Kingdom.svg.png",
  },
  {
    name: "Australia",
    code: "AU",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/255px-Flag_of_Australia.svg.png",
  },
  {
    name: "Canada",
    code: "CA",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/255px-Flag_of_Canada.svg.png",
  },
];

const InputMask = () => {
  const [cardOptions, setCardOptions] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [selectedMaskOption, setSelectedMaskOption] = useState({
    name: "VISA",
    code: "visa",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  });

  const onChangeHandler = (event: any) => {
    console.log("InputMaskChangeHandler Event", event);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            InputMask different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div className="temp-container">
              <h3>With Template</h3>
              <div className="children-container">
                <div className="child">
                  <ShadowInputMask
                    inputLabel="Credit Card Number"
                    inputValue="4242 4242 4242 4242"
                    options={cardOptions}
                    template={true}
                    align="right"
                    format="card"
                    disabled={disabled}
                    onChangeHandler={(value) => onChangeHandler(value)}
                  />
                </div>

                <div className="child">
                  <ShadowInputMask
                    inputLabel="Phone number"
                    options={countryOptions}
                    align="left"
                    template={true}
                    placeholder="Eg: (123) 456-7890"
                    format="phone"
                    disabled={disabled}
                    onChangeHandler={(value) => onChangeHandler(value)}
                  />
                </div>
              </div>
            </div>

            <div className="temp-container">
              <h3>Basic</h3>
              <div className="children-container">
                <div className="child">
                  <ShadowInputMask
                    inputLabel="Credit Card Number"
                    template={false}
                    format="card"
                    disabled={disabled}
                    onChangeHandler={(value) => onChangeHandler(value)}
                  />
                </div>

                <div className="child">
                  <ShadowInputMask
                    inputLabel="Phone number"
                    template={false}
                    format="phone"
                    disabled={disabled}
                    onChangeHandler={(value) => onChangeHandler(value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default InputMask;
