const validate = (value, type) => {
  const errors = {};
  if (type === "login") {
    if (!value.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
      errors.email = "email form is not valid";
    } else {
      delete errors.email;
    }

    if (!value.password) {
      errors.password = "password is required";
    } else if (value.password.length < 6) {
      errors.password = "password need to be more than 6 character";
    } else {
      delete errors.password;
    }
  }

  if (type === "signup") {
    if (!value.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
      errors.email = "email form is not valid";
    } else {
      delete errors.email;
    }

    if (!value.password) {
      errors.password = "password is required";
    } else if (value.password.length < 6) {
      errors.password = "password need to be more than 6 character";
    } else {
      delete errors.password;
    }
    if (!value.name.trim()) {
      errors.name = "Username is required";
    } else {
      delete errors.name;
    }

    if (!value.confirmPassword) {
      errors.confirmPassword = "confirmPassword is required";
    } else if (value.confirmPassword !== value.password) {
      errors.confirmPassword = "password with confirmPassword is not match";
    } else {
      delete errors.confirmPassword;
    }

    if (value.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "please accept our ruels";
    }
  }
  return errors;
};

export default validate;
