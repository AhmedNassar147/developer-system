import styled from "styled-components";
import Icon from "antd/lib/icon";

export default styled(Icon)`
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => `${size || 16}px`};
  ${({ color = "#fff", disabled }) => `
    color: ${disabled ? "rgba(0, 0, 0, 0.12)" : color} !important;
    cursor: ${disabled ? "not-allowed" : "pointer"} !important;
  `};
`;
