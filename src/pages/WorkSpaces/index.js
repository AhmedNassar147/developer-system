import React from "react";
import { connect } from "react-redux";
import { Container, Wrapper } from "../Auth/partials/styled";
import WorkSpacesList from "./partials/list";

const WorkSpacesView = ({ history: { push } }) => {
  return (
    <Container>
      <Wrapper width="50%">
        <WorkSpacesList />
      </Wrapper>
    </Container>
  );
};

export default connect(
  null,
  null
)(WorkSpacesView);
