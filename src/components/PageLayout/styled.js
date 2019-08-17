import styled from "styled-components";
import Layout from "antd/es/layout";

const { Content } = Layout;

export const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

export const StyledLayout = styled(Layout)`
  height: 100vh;
`;

export const StyledContent = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  background-color: #fff;
  min-height: 280;
`;

export { Layout };
