import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import PageRoutes from "../../routes/routes";
import ChatBox from "../../pages/ChatBox/ChatBox";
import { ShadowMenu, ShadowMenuState, ShadowSideMenu } from "shadow-ui-react";
import { sideMenuData, utilitiesMenuData } from "../../utils/dummyData";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const currentPath = useLocation().pathname;
  const [sideMenu, setSideMenu] = useState<ShadowMenu[]>(sideMenuData);

  const [utilitiesMenu, setUtilitiesMenu] = useState<ShadowMenu[] | any>(
    utilitiesMenuData
  );

  const [sideMenuWidth, setSideMenuWidth] = useState<string>("240px");
  const [userName] = useState<string>("Shubham Kaushik");
  const [userEmail] = useState<string>("ShubhamKhaushik@gmail.com");
  const [sideMenuState, setSideMenuState] = useState<string>("open");
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  const notificationItems: any[] = [
    {
      title:
        "Elizabeth Smith shared the Category Promo Opportunity Board with you",
      icon: "../assets/icons/ai-menu-filled.svg",
      subtitle: "10 mins ago",
      okButtonText: "confirm",
      id: "notification 1",
    },
    {
      title: "item 2",
      subtitle: "100 mins ago",
      icon: "../assets/icons/ai-menu-filled.svg",
      id: "notification 2",
    },
  ];

  const okHandler = (item: any) => {
    console.log(item);
  };

  const cancelHandler = (item: any) => {
    console.log(item);
  };

  const onUtilitiesClick = (type: any) => {
    if (type.label === "Notifications") {
      setShowNotifications(!showNotifications);
    }
  };

  const onHideNotification = (_e: any) => {
    setShowNotifications(false);
  };

  const onMenuToggle = (sideMenuState: ShadowMenuState) => {
    if (sideMenuState === ShadowMenuState.Open) {
      setSideMenuState("open");
      setSideMenuWidth("240px");
    } else {
      setSideMenuState("close");
      setSideMenuWidth("60px");
    }
  };

  const onClickMenuItem = (data: ShadowMenu) => {
    console.log(data);
    if (data.label === "Notifications") {
      setShowNotifications(true);
    }
  };

  const onSearch = (event: any) => {
    // console.log("event", event);
    const inputValue = event.target.value;
    if (event.target.value === "") setSideMenu(sideMenuData);
    else {
      const filteredSideMenu = sideMenu.filter((value: ShadowMenu) =>
        value.label?.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSideMenu(filteredSideMenu);
    }
  };

  return (
    <div
      className={
        sideMenuState === "open"
          ? styles["layout-container"]
          : styles["layout-container-side-collapse"]
      }
    >
      <div>
        <ShadowSideMenu
          menuItems={sideMenu}
          width={sideMenuWidth}
          appLogo="../assets/images/logo.png"
          closeIcon="../assets/images/menu_collapse.svg"
          showNotifications={showNotifications}
          notifications={notificationItems}
          appLogoSmall="../assets/images/logo_small.png"
          toggleMenuEvent={onMenuToggle}
          productName="Integrate-UI-"
          onChangeMenu={onClickMenuItem}
          onCancelNotificationClick={cancelHandler}
          onConfirmNotificationClick={okHandler}
          onHideNotifications={onHideNotification}
          productSubHeading=" Component"
          userImage="../assets/images/shubham_photo.jpg"
          userName={userName}
          userEmail={userEmail}
          utilityMenus={utilitiesMenu}
          showSearchBox={true}
          onChangeSearch={onSearch}
        >
          {(data: any) => (
            <>
              {data.label === "Boards" && (
                <div className="dropdown-title">
                  <Link
                    to={data.url}
                    className={
                      sideMenuState === "open" && data.url == currentPath
                        ? "indicator"
                        : ""
                    }
                  >
                    {data.icon && (
                      <i className={`${data.icon} menuItem-icon`}></i>
                    )}
                    {sideMenuState === "open" && (
                      <span className="link_name">{data.label}</span>
                    )}
                    {sideMenuState === "open" && (
                      <span className="add-board">
                        <i
                          style={{ color: "#0074E8" }}
                          className="pi pi-plus"
                        ></i>
                      </span>
                    )}
                  </Link>
                </div>
              )}
            </>
          )}
        </ShadowSideMenu>
      </div>

      <div className={styles["content"]}>
        <PageRoutes />
      </div>
      {/* <ChatBox /> */}
    </div>
  );
};

export default Layout;
