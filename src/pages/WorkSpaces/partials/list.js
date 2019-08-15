import React from "react";
import { connect } from "react-redux";
import { fetchWorkSpaces } from "../modules/actions";

const { lazy, Suspense, useEffect } = React;
const List = lazy(() => import("antd/es/list"));

const { _result: Result } = List;

const ListView = ({ data, loading, getWorkSpaces }) => {
  useEffect(() => {
    getWorkSpaces();
    // eslint-disable-next-line
  }, []);

  return (
    <Suspense fallback={null}>
      <List
        size="large"
        header="My Work spaces"
        bordered
        loading={loading}
        rowKey="id"
        dataSource={data}
        renderItem={item => <Result.Item>{item}</Result.Item>}
      />
    </Suspense>
  );
};

const mapStateToProps = state => {
  const { data, loading } = state.toJS().workSpaces;
  return {
    data,
    loading
  };
};

const mapDispatchToProps = dispatch => ({
  getWorkSpaces: () => dispatch(fetchWorkSpaces())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);
