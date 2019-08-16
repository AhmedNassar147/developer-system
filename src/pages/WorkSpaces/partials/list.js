import React from "react";
import { connect } from "react-redux";
import { fetchWorkSpaces } from "../modules/actions";
import List from "antd/es/list";

const { useEffect } = React;

const { Item } = List;

const ListView = ({ data, loading, getWorkSpaces, uuid }) => {
  useEffect(() => {
    if (uuid) {
      getWorkSpaces(uuid);
    }
    // eslint-disable-next-line
  }, [uuid]);

  return (
    <List
      size="large"
      header="My Work spaces"
      bordered
      loading={loading}
      rowKey="id"
      dataSource={data}
      renderItem={({ name }) => <Item>{name}</Item>}
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
