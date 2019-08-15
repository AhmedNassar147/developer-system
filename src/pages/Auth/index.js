import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Wrapper,
  FlexView,
  Text,
  StyledIcon,
  Form
} from "./partials/styled";
import Button from "antd/es/button";
import Input from "../../components/FormInput";
import { ErrorView } from "../../components/FormInput/styled";
import {
  onLoginOrSignUp,
  onFormChanged,
  onToggleView
} from "./modules/actions";
import { getFormStorage } from "../../utils/localStorage";
import { isArrayHasData } from "../../utils/isThereData";

const { useEffect } = React;

const AuthView = ({
  loading,
  password,
  username,
  email,
  isSignUpView,
  onSubmit,
  toggleFormView,
  onChange,
  errors,
  formError,
  history: { push }
}) => {
  useEffect(() => {
    const user = JSON.parse(getFormStorage("user"));
    if (Boolean(user)) {
      const uuid = user.uuid;
      if (isArrayHasData(user.workSpaces)) {
        push(`/workspaces`);
      } else {
        push(`/my-workspace/${uuid}`);
      }
    }
    // eslint-disable-next-line
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          {isSignUpView &&
            Input({
              placeholder: "Username",
              name: "username",
              value: username,
              error: errors && errors.username,
              onChange,
              prefix: <StyledIcon type="user" />
            })}

          {Input({
            placeholder: "Email",
            name: "email",
            value: email,
            error: errors && errors.email,
            onChange,
            prefix: <StyledIcon type="mail" />
          })}

          {Input({
            placeholder: "Password",
            name: "password",
            value: password,
            type: "password",
            error: errors && errors.password,
            onChange,
            prefix: <StyledIcon type="lock" />
          })}

          <FlexView>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}
            >
              {isSignUpView ? "Register" : "Login"}
            </Button>
          </FlexView>
        </Form>

        {!loading && (
          <Text
            children={isSignUpView ? "Login" : "Register Now"}
            onClick={toggleFormView}
          />
        )}

        {formError && <ErrorView children={formError} />}
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = state => {
  const { authReducer } = state.toJS();
  return authReducer;
};

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(onLoginOrSignUp()),
  onChange: ({ target: { name, value } }) =>
    dispatch(
      onFormChanged({
        name,
        value
      })
    ),
  toggleFormView: () => dispatch(onToggleView())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthView);
