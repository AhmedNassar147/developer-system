import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  text-decoration: none;
  font-size: ${({ fontSize }) => fontSize || "15px"};
  width: ${({ width }) => width};
`;
