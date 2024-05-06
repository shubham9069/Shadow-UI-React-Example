import { ShadowTree, ShadowTreeNode } from "shadow-ui-react";
import { treeData } from "../../utils/dummyData";
import styles from "./Tree.module.scss";

const tree: ShadowTreeNode[] = treeData;

const Tree = () => {
  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Tree different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <div className={styles["section-item"]}>
          <p className={styles["section-sub-header"]}>Tree with single selection</p>
          <ShadowTree data={tree} selectionMode={"single"}></ShadowTree>
        </div>
        <div className={styles["section-item"]}>
          <p className={styles["section-sub-header"]}>Tree with multiple selection</p>
          <ShadowTree data={tree} selectionMode={"multiple"}></ShadowTree>
        </div>
        <div className={styles["section-item"]}>
          <p className={styles["section-sub-header"]}>Tree with checkbox selection</p>
          <ShadowTree data={tree} selectionMode={"checkbox"}></ShadowTree>
        </div>
      </div>
    </div>
  );
};

export default Tree;
