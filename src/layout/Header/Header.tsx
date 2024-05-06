import React from 'react'
import styles from './Header.module.scss'
import {ShadowCard} from "shadow-ui-react";

const Header = () => {
  return (
    <div className={styles["header-conatiner"]}>
      <ShadowCard>
        {" "}
        <h1 style={{color: "#001D4F"}}> Welcome to Shadow UI Design </h1>
      </ShadowCard>
    </div>
  );
}

export default Header