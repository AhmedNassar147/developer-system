import styled from "styled-components";
import Icon from "antd/es/icon";
import Layout from "antd/es/layout";
import Avatar from "antd/es/avatar";
import Link from "../Link";

const { Header } = Layout;

export const AppHeader = styled(Header)`
  padding: 0;
  background-color: #fff;
`;

export const StyledIcon = styled(Icon)`
  font-size: ${({ size }) => size || "20px"};
  line-height: ${({ lineheight }) => lineheight || "64px"};
  padding: ${({ padding }) => padding || "0 24px"};
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1890ff;
  }
`;

export const HeaderContent = styled.section`
  display: flex;
  justify-content: flex-end;
  padding-inline-end: 15px;
  line-height: inherit;
  height: 64px;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
  background-color: #c3c3c3;
  margin-inline-start: 10px;
`;

export const Text = styled.p`
  margin: 0 13px;
  font-size: 17px;
  color: #1890ff;
`;

export const PopoverItem = styled(Link)`
  display: block;
  height: 33px;
  line-height: 33px;
  padding: 0 2px;
  display: block;
  color: #000;
  width: 100%;
  font-size: 16px;
  &:hover {
    background: #f2f2f2;
    color: #000;
  }
`;
