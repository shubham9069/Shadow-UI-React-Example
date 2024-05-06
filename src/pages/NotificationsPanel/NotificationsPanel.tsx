import { useState } from "react";
import { ShadowNotificationsPanel, ShadowButton } from "shadow-ui-react";
import styles from "./NotificationsPanel.module.scss";

const notificationItems: any[] = [
  {
    title: "Elizabeth Smith shared the Category Promo Opportunity Board with you",
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

const NotificationPanel = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const EmptyNotificationMessage = "No New Notifications";

  const okHandler = (item: any) => {
    console.log(item);
  };

  const cancelHandler = (item: any) => {
    console.log(item);
  };

  const onHideNotifications = (e: any) => {
    console.log("hide notification event", e);
    setShowNotifications(false);
  };

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>NotificationPanel different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>
        <ShadowButton onButtonClick={() => setShowNotifications(true)} label="Open Notification Panel" />
        <ShadowNotificationsPanel
          display={showNotifications}
          class={"open-sidebar"}
          position="custom"
          customPosition={{ top: "0vh", left: "460px" }}
          onOkClick={okHandler}
          onCancelClick={cancelHandler}
          items={notificationItems}
          title="Notifications"
          subtitle={""}
          height="100vh"
          width="540px"
          emptyMessage={EmptyNotificationMessage}
          onHide={onHideNotifications}
          tabs={[]}
        />
      </div>
    </div>
  );
};

export default NotificationPanel;
