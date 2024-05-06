import { useLocation, useNavigate } from "react-router-dom";
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
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Breadcrumb different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <ShadowBreadcrumb breadcrumbItem={breadCrumbItems} truncation="middle" onChangeLabel={onChangeLabel} clickHandler={onClickItem} />
        <ShadowBreadcrumb breadcrumbItem={breadCrumbItems} size="sm" truncation="beginning" onChangeLabel={onChangeLabel} clickHandler={onClickItem} />
      </div>
    </div>
  );
};

export default Breadcrumb;
