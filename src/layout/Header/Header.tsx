import React from 'react'
import styles from './Header.module.scss'
import {ShadowButton, ShadowCard, ShadowTag} from "shadow-ui-react";


const Header = () => {

  

  function handleDownload(){

window.open(
  "https://drive.google.com/uc?export=download&id=1RDTAmDlBsND9Tdi3fQtQShTRNHA_oS3g",
  "_blank"
);
  }
  function handleGitHub(){
window.open("https://github.com/shubham9069/Shadow-UI-React-Example", "_blank");
  }
  return (
    <div className={styles["header-conatiner"]}>
      <ShadowCard>
        {" "}
        <h1 style={{ color: "#001D4F" }}> Welcome to Shadow UI Design by Shubham  </h1>
      </ShadowCard>

      <div className={styles["section-headline"]}>
        <div className={styles["headings"]}>
          <ShadowTag
            tag={{
              label: "StandAlone Package ",
              type: "neutral",
              isPill: true,
              icon: "pi pi-user",
            }}
          />
          <span className={styles["heading1"]}>
            Build your component library
          </span>
          <span className={styles["sub-heading1"]}>
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </span>
        </div>
        <div className={styles["button-group"]}>
          <ShadowButton
            icon="pi pi-download"
            loading={false}
            label="Download "
            buttonType="secondary"
            size="sm"
            buttonActionStyle="brand"
            onButtonClick={handleDownload}
          />
          <ShadowButton
            icon="pi pi-github"
            label="Github"
            buttonType="primary"
            size="sm"
            buttonActionStyle="brand"
            onButtonClick={handleGitHub}
          />
        </div>
      </div>

      <div className={styles["step-installation"]}>
        <h3>
          To install this package into another application as part of its
          production build steps, you can follow these general steps:
        </h3>
        <ol>
          {/* setp -1 */}
          <li>
            Include the Package in Your Project: 
            <br />
            <p>
              {" "}
              Store the .tgz file in a location accessible to your application's
              build process. This could be within your project directory or a
              location where your build system can retrieve it.
            </p>
          </li>
          {/* step-2 */}
          <li>
            Add it to package.json:
            <br />
            <p>
              {" "}
              Add a dependency entry in your package.json file specifying the
              path or URL to your .tgz file. For example:
            </p>
            <img
              src="./assets/images/step-2.png"
              className={styles["step-image"]}
              alt="step-2"
            />
          </li>
          {/*  step-3 */}
          <li>
            Run npm install:
            <br />
            <p>
              {" "}
              during the production build process, run npm install to install
              dependencies. npm will fetch the package specified in the
              package.json and install it into the node_modules directory of
              your project.
            </p>
          </li>
          {/* step -4 */}
          <li>
            Install Expernal dependencies:
            <br />
            <p>
              {" "}
              You need to install some external dependencies for some component
              like Shadow-ui-sidebar contain react-router-dom, shadow-ui-chart
              contain highchart library here is dependencies give below:-
            </p>
            <img
              src="./assets/images/step-4.png"
              className={styles["step-image"]}
              alt="step-2"
            />
          </li>
          {/* step-5 */}
          <li>
          Import CSS:
            <br />
            <p>
              {" "}
              Import the Path of css file from Package folder in{" "}
              <strong>index.js</strong> line look like this{" "}
              <strong>import "shadow-ui-react/index.css"</strong>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Header