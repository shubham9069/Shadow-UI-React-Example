import { ShadowChip, ShadowChipItem } from "shadow-ui-react";
import styles from "./Chip.module.scss";

const Chip = () => {
  const chips: ShadowChipItem[] = [
    { key: "Chip1", label: "Chip1", removable: true },
    { key: "Chip2", label: "Chip2", removable: true },
    { key: "Chip3", label: "Chip3", removable: true },
    { key: "Chip4", label: "Chip4", removable: true },
    { key: "Chip5", label: "Chip5", removable: true },
    { key: "Chip6", label: "Chip6", removable: true },
    { key: "Chip7", label: "Chip7", removable: true },
    { key: "Chip8", label: "Chip8", removable: true },
    { key: "Chip9", label: "Chip9", removable: true },
    { key: "Chip10", label: "Chip10", removable: true },
    { key: "Chip11", label: "Chip11", removable: true },
    { key: "Chip12", label: "Chip12", removable: true },
    { key: "Chip13", label: "Chip13", removable: true },
    { key: "Chip14", label: "Chip14", removable: true },
    { key: "Chip15", label: "Chip15", removable: true },
  ];

  const chipClickHandler = (event: any) => {
    console.log("onChipClick", event);
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Chips different types</span>{" "}
        {/* <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span> */}
      </p>
      <div className={styles["section-main"]}>
        <div style={{ width: "300px", height: "300px", marginLeft: "100px" }}>
          <h5>Chip With overflow Hide</h5>
          <br />
          <ShadowChip chipList={chips} hideOverflow={true} chipClickHandler={chipClickHandler} />
          <br />

          <h5>Chip With Avatar</h5>
          <br />
          <ShadowChip
            chipList={[
              {
                avatarUrl: "../assets/images/profile_avatar.png",
                type: "withAvatar",
                key: "test-avatar",
                label: "chip with avatar",
                removable: true,
              },
            ]}
          />
        </div>

        <div style={{ width: "300px", height: "300px", marginLeft: "100px" }}>
          <h5>Chip With overflow</h5>
          <br />
          <ShadowChip chipList={chips} hideOverflow={false} />
        </div>

        <div style={{ width: "300px", height: "300px", marginLeft: "100px" }}>{/* Add content if needed */}</div>
      </div>
    </div>
  );
};

export default Chip;
