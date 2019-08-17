import React from "react";
import { connect } from "react-redux";
import { getUserDataFinished } from "../pages/Profile/modules/actions";
import { getFormStorage } from "../utils/localStorage";

const { lazy, Suspense } = React;
const PageLayout = lazy(() => import("../components/PageLayout"));

const { useEffect } = React;

export default (PageComponent, useAppLayout) => {
  const ViewComponent = ({ setUserInfo, userInfo, ...otherProps }) => {
    const {
      history: { push }
    } = otherProps;
    useEffect(() => {
      onPageMount();
      // eslint-disable-next-line
    }, [userInfo]);

    const onPageMount = () => {
      const userData = userInfo.toJS();
      if (!userData.uuid) {
        const user = getFormStorage("user");
        if (user) {
          setUserInfo({ uuid: user });
        } else {
          push("/");
        }
      }
    };

    const children = <PageComponent {...otherProps} />;

    return useAppLayout ? (
      <Suspense fallback={null}>
        <PageLayout children={children} />
      </Suspense>
    ) : (
      children
    );
  };

  const mapStateToProps = state => ({
    userInfo: state.get("userProfile")
  });

  const mapDispatchToProps = dispatch => ({
    setUserInfo: info => dispatch(getUserDataFinished(info))
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewComponent);
};
