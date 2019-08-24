import React from "react";
import { connect } from "react-redux";
import { getUserDataFinished } from "../pages/Profile/modules/actions";
import { getFormStorage } from "../utils/localStorage";

const { lazy, Suspense } = React;
const PageLayout = lazy(() => import("../components/PageLayout"));

const { useEffect } = React;

export default (PageComponent, useAppLayout) => {
  const ViewComponent = ({ setUserInfo, uuid, ...otherProps }) => {
    const {
      history: { push },
      match: { params }
    } = otherProps;
    useEffect(() => {
      onPageMount();
      // eslint-disable-next-line
    }, [uuid]);

    const onPageMount = () => {
      if (!uuid) {
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
        <PageLayout params={params} children={children} />
      </Suspense>
    ) : (
      children
    );
  };

  const mapStateToProps = state => ({
    uuid: state.getIn(["userProfile", "uuid"])
  });

  const mapDispatchToProps = dispatch => ({
    setUserInfo: info => dispatch(getUserDataFinished(info))
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewComponent);
};
