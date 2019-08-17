import React from "react";
import { connect } from "react-redux";
import { StyledIcon, PopoverItem } from "./styledheader";
import { fetchWorkSpaces } from "../../pages/WorkSpaces/modules/actions";

const { useEffect, lazy, Suspense } = React;
const Popover = lazy(() => import("antd/es/popover"));

const WsMenu = ({ wspcs, uuid, getWorkSpaces }) => {
  useEffect(() => {
    if (!wspcs) {
      getWorkSpaces(uuid);
    }
    // eslint-disable-next-line
  }, [wspcs]);

  let content = null;
  if (wspcs) {
    content = wspcs.map(({ id, name }) => (
      <PopoverItem key={id} to={`/workspace/${id}`} children={name} />
    ));
  }

  return wspcs ? (
    <Suspense fallback={null}>
      <Popover content={content} trigger="click" placement="bottom">
        <StyledIcon
          type="appstore"
          lineheight="0"
          padding="0 17px"
          size="21px"
        />
      </Popover>
    </Suspense>
  ) : null;
};

const mapStateToProps = state => ({
  wspcs: state.getIn(["workSpaces", "data"]),
  uuid: state.getIn(["userProfile", "uuid"])
});

const mapDispatchToProps = dispatch => ({
  getWorkSpaces: uuid => dispatch(fetchWorkSpaces(uuid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WsMenu);
