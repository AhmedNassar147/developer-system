const validateEmail = email => {
  const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return filter.test(email);
};

export const validateAuthForm = ({
  email,
  password,
  username,
  isSignUpView
}) => {
  let errors = null;
  const emailPass = validateEmail(email);

  if (!emailPass) {
    errors = {
      email: "Please Enter Your Email"
    };
  }

  if (isSignUpView) {
    if (!username) {
      errors = {
        ...errors,
        username: "Please Enter Your username"
      };
    }
  }

  if (!password) {
    errors = {
      ...errors,
      password: "Please Enter Your Password"
    };
  } else if (password.length < 6) {
    errors = {
      ...errors,
      password: "Password should be at least 6 characters"
    };
  }
  return Boolean(errors) ? errors : false;
};
