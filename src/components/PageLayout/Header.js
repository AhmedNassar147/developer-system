import React from "react";
import Row from "antd/es/row";
import Col from "antd/es/col";
import Button from "antd/es/button/button";
import WSpacesMenu from "./WsMenu";
import {
  AppHeader,
  StyledIcon,
  HeaderContent,
  StyledAvatar,
  Text
} from "./styledheader";

const Header = ({ collapsed, toggle, imgUrl }) => (
  <AppHeader>
    <Row>
      <Col span={3}>
        <StyledIcon
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggle}
        />
      </Col>
      <Col span={21}>
        <HeaderContent>
          <Button children="bunch In" type="ghost" />

          <Text children="00:00:00" />

          <WSpacesMenu />

          <StyledAvatar size={48} icon="user" src={imgUrl} />
        </HeaderContent>
      </Col>
    </Row>
  </AppHeader>
);

export default Header;
