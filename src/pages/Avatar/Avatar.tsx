import React from 'react'
import { ShadowAvatar, ShadowAvatarGroup } from "shadow-ui-react";
import CodeEditor from '../../layout/CodeEditor/CodeEditor';

const value = `import React from 'react'
import { ShadowAvatar, ShadowAvatarGroup } from "shadow-ui-react";
import CodeEditor from '../../layout/CodeEditor/CodeEditor';


const Avatar = () => {
  const avatarGroupData_initials: ShadowAvatarGroup[] = [
    {
      label: "a1",
    },
    {
      label: "b2",
    },
    {
      label: "c1",
    },
    {
      label: "c2",
    },
    {
      label: "d1",
    },
    {
      label: "d2",
    },
    {
      label: "e1",
    },
    {
      label: "e5",
    },
    {
      label: "zz",
    },
    {
      label: "d1",
    },
    {
      label: "d2",
    },
    {
      label: "e1",
    },
    {
      label: "e5",
    },
    {
      label: "zz",
    },
  ];

  const avatarGroupData_icons: ShadowAvatarGroup[] = [
    {
      icon: "pi pi-prime",
    },
    {
      icon: "pi pi-heart-fill",
    },
    {
      icon: "pi pi-send",
    },
    {
      icon: "pi pi-users",
    },
    {
      icon: "pi pi-slack",
    },
    {
      icon: "pi pi-pencil",
    },
    {
      icon: "pi pi-moon",
    },
    {
      icon: "pi pi-sun",
    },
    {
      icon: "pi pi-shield",
    },
    {
      icon: "pi pi-users",
    },
    {
      icon: "pi pi-slack",
    },
    {
      icon: "pi pi-pencil",
    },
    {
      icon: "pi pi-moon",
    },
    {
      icon: "pi pi-sun",
    },
    {
      icon: "pi pi-shield",
    },
  ];

  const avatarGroupData_images: ShadowAvatarGroup[] = [
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png",
    },
  ];

  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexDirection: "column" }}>
      <div style={{ border: "1px solid black", width: "250px" }}>
        <ShadowAvatar
          grouping={true}
          hideOverflow={true}
          size="large"
          themeStyle="primary"
          actionStyle="strong"
          shape="circle"
          type="image"
          avatarGroupData={avatarGroupData_images}
        ></ShadowAvatar>
        <ShadowAvatar
          grouping={true}
          hideOverflow={true}
          size={"large"}
          themeStyle={"primary"}
          actionStyle={"strong"}
          shape={"circle"}
          type={"initials"}
          avatarGroupData={avatarGroupData_initials}
        ></ShadowAvatar>
        <ShadowAvatar
          grouping={true}
          hideOverflow={true}
          size={"large"}
          themeStyle={"neutral"}
          actionStyle={"strong"}
          shape={"circle"}
          type={"icon"}
          avatarGroupData={avatarGroupData_icons}
        ></ShadowAvatar>
      </div>

      <ShadowAvatar shape="circle" size="micro" type="initials" themeStyle="neutral" actionStyle="subdued" initials="AK"></ShadowAvatar>
      <ShadowAvatar shape="circle" type="initials" themeStyle="primary" actionStyle="subdued" initials="AK"></ShadowAvatar>
      <ShadowAvatar size="large" shape="circle" type="initials" initials="AK"></ShadowAvatar>
      <ShadowAvatar size="xlarge" themeStyle="neutral" actionStyle="strong" shape="circle" type="initials" initials="AK"></ShadowAvatar>
      <ShadowAvatar size="xlarge" themeStyle="primary" actionStyle="strong" shape="circle" type="initials" initials="AK"></ShadowAvatar>
      <ShadowAvatar size="large" type="icon" icon="pi pi-user" shape="circle"></ShadowAvatar>
      <ShadowAvatar size="large" themeStyle="primary" actionStyle="subdued" type="icon" icon="pi pi-user" shape="circle"></ShadowAvatar>
      <ShadowAvatar size="xlarge" themeStyle="neutral" actionStyle="strong" type="icon" icon="pi pi-user" shape="circle"></ShadowAvatar>
      <ShadowAvatar size="xlarge" themeStyle="primary" actionStyle="strong" type="icon" icon="pi pi-user" shape="circle"></ShadowAvatar>
      <ShadowAvatar
        size="xlarge"
        themeStyle="primary"
        actionStyle="strong"
        type="image"
        imageUrl="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png"
      ></ShadowAvatar>
    </div>
     </>
  );
};


export default Avatar`;
const Avatar = () => {
  const avatarGroupData_initials: ShadowAvatarGroup[] = [
    {
      label: "a1",
    },
    {
      label: "b2",
    },
    {
      label: "c1",
    },
    {
      label: "c2",
    },
    {
      label: "d1",
    },
    {
      label: "d2",
    },
    {
      label: "e1",
    },
    {
      label: "e5",
    },
    {
      label: "zz",
    },
    {
      label: "d1",
    },
    {
      label: "d2",
    },
    {
      label: "e1",
    },
    {
      label: "e5",
    },
    {
      label: "zz",
    },
  ];

  const avatarGroupData_icons: ShadowAvatarGroup[] = [
    {
      icon: "pi pi-prime",
    },
    {
      icon: "pi pi-heart-fill",
    },
    {
      icon: "pi pi-send",
    },
    {
      icon: "pi pi-users",
    },
    {
      icon: "pi pi-slack",
    },
    {
      icon: "pi pi-pencil",
    },
    {
      icon: "pi pi-moon",
    },
    {
      icon: "pi pi-sun",
    },
    {
      icon: "pi pi-shield",
    },
    {
      icon: "pi pi-users",
    },
    {
      icon: "pi pi-slack",
    },
    {
      icon: "pi pi-pencil",
    },
    {
      icon: "pi pi-moon",
    },
    {
      icon: "pi pi-sun",
    },
    {
      icon: "pi pi-shield",
    },
  ];

  const avatarGroupData_images: ShadowAvatarGroup[] = [
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png",
    },
    {
      imageUrl: "https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png",
    },
  ];

  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexDirection: "column" }}>
      <div style={{ border: "1px solid black", width: "250px" }}>
        <ShadowAvatar
          grouping={true}
          hideOverflow={true}
          size="large"
          themeStyle="primary"
          actionStyle="strong"
          shape="circle"
          type="image"
          avatarGroupData={avatarGroupData_images}
        ></ShadowAvatar>
        <ShadowAvatar
          grouping={true}
          hideOverflow={true}
          size={"large"}
          themeStyle={"primary"}
          actionStyle={"strong"}
          shape={"circle"}
          type={"initials"}
          avatarGroupData={avatarGroupData_initials}
        ></ShadowAvatar>
        <ShadowAvatar
          grouping={true}
          hideOverflow={true}
          size={"large"}
          themeStyle={"neutral"}
          actionStyle={"strong"}
          shape={"circle"}
          type={"icon"}
          avatarGroupData={avatarGroupData_icons}
        ></ShadowAvatar>
      </div>

      <ShadowAvatar shape="circle" size="micro" type="initials" themeStyle="neutral" actionStyle="subdued" initials="AK"></ShadowAvatar>
      <ShadowAvatar shape="circle" type="initials" themeStyle="primary" actionStyle="subdued" initials="AK"></ShadowAvatar>
      <ShadowAvatar size="large" shape="circle" type="initials" initials="AK"></ShadowAvatar>
      <ShadowAvatar size="xlarge" themeStyle="neutral" actionStyle="strong" shape="circle" type="initials" initials="AK"></ShadowAvatar>
      <ShadowAvatar size="xlarge" themeStyle="primary" actionStyle="strong" shape="circle" type="initials" initials="AK"></ShadowAvatar>
      <ShadowAvatar size="large" type="icon" icon="pi pi-user" shape="circle"></ShadowAvatar>
      <ShadowAvatar size="large" themeStyle="primary" actionStyle="subdued" type="icon" icon="pi pi-user" shape="circle"></ShadowAvatar>
      <ShadowAvatar size="xlarge" themeStyle="neutral" actionStyle="strong" type="icon" icon="pi pi-user" shape="circle"></ShadowAvatar>
      <ShadowAvatar size="xlarge" themeStyle="primary" actionStyle="strong" type="icon" icon="pi pi-user" shape="circle"></ShadowAvatar>
      <ShadowAvatar
        size="xlarge"
        themeStyle="primary"
        actionStyle="strong"
        type="image"
        imageUrl="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png"
      ></ShadowAvatar>
    </div>
     <CodeEditor componentToString={value} />
     </>
  );
};


export default Avatar