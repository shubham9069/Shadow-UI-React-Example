import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
import { useState } from "react";
import { breadcrumbData } from "../../utils/dummyData";
import { ShadowBreadcrumb, ShadowButton } from "shadow-ui-react";
import CodeEditor from "../../layout/CodeEditor/CodeEditor";

const value = `import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
import { useState } from "react";
import { breadcrumbData } from "../../utils/dummyData";
import { ShadowBreadcrumb } from "shadow-ui-react";

const Breadcrumb = () => {
  const [breadCrumbItems, setBreadCrumbItems] = useState(breadcrumbData);
  const navigate = useNavigate();

  const onChangeLabel = (e: any) => {
    console.log("onChangeBreadCrumbLabelEvent", e);
  };

  const onClickItem = (e: any) => {
    console.log("onClickBreadcrumbItemEvent", e);
    if (e.routeLink) {
      navigate(e.routeLink);
    }
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Breadcrumb different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowBreadcrumb
            breadcrumbItem={breadCrumbItems}
            truncation="middle"
            onChangeLabel={onChangeLabel}
            clickHandler={onClickItem}
          />
          <ShadowBreadcrumb
            breadcrumbItem={breadCrumbItems}
            size="sm"
            truncation="beginning"
            onChangeLabel={onChangeLabel}
            clickHandler={onClickItem}
          />
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
`;
const Breadcrumb = () => {
  const [breadCrumbItems, setBreadCrumbItems] = useState(breadcrumbData);
  const navigate = useNavigate();

  const onChangeLabel = (e: any) => {
    console.log("onChangeBreadCrumbLabelEvent", e);
  };

  const onClickItem = (e: any) => {
    console.log("onClickBreadcrumbItemEvent", e);
    if (e.routeLink) {
      navigate(e.routeLink);
    }
  };

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["section-header-container"]}>
          <span className={styles["section-header"]}>
            Breadcrumb different types
          </span>{" "}
          <span className={styles["section-desc"]}>
            (Check console after clicking any button to view the object)
          </span>
        </p>
        <div className={styles["section-main"]}>
          <ShadowBreadcrumb
            breadcrumbItem={breadCrumbItems}
            truncation="middle"
            onChangeLabel={onChangeLabel}
            clickHandler={onClickItem}
          />
          <ShadowBreadcrumb
            breadcrumbItem={breadCrumbItems}
            size="sm"
            truncation="beginning"
            onChangeLabel={onChangeLabel}
            clickHandler={onClickItem}
          />
        </div>
      </div>
      <div style={{padding: "0 2rem " }}>
        <h4>Dummy Data Download File </h4>
        <ShadowButton
          icon="pi pi-download"
          loading={false}
          label="Download "
          buttonType="primary"
          size="sm"
          buttonActionStyle="brand"
          onButtonClick={() =>
            window.open(
              "https://drive.google.com/uc?export=download&id=1wPXNzwhn1J-43zcjI52oIr6AdGSIsVTd",
              "_blank"
            )
          }
        />
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
};

export default Breadcrumb;
