import { ShadowBanner, ShadowBannerItem } from "shadow-ui-react";
import styles from "./Banner.module.scss";

const Banner = () => {
  const shadowBanner: ShadowBannerItem = {
    severity: "success",
    summary: "this is summary this is summary this is summary this is summary",
    buttonGroup: [],
  };

  const shadowBanner1: ShadowBannerItem = {
    severity: "success",
    summary: "this is summary this is summary this is summary this is summary ",
    buttonGroup: [{ label: "text brand", icon: "pi pi-users", buttonActionStyle: "success", buttonType: "primary" }],
  };

  const shadowBanner2: ShadowBannerItem = {
    severity: "info",
    summary: "this is summary",
    buttonGroup: [],
  };

  const shadowBanner3: ShadowBannerItem = {
    severity: "info",
    summary: "this is summary",
    buttonGroup: [{ label: "text brand", icon: "pi pi-users", buttonActionStyle: "brand", buttonType: "primary" }],
  };

  const shadowBanner4: ShadowBannerItem = {
    severity: "warn",
    summary: "this is summary",
    buttonGroup: [],
  };

  const shadowBanner5: ShadowBannerItem = {
    severity: "warn",
    summary: "this is summary",
    buttonGroup: [{ label: "text brand", icon: "pi pi-users", buttonActionStyle: "warning", buttonType: "primary" }],
  };

  const shadowBanner6: ShadowBannerItem = {
    severity: "error",
    summary: "this is summary",
    buttonGroup: [],
  };

  const shadowBanner7: ShadowBannerItem = {
    severity: "error",
    summary: "this is summary",
    buttonGroup: [{ label: "text brand", icon: "pi pi-users", buttonActionStyle: "destructive", buttonType: "primary" }],
  };

  const buttonClick = (e: any) => {
    console.log("button clicked", e);
  };

  const bannerClosed = (e: any) => {
    console.log("Banner closed", e);
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Banner different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <ShadowBanner shadowBanner={shadowBanner} onCloseBanner={bannerClosed} onClickButton={buttonClick} />
        <ShadowBanner shadowBanner={shadowBanner1} onCloseBanner={bannerClosed} onClickButton={buttonClick} />
        <div></div>
        <ShadowBanner shadowBanner={shadowBanner2} onCloseBanner={bannerClosed} onClickButton={buttonClick} />
        <ShadowBanner shadowBanner={shadowBanner3} onCloseBanner={bannerClosed} onClickButton={buttonClick} />
        <div></div>
        <ShadowBanner shadowBanner={shadowBanner4} onCloseBanner={bannerClosed} onClickButton={buttonClick} />
        <ShadowBanner shadowBanner={shadowBanner5} onCloseBanner={bannerClosed} onClickButton={buttonClick} />
        <div></div>
        <ShadowBanner shadowBanner={shadowBanner6} onCloseBanner={bannerClosed} onClickButton={buttonClick} />
        <ShadowBanner shadowBanner={shadowBanner7} onCloseBanner={bannerClosed} onClickButton={buttonClick} />
        <div></div>
        <ShadowBanner shadowBanner={shadowBanner} textWrap="ellipsis" onCloseBanner={bannerClosed} onClickButton={buttonClick} />
        <ShadowBanner shadowBanner={shadowBanner1} textWrap="ellipsis" onCloseBanner={bannerClosed} onClickButton={buttonClick} />
      </div>
    </div>
  );
};

export default Banner;
