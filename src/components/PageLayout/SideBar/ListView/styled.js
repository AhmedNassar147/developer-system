import styled from "styled-components";
import MenuItem from "antd/es/menu/MenuItem";

export const Container = styled.section`
  margin-bottom: 10;
  margin-top: 10;
  padding-bottom: 5px;
  padding-top: 10px;
`;

export const TitleContainer = styled.section`
  margin-bottom: 5;
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
  align-items: center;
`;

export const Title = styled.h3`
  color: #fff;
  margin-bottom: 0;
`;

export default styled(MenuItem)`
  margin-bottom: 0px !important;
  height: 28px !important;
  line-height: 28px !important;
`;
