import React from "react";
import Menu from "antd/es/menu";
import MenuItem from "antd/es/menu/MenuItem";
import Sider from "antd/es/layout/Sider";
import Icon from "antd/es/icon";
import { Logo } from "./styled";

const SidebarView = ({ collapsed }) => (
  <Sider width="270px" trigger={null} collapsible collapsed={collapsed}>
    <Logo />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <MenuItem key="1">
        <Icon type="user" />
        <span>nav 1</span>
      </MenuItem>
      <MenuItem key="2">
        <Icon type="video-camera" />
        <span>nav 2</span>
      </MenuItem>
      <MenuItem key="3">
        <Icon type="upload" />
        <span>nav 3</span>
      </MenuItem>
    </Menu>
  </Sider>
);

export default SidebarView;
