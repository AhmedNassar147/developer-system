import React from "react";
import { connect } from "react-redux";
import { Layout, StyledLayout, StyledContent } from "./styled";
import SideBar from "./SideBar/index";
import Header from "./Header";
import { getUserData } from "../../pages/Profile/modules/actions";

const { useState, useEffect } = React;

const PageLayout = ({
  children,
  displayName,
  uuid,
  email,
  photoURL,
  fetchUserData,
  selectedWs,
  params
}) => {
  const [collapsed, updateHander] = useState(false);
  useEffect(() => {
    if (!email || !displayName) {
      fetchUserData();
    }
    // eslint-disable-next-line
  }, [displayName, email]);

  const toggle = () => updateHander(!collapsed);

  return (
    <StyledLayout>
      {SideBar({
        collapsed,
        selectedWs
      })}
      <Layout>
        <Header
          collapsed={collapsed}
          toggle={toggle}
          uuid={uuid}
          imgUrl={photoURL}
          wsId={params && params.wsId}
        />
        <StyledContent>{children}</StyledContent>
      </Layout>
    </StyledLayout>
  );
};

const mapStateToProps = (state, { params: { wsId } }) => {
  let selectedWs;
  const worksSapces = state.getIn(["workSpaces", "data"]);
  if (worksSapces && wsId) {
    const item = worksSapces.find(item => item.id === wsId);
    if (item) {
      selectedWs = item.name;
    }
  }

  return {
    displayName: state.getIn(["userProfile", "displayName"]),
    photoURL: state.getIn(["userProfile", "photoURL"]),
    email: state.getIn(["userProfile", "email"]),
    uuid: state.getIn(["userProfile", "uuid"]),
    selectedWs
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(getUserData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageLayout);
