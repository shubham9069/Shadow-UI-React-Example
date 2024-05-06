import { ShadowButton } from "shadow-ui-react";
import styles from "./Tooltip.module.scss";

const Tooltip = () => {
  const tooltip = "test tooltip of the single line which can be wrapped on multiple line";
  const delay = 150;
  const tooltipPosition = "right"; // or other position values
  const tooltipTheme = "dark"; // or 'light'
  const tooltipEvent = "hover"; // or 'click'
  const tooltipType = "multiple"; // or 'single'
  const tooltipWidth = "20%";
  const tooltipCaretPosition = "center";

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Tooltip different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <div style={{ width: "200px" }}>
          <ShadowButton
            tooltip={tooltip}
            delay={delay}
            label="Right Tooltip - Hover on me to see tooltip"
            tooltipPosition={tooltipPosition}
            tooltipTheme={tooltipTheme}
            tooltipEvent={tooltipEvent}
            tooltipType={tooltipType}
            tooltipCaretAlignment={tooltipCaretPosition}
            tooltipWidth={tooltipWidth}
          />
        </div>
        <div style={{ width: "200px" }}>
          <ShadowButton
            tooltip={tooltip}
            delay={delay}
            tooltipPosition="left"
            label="Left Tooltip - Hover on me to see tooltip"
            tooltipTheme={tooltipTheme}
            tooltipEvent={tooltipEvent}
            tooltipType={tooltipType}
            tooltipCaretAlignment={tooltipCaretPosition}
            tooltipWidth={tooltipWidth}
          />
        </div>
        <div style={{ width: "200px" }}>
          <ShadowButton
            tooltip={tooltip}
            delay={delay}
            tooltipPosition="top"
            label="Top Tooltip - Hover on me to see tooltip"
            tooltipTheme={tooltipTheme}
            tooltipEvent={tooltipEvent}
            tooltipType={tooltipType}
            tooltipCaretAlignment={tooltipCaretPosition}
            tooltipWidth={tooltipWidth}
          />
        </div>
        <div style={{ width: "200px" }}>
          <ShadowButton
            tooltip={tooltip}
            delay={delay}
            tooltipPosition="bottom"
            label="Bottom Tooltip - Hover on me to see tooltip"
            tooltipTheme={tooltipTheme}
            tooltipEvent={tooltipEvent}
            tooltipType={tooltipType}
            tooltipCaretAlignment={tooltipCaretPosition}
            tooltipWidth={tooltipWidth}
          />
        </div>
        <div style={{ width: "200px" }}>
          <ShadowButton
            tooltip={tooltip}
            delay={delay}
            tooltipPosition={tooltipPosition}
            label="Click to see tooltip"
            tooltipTheme={tooltipTheme}
            tooltipEvent="click"
            tooltipType={tooltipType}
            tooltipCaretAlignment={tooltipCaretPosition}
            tooltipWidth={tooltipWidth}
          />
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
