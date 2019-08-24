import styled from "styled-components";
import Layout from "antd/es/layout";

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  height: 100vh;
`;

export const StyledContent = styled(Content)`
  margin: 0px 0px;
  padding: 0px 24px;
  background-color: #fff;
  min-height: 280;
`;

export { Layout };
