import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Route } from "react-router-dom";
import { getUserDataFinished } from "../pages/Profile/modules/actions";
import { getFormStorage } from "../utils/localStorage";

const { useEffect } = React;

const ProtectedRoute = ({
  PageComponent,
  pagePath,
  backToLogin,
  setUserInfo,
  userInfo
}) => {
  useEffect(() => {
    onPageMount();
    // eslint-disable-next-line
  }, [userInfo]);

  const onPageMount = () => {
    const userData = userInfo.toJS();
    if (!userData.uuid) {
      const user = JSON.parse(getFormStorage("user"));
      if (Boolean(user)) {
        setUserInfo(user);
      } else {
        backToLogin();
      }
    }
  };

  const componentWithProps = props => (
    <PageComponent {...props} userInfo={userInfo} />
  );

  return <Route path={pagePath} exact render={componentWithProps} />;
};

const mapStateToProps = state => ({
  userInfo: state.get("userProfile")
});

const mapDispatchToProps = dispatch => ({
  setUserInfo: info => dispatch(getUserDataFinished(info)),
  backToLogin: () => dispatch(push("/"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedRoute);
