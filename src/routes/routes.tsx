import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Button from "../pages/Button/Button";
import Table from "../pages/Table/Table";
import Toolbar from "../pages/Toolbar/Toolbar";
import Toolkit from "../pages/Toolkit/Toolkit";
import SideMenu from "../pages/SideMenu/SideMenu";
import Tab from "../pages/Tab/Tab";
import Card from "../pages/Card/Card";
import Chart from "../pages/Chart/Chart";
import Dialog from "../pages/Dialog/Dialog";
import ChatBox from "../pages/ChatBox/ChatBox";
import Avatar from "../pages/Avatar/Avatar";
import Chip from "../pages/Chip/Chip";
import Tag from "../pages/Tag/Tag";
import TieredMenu from "../pages/TieredMenu/TieredMenu";
import Dropdown from "../pages/Dropdown/Dropdown";
import Accordion from "../pages/Accordion/Accordion";
import Message from "../pages/Message/Message";
import ButtonGroup from "../pages/ButtonGroup/ButtonGroup";
import Popup from "../pages/Popup/Popup";
import Toast from "../pages/Toast/Toast";
import Badge from "../pages/Badge/Badge";
import Checkbox from "../pages/Checkbox/Checkbox";
import Banner from "../pages/Banner/Banner";
import Steps from "../pages/Steps/Steps";
import NotificationsPanel from "../pages/NotificationsPanel/NotificationsPanel";
import InputSwitch from "../pages/InputSwitch/InputSwitch";
import Radio from "../pages/Radio/Radio";
import Breadcrumb from "../pages/Breadcrumb/Breadcrumb";
import Dropbox from "../pages/Dropbox/Dropbox";
import Preview from "../pages/Preview/Preview";
import Divider from "../pages/Divider/Divider";
import AreaAction from "../pages/AreaAction/AreaAction";
import MultiSelect from "../pages/MultiSelect/MultiSelect";
import InputMask from "../pages/InputMask/InputMask";
import OverlayPanel from "../pages/Overlay/OverlayPanel";
import Panel from "../pages/Panel/Panel";
import InputGroup from "../pages/InputGroup/InputGroup";
import SelectButton from "../pages/SelectButton/SelectButton";
import MessageInline from "../pages/MessageInline/MessageInline";
import InputTextArea from "../pages/InputTextArea/InputTextArea";
import InputText from "../pages/InputText/InputText";
import Calendar from "../pages/Calendar/Calendar";

import Tooltip from "../pages/Tooltip/Tooltip";
import Tree from "../pages/Tree/Tree";
import Header from "../layout/Header/Header";
import CodeEditor from "../layout/CodeEditor/CodeEditor";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
          <Route path="banner" element={<Banner />} />
          <Route path="area-action" element={<AreaAction />} />
          <Route path="button" element={<Button />} />
          <Route path="button-group" element={<ButtonGroup />} />
          <Route path="badge" element={<Badge />} />
          <Route path="checkbox" element={<Checkbox />} />
          <Route path="table" element={<Table />} />
          <Route path="toolbar" element={<Toolbar />} />
          <Route path="toolkit" element={<Toolkit />} />
          <Route path="side-menu" element={<SideMenu />} />
          <Route path="tab" element={<Tab />} />
          <Route path="card" element={<Card />} />
          <Route path="chart" element={<Chart />} />
          <Route path="dialog" element={<Dialog />} />
          <Route path="chatbox" element={<ChatBox />} />
          <Route path="avatar" element={<Avatar />} />
          <Route path="chip" element={<Chip />} />
          <Route path="tag" element={<Tag />} />
          <Route path="tiered-menu" element={<TieredMenu />} />
          <Route path="dropdown" element={<Dropdown />} />
          <Route path="accordion" element={<Accordion />} />
          <Route path="message" element={<Message />} />
          <Route path="popup" element={<Popup />} />
          <Route path="toast" element={<Toast />} />
          <Route path="steps" element={<Steps />} />
          <Route path="notifications-panel" element={<NotificationsPanel />} />
          <Route path="input-switch" element={<InputSwitch />} />
          <Route path="radio" element={<Radio />} />
          <Route path="breadcrumb" element={<Breadcrumb />} />
          <Route path="dropbox" element={<Dropbox />} />
          <Route path="preview" element={<Preview />} />
          <Route path="divider" element={<Divider />} />
          <Route path="multi-select" element={<MultiSelect />} />
          <Route path="input-mask" element={<InputMask />} />
          <Route path="input-text" element={<InputText />} />
          <Route path="overlay-panel" element={<OverlayPanel />} />
          <Route path="panel" element={<Panel />} />
          <Route path="input-group" element={<InputGroup />} />
          <Route path="select-button" element={<SelectButton />} />
          <Route path="message-inline" element={<MessageInline />} />
          <Route path="text-area" element={<InputTextArea />} />
          <Route path="table" element={<Table />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="tooltip" element={<Tooltip />} />
          <Route path="tree" element={<Tree />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
