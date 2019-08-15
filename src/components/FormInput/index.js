import React from "react";
import { Container, ErrorView } from "./styled";
import Input from "antd/es/input";

export default ({ error, ...inputProps }) => (
  <Container>
    <Input {...inputProps} />

    {error && <ErrorView children={error} />}
  </Container>
);
