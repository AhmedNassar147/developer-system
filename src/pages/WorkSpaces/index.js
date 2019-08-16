import React from "react";
import { Container, Wrapper } from "../Auth/partials/styled";
import WorkSpaceForm from "./partials/createWorkSpaceForm";
import WorkSpacesList from "./partials/list";

const WorkSpacesView = () => (
  <Container>
    <Wrapper width="50%">
      <WorkSpaceForm />
      <WorkSpacesList />
    </Wrapper>
  </Container>
);

export default WorkSpacesView;
