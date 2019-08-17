import React from "react";
import { connect } from "react-redux";
import { Layout, StyledLayout, StyledContent } from "./styled";
import SideBar from "./SideBar";
import Header from "./Header";
import { getUserData } from "../../pages/Profile/modules/actions";

const { useState, useEffect } = React;

const PageLayout = ({ children, userInfo, fetchUserData }) => {
  const [collapsed, updateHander] = useState(false);
  useEffect(() => {
    if (!userInfo.email || !userInfo.displayName) {
      fetchUserData();
    }
    // eslint-disable-next-line
  }, [userInfo]);

  const toggle = () => updateHander(!collapsed);

  return (
    <StyledLayout>
      {SideBar({ collapsed })}
      <Layout>
        <Header
          collapsed={collapsed}
          toggle={toggle}
          uuid={userInfo.uuid}
          imgUrl={userInfo.photoURL}
        />
        <StyledContent>{children}</StyledContent>
      </Layout>
    </StyledLayout>
  );
};

const mapStateToProps = state => ({
  userInfo: state.get("userProfile").toJS()
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(getUserData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageLayout);
