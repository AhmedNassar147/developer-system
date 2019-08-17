import React from "react";
import { connect } from "react-redux";
import List from "antd/es/list";
import { fetchWorkSpaces } from "../modules/actions";
import { ListHeader } from "./styled";
import Link from "../../../components/Link";

const { useEffect } = React;

const { Item } = List;

const ListView = ({ data, loading, getWorkSpaces, uuid }) => {
  useEffect(() => {
    if (uuid) {
      getWorkSpaces(uuid);
    }
    // eslint-disable-next-line
  }, [uuid]);

  const renderItem = ({ name, id }) => (
    <Item>
      <Link
        fontSize="17px"
        width="100%"
        to={`/workspace/${id}`}
        children={name}
      />
    </Item>
  );

  return (
    <List
      size="large"
      header={<ListHeader children="My WorkSpaces" />}
      bordered
      loading={loading}
      rowKey="id"
      dataSource={data}
      renderItem={renderItem}
    />
  );
};

const mapStateToProps = state => ({
  data: state.getIn(["workSpaces", "data"]),
  loading: state.getIn(["workSpaces", "loading"]),
  uuid: state.getIn(["userProfile", "uuid"])
});

const mapDispatchToProps = dispatch => ({
  getWorkSpaces: uuid => dispatch(fetchWorkSpaces(uuid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);
