import styled from "styled-components";
import Icon from "antd/es/icon";

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const Wrapper = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width || "400px"};
  background: #fff;
  border-radius: 5px;
  padding: 30px 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Form = styled.form`
  margin-bottom: 10px;
`;

export const FlexView = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  color: #1890ff;
  background-color: transparent;
  cursor: pointer;
  margin: 0px;
  font-size: 15px;
`;

export const StyledIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
`;
