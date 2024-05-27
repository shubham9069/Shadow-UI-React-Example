import React, { useState } from "react";
import {ShadowTag}  from "shadow-ui-react";
import styles from "./Tag.module.scss";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import React, { useState } from "react";
import {ShadowTag}  from "shadow-ui-react";
import styles from "./Tag.module.scss";

const Tag = () => {
  const [tagLabel, setTagLabel] = useState<string>("Test");

  const onClickTag = (event: any) => {
    console.log("onClickTag", event);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Toolbar different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any tag to view the object)
          </span>
        </p>
        <div>
          <div style={{ display: "grid", justifyContent: "center" }}>
            <h5>Primary Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "primary",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Secondary Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "secondary",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Success Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "success",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Info Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "info",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Alert Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "alert",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Danger Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "danger",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Neutral Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "neutral",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Info Tag without Pill Option</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "neutral",
                isPill: false,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tag;
`;
const Tag = () => {
  const [tagLabel, setTagLabel] = useState<string>("Test");

  const onClickTag = (event: any) => {
    console.log("onClickTag", event);
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Toolbar different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any tag to view the object)
          </span>
        </p>
        <div>
          <div style={{ display: "grid", justifyContent: "center" }}>
            <h5>Primary Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "primary",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Secondary Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "secondary",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Success Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "success",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Info Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "info",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Alert Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "alert",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Danger Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "danger",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Neutral Tag</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "neutral",
                isPill: true,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />

            <h5>Info Tag without Pill Option</h5>
            <br />
            <ShadowTag
              tag={{
                label: tagLabel,
                type: "neutral",
                isPill: false,
                icon: "pi pi-user",
              }}
              onClickTag={onClickTag}
            />
            <br />
          </div>
        </div>
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Tag;
