import React from "react";
import { connect } from "react-redux";
import Popover from "antd/es/popover";
import Button from "antd/es/button/button";
import { ButtonContainer, Content } from "./styled";
import Input from "../../../components/FormInput";
import { onCreateWorkSpace, onFormChanged } from "../modules/actions";

const FormView = ({
  onChange,
  value,
  isCreatingWS,
  handleCreateWs,
  formError
}) => {
  const content = (
    <Content>
      {Input({
        placeholder: "type WorkSpace Name",
        value,
        onChange,
        error: formError
      })}

      <Button
        type="primary"
        size="small"
        loading={isCreatingWS}
        disabled={isCreatingWS}
        onClick={handleCreateWs}
      >
        Confirm
      </Button>
    </Content>
  );

  return (
    <ButtonContainer>
      <Popover content={content} trigger="click" placement="bottom">
        <Button children="Create WorkSpace" type="default" size="large" />
      </Popover>
    </ButtonContainer>
  );
};

const mapStateToProps = state => ({
  value: state.getIn(["workSpaces", "workSpaceName"]),
  isCreatingWS: state.getIn(["workSpaces", "isCreatingWS"]),
  formError: state.getIn(["workSpaces", "formError"])
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target: { value } }) => dispatch(onFormChanged(value)),
  handleCreateWs: () => dispatch(onCreateWorkSpace())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormView);
